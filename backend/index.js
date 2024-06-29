const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database.js");

const userRoutes = require("./routes/userRoutes.js");
const conversationRoutes = require("./routes/conversationRoutes.js");

const { app, server } = require("./socket/socket.js");
const port = 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/conversations", conversationRoutes);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
