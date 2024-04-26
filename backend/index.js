const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
