//variable Declaration 
var express = require("express");
var users = require("../controller/controller.js")
var routes = express.Router();


routes.get("/users", users.getall);
routes.get("/user/:id", users.getone);
routes.post("/user/find", users.findData);
routes.post("/user/finds", users.findDatas);
routes.post("/user/forgotPasswordEmail", users.forgotPassword);
routes.post("/user", users.create);
routes.put("/user/:id", users.update);
routes.post("/user/upload/:id", users.uploadFile)
routes.post('/user/send/:id', users.send);
// routes.delete("user/:id", users.remove);

module.exports = routes;