const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/whatsup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a model
const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);
  
  try {
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    console.log('User saved to database:', user);
    res.send('Signup successful');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error saving user to database');
  }
});


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



