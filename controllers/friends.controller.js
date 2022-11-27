const friends = require("../models/friends.model");
const model = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      Error: " Missing friends name and emailid",
    });
  } else if (!req.body.email) {
    return res.status(400).json({
      Error: "email id is missing please add once ",
    });
  }
  const newFriend = {
    id: model.length,
    name: req.body.name,
    email: req.body.email,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  const friendID = Number(req.params.friendID);
  const friend = model[friendID];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      Error: "whoops, friend not found in this id",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};
