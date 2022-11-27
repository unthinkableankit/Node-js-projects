const express = require("express");

const messageController = require("../controllers/message.controller");

const messageRouter = express.Router();

messageRouter.use((req, res, next) => {
  console.log("ip address is", req.ip);
  next();
});
messageRouter.get("/", messageController.getMessages);
messageRouter.post("/", messageController.psotMessages);

module.exports = messageRouter;
