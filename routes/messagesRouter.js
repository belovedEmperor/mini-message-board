const { Router } = require("express");

const messagesRouter = Router();
const messagesController = require("../controllers/messagesController");

messagesRouter.get("/", messagesController.messagesListGet);

messagesRouter.get("/new", messagesController.messagesNewGet);
messagesRouter.post("/new", messagesController.messagesNewPost);

messagesRouter.get("/message/:id", messagesController.messageDetailedGet);

module.exports = messagesRouter;
