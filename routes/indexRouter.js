const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (_, res) =>
  res.render("index", { title: "Message Board", messages: messages }),
);

indexRouter.get("/new", (_, res) =>
  res.render("messages/form", { title: "New Message" }),
);
indexRouter.post("/new", (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/message/:messageId", (req, res) => {
  const message = messages.find(({ id }) => id === req.params.messageId);
  if (!message) return res.redirect("/");
  res.render("messages/messageDetailed", {
    message: message,
  });
});

module.exports = indexRouter;
