const express = require("express");
const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "ankit",
    email: "abc.unthinkable.co",
  },
  {
    id: 1,
    name: "john",
    email: "john.unthinkable.co",
  },
  {
    id: 2,
    name: "jrry",
    email: "jerry.unthinkable.co",
  },
  {
    id: 3,
    name: "foocks",
    email: "foocks.unthinkable.co",
  },
  {
    id: 4,
    name: "newmoon",
    email: "newmoon.unthinkable.co",
  },
];

//middleware code
app.use((req, res, next) => {
  const delta = Date.now();
  next();
  const charli = Date.now() - delta;
  console.log(`${req.method} ${req.url} ${charli}`);
});

// adding new data to the friend list using post request

app.use(express.json());
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      Error: " Missing friends name",
    });
  } else if (!req.body.email) {
    return res.status(400).json({
      Error: "email id is missing please add once ",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
    email: req.body.email,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

//routes

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

//parameterised routes with it's error handeling
app.get("/friends/:friendID", (req, res) => {
  const friendID = Number(req.params.friendID);
  const friend = friends[friendID];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      Error: "whoops, friend not found in this id",
    });
  }
});

//routing with mutiple requests
app.get("/messages", (req, res) => {
  res.send("<ul><li>helllo albet! </li></ul>");
});

app.post("/messages", (req, res) => {
  res.send("updating messages.....");
});

app.get("/api", (req, res) => {
  res.send("updating messages.....");
});

app.get("/*", (req, res) => {
  res.status(404).send("whoops, page not foud.....");
});

//server is listening on port 3000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}....`);
});
