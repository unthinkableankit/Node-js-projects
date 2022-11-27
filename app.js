const express = require("express");

const messageController = require("./controllers/message.controller");
const friendController = require("./controllers/friends.controller");
const app = express();
const PORT = 3000;

//middleware code
app.use((req, res, next) => {
  const delta = Date.now();
  next();
  const charli = Date.now() - delta;
  console.log(`${req.method} ${req.url} ${charli}`);
});

// adding new data to the friend list using post request
app.use(express.json());
app.post("/friends", friendController.postFriends);
app.get("/friends", friendController.getFriends);
app.get("/friends/:friendID", friendController.getFriend);

//routing with mutiple requests
app.get("/messages", messageController.getMessages);
app.post("/messages", messageController.psotMessages);

//page not found route
app.get("/*", (req, res) => {
  res.status(404).send("whoops, page not foud.....");
});

//server is listening on port 3000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}....`);
});
