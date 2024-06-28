const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database.js");

const userRoutes = require("./routes/userRoutes.js");
const conversationRoutes = require("./routes/conversationRoutes.js");

const app = express();
const port = 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/conversations", conversationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
