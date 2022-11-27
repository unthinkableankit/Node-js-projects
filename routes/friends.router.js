const express = require("express");

const friendController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("ip address is", req.ip);
  next();
});

friendsRouter.post("/", friendController.postFriends);
friendsRouter.get("/", friendController.getFriends);
friendsRouter.get("/:friendID", friendController.getFriend);

module.exports = friendsRouter;
