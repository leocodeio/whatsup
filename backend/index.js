const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Conversation = require("./models/Coversation");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/whatsup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log("Name:", name);
  // console.log("Email:", email);
  // console.log("Password:", password);
  const count = await User.countDocuments();
  const tag = `whatstag${count + 1}`;

  try {
    const user = new User({
      name,
      email,
      password,
      tag,
    });
    await user.save();
    res.status(200).send("Login successful");
    console.log("sign up ok");
  } catch (error) {
    console.error("Error:", error);
    console.log("sign up not ok");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      console.log("ok");
      res.status(200).json({ message: "Login successful", user }); // Send a success response
    } else {
      console.log("not ok");
      res.status(401).send("Invalid email or password"); // Send a failure response
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/search-user", async (req, res) => {
  const { searchTag } = req.body;
  // console.log(searchTag);
  try {
    const user = await User.findOne({ tag: searchTag });
    if (user) {
      // console.log("User found:", user);
      res.status(200).send(user);
    } else {
      console.log("User not found");
      res.status(404).send({});
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/connects", async (req, res) => {
  const { tag, additions } = req.body;
  console.log(tag, "hi", additions, "hi");
  try {
    const user = await User.findOne({ tag: tag });
    if (user) {
      user.connects = additions;
      await user.save();
      console.log(user.connects);
      res.status(200).send(user);
    } else {
      console.log("error in updating personal connects");
      res.status(404).send({});
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/conversation/add", async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const recieverId = req.body.recieverId;
    console.log("Sender ID:", senderId, "Receiver ID:", recieverId);
    console.log("Conversation model:", Conversation);

    const exist = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    console.log("Exist:", exist);

    if (exist) {
      return res.status(200).json("convo already exist");
    }

    const newConversation = new Conversation({
      participants: [senderId, recieverId],
    });
    await newConversation.save();
    console.log("New Conversation Saved");
    return res.status(200).json("convo saved successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
