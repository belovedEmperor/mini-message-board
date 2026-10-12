const db = require("../db/queries");

async function messagesListGet(_, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Message Board", messages: messages });
}

function messagesNewGet(_, res) {
  res.render("messages/form", { title: "New Message" });
}

async function messagesNewPost(req, res) {
  db.insertMessage(req.body.text, req.body.name);
  res.redirect("/");
}

async function messageDetailedGet(req, res) {
  const message = await db.getMessage(req.params.id);
  console.log(message);
  if (!message) return res.redirect("/");
  res.render("messages/messageDetailed", {
    message: message,
  });
}

module.exports = {
  messagesListGet,
  messagesNewGet,
  messagesNewPost,
  messageDetailedGet,
};
