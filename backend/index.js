const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3001;
const url = "https://3uskrwhsi7.execute-api.us-east-1.amazonaws.com/prod/ui-to-db?table=";

app.get("/openmv", async (req, res)=>{
    axios.get(url+"openmvdb")
    .then(resp =>{      
        res.send(resp.data.body)
    })
});

app.get("/s3data", async (req, res)=>{
    axios.get(url+"s3data")
    .then(resp =>{
        res.send(resp.data.body)
    })    
});

app.get("/greengrass", async (req, res)=>{
    axios.get(url+"greengrasscount")
    .then(resp =>{        
        res.send(resp.data.body)
    })
});

// app.get("/health", async (req, mainres) => {
//     axios.get(url+"/health")
//         .then(res => {
//             console.log(res.data);
//             mainres.send(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//             mainres.send(err);
//         })
// })

// app.get("/verify", async (req, mainres) => {
//     axios.get(`${url}/verify`)
//         .then(res => {
//             console.log(res.data);
//             mainres.send(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//             mainres.send(err);
//         })
// })

// app.get("/", async (req, res) => {
//     res.send("homepage");
// });

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
