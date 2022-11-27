function getMessages(req, res) {
  res.send("<ul><li>helllo albet! </li></ul>");
}

function psotMessages(req, res) {
  res.send("updating messages.....");
}

module.exports = {
  getMessages,
  psotMessages,
};
