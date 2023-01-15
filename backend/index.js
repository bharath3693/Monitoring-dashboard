const express = require('express')
const axios = require('axios')
const app = express()

const port = process.env.PORT || 8080;
const url = "https://vf7wncfcv8.execute-api.ap-northeast-1.amazonaws.com/prod"

app.get("/health", async (req, mainres) => {
    axios.get(`${url}/health`)
        .then(res => {
            console.log(res.data);
            mainres.send(res.data);
        })
        .catch(err => {
            console.log(err);
            mainres.send(err);
        })
})


app.get("/verify", async (req, mainres) => {
    axios.get(`${url}/verify`)
        .then(res => {
            console.log(res.data);
            mainres.send(res.data);
        })
        .catch(err => {
            console.log(err);
            mainres.send(err);
        })
})

app.get("/", async (req, res) => {
    res.send("homepage");
});

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})