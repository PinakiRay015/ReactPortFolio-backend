require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const myRouter = require("./router/router");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-portfolio-app.onrender.com"],
  })
);

app.use(myRouter);

app.get("/", (req, res) => {
  res.send("Hello developers !! welcome to the portfolio backend");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT , () =>
        {
            console.log(`The server is listening on port ${PORT}`);
        })
    })
    .catch((err) => console.log(err))
