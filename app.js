const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");
const app = express();
const PORT = 3000;

//middleware code
app.use((req, res, next) => {
  const delta = Date.now();
  next();
  const charli = Date.now() - delta;
  console.log(`${req.method}${req.baseUrl} ${req.url} ${charli}`);
});
app.use("/site", express.static("public")); //express static file middleware
app.use(express.json()); // json parsing middleware

app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);
// template engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("", (req, res) => {
  res.render("index", {
    title: "let's learn Ubuntu",
    caption: "Ubuntu is open sourse opereating system",
  });
});

//page not found route
app.get("/*", (req, res) => {
  res.status(404).send("whoops, page not foud.....");
});

//server is listening on port 3000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}....`);
});
