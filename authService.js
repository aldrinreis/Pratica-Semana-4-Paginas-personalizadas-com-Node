// authService.js
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(session({ secret: "1234567890" }));
app.use(bodyParser.urlencoded({ extended: true }));

var login = "admin";
var senha = "1234";

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));

app.get("/", (req, res) => {
  if (req.session.login) {
    res.render("logado");
    console.log("usuário logado: " + req.session.login);
  } else {
    res.render("home");
  }
});

app.post("/", (req, res) => {
  if (req.body.login == login && req.body.password == senha) {
    req.session.login = login;
    res.render("logado");
  } else {
    res.render("home");
  }
});

module.exports = app;
