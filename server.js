require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const myRouter = require('./router/router');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';

app.use(express.json());
app.use(cors())
app.use(myRouter)

app.get("/" , (req , res) =>
{
    res.send("welcome developers")
})

app.get("/about" , (req , res) =>
{
    res.send("This is about page")
})

mongoose.connect(process.env.DATABASE).then(() =>
{
    try {
        app.listen(port , hostname , () =>
        {
            console.log(`The server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
})