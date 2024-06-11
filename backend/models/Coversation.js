// models/Conversation.js
const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  participants: {
    type: [String],
    required: true,
  },
  messages:{
		type:[String],
    default:[],
	}
});

const Conversation = mongoose.model('Conversation', ConversationSchema);
module.exports = Conversation;
