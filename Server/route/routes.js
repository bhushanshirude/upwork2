//variable Declaration 
var express = require("express");
var users = require("../controller/controller.js")
var routes = express.Router();


routes.get("/users", users.getall);
routes.get("/user/:id", users.getone);
routes.post("/user/find", users.findData);
routes.post("/user/forgotPasswordEmail", users.forgotPassword);
routes.post("/user", users.create);
routes.put("/user/:id", users.update);
// routes.delete("user/:id", users.remove);

module.exports = routes;