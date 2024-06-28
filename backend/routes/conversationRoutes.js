const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

router.post("/add", conversationController.addConversation);
router.post("/chat/:id", conversationController.addChatMessage);
router.get("/chat/:id", conversationController.getChatMessages);

module.exports = router;
