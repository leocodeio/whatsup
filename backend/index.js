const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Email:', email);
  console.log('Password:', password);
  // Here you can handle the login logic
  res.send('Login successful');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
