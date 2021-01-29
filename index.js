const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");
const lodash = require("lodash");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.listen(3000, function () {
    console.log("the app is up on port 3000");
});
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("home");
});