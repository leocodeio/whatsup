const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tag: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
