const express = require("express");
const path = require("path");
const app = express();
const port = 3500;

const getUsers = require("Model/userModel.js");

app.use(express.static('Views'));

app.get("/users", function (req, res) {
    res.send(getUsers())
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "Views", "home.html"));
});

app.get("/pets", function (req, res) {
    res.sendFile(path.join(__dirname, "Views", "pets.html"));
});

app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "Views", "contact.html"));
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

