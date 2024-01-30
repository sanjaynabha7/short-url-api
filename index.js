const express = require('express');
const cors = require('cors')
const ShortUrl = require("./model/shortUrl")
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())   
const mongoose = require('mongoose')
 
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
    console.log("Connected")
}).catch((e) => {
    console.log(e, "Error Mongoose ")
})


app.post("/convert-short-url", (req, res) => {
    let data = req.body
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    const payload = {
        fullUrl: data.fullUrl,
        shortUrl: text
    }
    ShortUrl.create(payload).then(createdRecord => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: createdRecord,
        });
    }).catch(e => {
        res.status(400).send({
            status: 400,
            msg: "error",
            data: e,
        });
    });
});



app.get("/get-url", (req, res) => {
    ShortUrl.find().then(createdRecord => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: createdRecord,
        });
    }).catch(e => {
        res.status(400).send({
            status: 400,
            msg: "error",
            data: e,
        });
    });
});


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
}) 