const path = require("path");

function getMessages(req, res) {
  // res.send("<ul><li>Hellooo albet Einsten! </li></ul>");
  // res.sendFile(path.join(__dirname, "../public/ubuntu-20.jpeg"));
  res.sendFile(path.join(__dirname, "../public/Bharat resume.pdf"));
}

function psotMessages(req, res) {
  res.send("updating messages.....");
}

module.exports = {
  getMessages,
  psotMessages,
};
