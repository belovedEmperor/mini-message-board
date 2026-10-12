const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const usernameLengthErr = "must be between 1 and 25 characters (inclusive).";
const textlengthErr = "must be between 1 and 500 characters (inclusive).";

const validateMessage = [
  body("text")
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage(`Text ${textlengthErr}`),
  body("username")
    .trim()
    .isLength({ min: 1, max: 25 })
    .withMessage(`Username ${usernameLengthErr}`),
];

async function messagesListGet(_, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Message Board", messages: messages });
}

function messagesNewGet(_, res) {
  res.render("messages/form", { title: "New Message" });
}

const messagesNewPost = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("messages/form", {
        title: "New Message",
        errors: errors.array(),
      });
    }

    const { username, text } = matchedData(req);
    await db.insertMessage(text, username);
    res.redirect("/");
  },
];

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
