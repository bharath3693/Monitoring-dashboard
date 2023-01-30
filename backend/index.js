const express = require('express')
const axios = require('axios')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080;
const url = "https://3uskrwhsi7.execute-api.us-east-1.amazonaws.com/prod/ui-to-db?table=";

var nodeoutlook = require("nodejs-nodemailer-outlook");
const crypto = require("crypto");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

// AWS configuration
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "accessKeyId": "AKIAVRIL3A7GZX4MIPO2",
    "secretAccessKey": "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"
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();


//SIGNING UP
app.put("/write", (req, res) => {
    var userDetails = JSON.stringify(req.body);
    userDetails = JSON.parse(userDetails);
    const encryptedString = cryptr.encrypt(userDetails.confirmPassword);
    console.log(userDetails)

    var input = {
        "username": userDetails.userName,
        "firstName": userDetails.firstName,
        "lastName": userDetails.lastName,
        "email": userDetails.email,
        "password": encryptedString,
        "status": 0,
    };

    //adding to users table
    var params = {
        TableName: "request_user_test",
        Item: input
    };
    docClient.put(params, (err, data) => {
        if (err) {
            console.log("error" + JSON.stringify(err, null, 2));
        }
        else {
            console.log(data);
            console.log("saved success");
        }
    });

    //adding to verification table
    var userName = userDetails.userName;
    var token = crypto.randomBytes(32).toString("hex");
    var timestamp = String(new Date().getTime());
    var tokenInput = {
        "username": userName,
        "token": token,
        "expiry": timestamp
    };

    var params = {
        TableName: "Verification_table",
        Item: tokenInput
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.log("error man" + JSON.stringify(err, null, 2));
        }
        else {
            console.log("saved success");
        }
    });


    //sending email verification link
    nodeoutlook.sendEmail({
        auth: {
            user: "intelligent.edge@outlook.com",
            pass: "Accenture@"
        },
        from: 'intelligent.edge@outlook.com',
        to: input.email,
        subject: 'This is the verification mail ',
        text: `http://localhost:8080/${userName}/verify/${token} 
        Please click on the link to verify your email`,
        replyTo: 'receiverXXX@gmail.com',
        onError: (e) => console.log("error" + e),
        onSuccess: (i) => {
            console.log("success");
            res.send({ "status": "true" });
        }
    }
    );

});


app.get("/:username/verify/:token", (req, res) => {
    var username = req.params['username'];
    var token = req.params['token'];

    var params = {
        TableName: "Verification_table",
        Key: {
            "username": username
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            res.json("error " + JSON.stringify(err, null, 2));
        }
        else if (data['Item']['token'] == token) {
            var params = {
                TableName: "request_user_test",
                Key: {
                    "username": username
                },
                UpdateExpression: "set #sw = :x",
                ExpressionAttributeValues: { ":x": 2 },
                ExpressionAttributeNames: { "#sw": "status" }
            };

            docClient.update(params, function (err, data) {
                if (err) {
                    console.log("error" + JSON.stringify(err, null, 2));
                }
                else {
                    console.log("Verification success");
                }
            });
        }
    })

})

//LOGIN
app.post("/login", (req, res) => {
    var result = { "status": "empty" };
    input = JSON.stringify(req.body);
    input = JSON.parse(input);

    console.log("username   " + input.userName + "  password    " + input.confirmPassword);


    let check = function () {

        var params = {
            TableName: "request_user_test",
            Key: {
                "username": input.userName
            }
        };

        docClient.get(params, function (err, data) {
            if (err) {
                res.json("error " + JSON.stringify(err, null, 2));
            }
            else {

                console.log(" here is data  " + JSON.stringify(data, null, 2));
                var input2 = JSON.stringify(data, null, 2);
                input2 = JSON.parse(input2);
                console.log("fetching  password   " + input2.Item.password);

                const decryptedString = cryptr.decrypt(input2.Item.password);

                console.log(decryptedString);
                if (input2.Item.status == "1") {
                    if (decryptedString == input.confirmPassword) {
                        console.log("congratulations you have logged in succesfully");
                        // res.writeHead(301,'/something');

                        result = { "status": "true", "url": "http://localhost:3000/Dashboard" };

                        // console.log("result inside password correct" + JSON.stringify(result));

                        // // res.send("password cfm");
                        // // redirection to dashboard
                        // console.log("type of ret" + typeof result);
                        // result = JSON.stringify(result);
                        // console.log("type of ret" + typeof result);
                        // result = JSON.parse(result);
                        // console.log("type of ret" + typeof result);
                        // console.log(result);
                        result.status = "true";
                    }
                    else {
                        console.log("Incorrect Password");
                        result = {
                            "status": "incorrectPassword"
                        }
                    }
                }
                else {
                    console.log("wait for admin confirmation");
                    result = { "status": "adminConformation" }
                }

                console.log("result value t" + JSON.stringify(result));
                res.send(result);

            }

        })
    }
    let var1 = check();
    // console.log(var1);
    console.log("result " + result);


});
//LOGIN


// APPROVE DATA
app.post("/approve", (req, res) => {
    // fetch data from user management table
    var input = JSON.stringify(req.body);
    input = JSON.parse(input);
    console.log(" username " + input.userName);

    var params = {
        TableName: "request_user_test",
        Key: {
            "username": input.userName
        },

        UpdateExpression: "set #sw = :x",
        ExpressionAttributeValues: {
            ":x": 1

        },
        ExpressionAttributeNames: {
            "#sw": "status"
        }
    };
    docClient.update(params, function (err, data) {

        if (err) {
            res.send(false)
        }
        else {
            res.send(true)
            console.log("Approved");
        }
    });
});

//REJECT DATA
app.post("/reject", (req, res) => {
    var input = JSON.stringify(req.body);
    input = JSON.parse(input);
    console.log(" username " + input.userName);
    var params = {
        TableName: "request_user_test",
        Key: {
            "username": input.userName
        },

        UpdateExpression: "set #sw = :x",
        ExpressionAttributeValues: {
            ":x": -1

        },
        ExpressionAttributeNames: {
            "#sw": "status"
        }
    };
    return docClient.update(params, function (err, data) {
        if (err) {
            res.send(false)
        }
        else {
            res.send(true)
            console.log("Rejected");
        }
    });
})

//FORGOT PASSWORD
var otp = "999";
app.post("/forgot", (req, res) => {

    input = JSON.stringify(req.body);
    input = JSON.parse(input);

    console.log("username   " + input.userName);


    var params = {
        TableName: "request_user_test",
        Key: {
            "username": input.userName
        }
    };

    docClient.get(params, function (err, data) {
        if (err) {
            res.json("error " + JSON.stringify(err, null, 2));
        }
        else {
            console.log(" here is data  " + JSON.stringify(data, null, 2));
            var input2 = JSON.stringify(data, null, 2);
            input2 = JSON.parse(input2);

            var email = input2.Item.email;
            console.log("fetching  email   " + email);
            otp = Math.floor(Math.random() * 9000 + 1000);
            console.log(otp);
            nodeoutlook.sendEmail({
                auth: {
                    user: "intelligent.edge@outlook.com",
                    pass: "Accenture@"
                },
                from: 'intelligent.edge@outlook.com',
                to: email,
                subject: 'This is the verification mail ',
                text: 'Please enter this opt ' + otp + ' to verify your email',
                replyTo: 'receiverXXX@gmail.com',

                onError: (e) => console.log("error" + e),
                onSuccess: (i) => {
                    console.log("success")

                    res.send({ "status": "true" });
                }

            }


            );
        }
    });

});
//FORGOT PASSWORD


// VERIFY OTP
app.post("/verify", (req, res) => {

    input = JSON.stringify(req.body);
    input = JSON.parse(input);

    console.log("username   " + input.otp);

    console.log(" send otp " + otp);

    if (input.otp == otp) {
        res.send({ "status": "true" });
    }
    else {
        res.send({ "status": "false" });
    }

});
// VERIFY OTP


// NEW PASSWORD
app.post("/password", (req, res) => {

    var input = JSON.stringify(req.body);
    input = JSON.parse(input);
    console.log(" username " + input.userName);
    console.log(" password " + input.confirmPassword);

    const encryptedString = cryptr.encrypt(input.confirmPassword);

    var params = {
        TableName: "request_user_test",
        Key: {
            "username": input.userName
        },
        UpdateExpression: "set #sw = :x",

        ExpressionAttributeValues: {
            ":x": encryptedString

        },
        ExpressionAttributeNames: {
            "#sw": "password"
        }
    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("error" + JSON.stringify(err, null, 2));
            res.send({ "status": "false" });
        }
        else {
            console.log("password updated succesfully");
            res.send({ "status": "true" });
        }
    });



})
// NEW PASSWORD


//FETCH USER DATA
app.get("/userdata", (req, res) => {
    var params = {
        TableName: "request_user_test",
        ExpressionAttributeNames: { '#s': 'status' },
        ProjectionExpression: "lastName, username, email, firstName, #s",
    };

    return docClient.scan(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            return err
        }
        else {
            console.log("data received")
            res.send(data)
            // data.Items.forEach(function(element, index, array) {

            //   });
        }
    })
})


//Fetch Profile Details
app.post("/profiledata", (req, res) => {
    var { userName } = req.body;
    var params = {
        TableName: "request_user_test",
        Key: {
            "username": userName
        }
    };
    return docClient.get(params, function (err, data) {
        if (err) {
            res.json("error " + JSON.stringify(err, null, 2));
        }
        else {
            res.send(data)
        }
    })

})


app.put("/editprofile", (req, res) => {
    const { username, fname, lname } = req.body;
    var params = {
        TableName: "request_user_test",
        Key: {
            "username": username
        }
    };

    console.log("working")
    var params = {
        TableName: "request_user_test",
        Key: {
            "username": username
        },
        UpdateExpression: "set firstName = :fname, lastName = :lname",
        ExpressionAttributeValues: {
            // ":uname": username,
            ":fname": fname,
            ":lname": lname
        }
    };
    return docClient.update(params, function (err, data) {
        if (err) {
            console.log(err)
            res.json({ "response": false })
        }
        else {
            
            res.json({ "response": true })
            console.log("submitted");
        }
    });

})



//DB FROM SUJITH DYNAMODB
app.get("/edgegateway", async (req, res) => {
    axios.get(url + "EdgeGatewayDevices")
        .then(resp => {
            res.send(resp.data.body)
        })
});

app.get("/edgedevices", async (req, res) => {
    axios.get(url + "EdgeDevicesTable")
        .then(resp => {
            res.send(resp.data.body)
        })
});

app.get("/greengrass", async (req, res) => {
    axios.get(url + "greengrasscount")
        .then(resp => {
            res.send(resp.data.body)
        })
});



app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
