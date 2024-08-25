const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this import
const Signup = require('./Models/UserModel.js');
const dotenv = require('dotenv');
dotenv.config()
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "https://aicc-event.onrender.com"
}));

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });
  app.get('/showallposts', async (req, res) => {
    try {
      const allPosts = await Signup.find();
      res.status(200).json({ message: 'All signup data retrieved successfully', data: allPosts });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving signup data', error: error.message });
    }
  });

  app.post('/signup', async (req, res) => {
    try {
      console.log('Received data:', req.body); // Add this line
  
      const { firstName, lastName, email, phone, year, branch } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !phone || !year || !branch) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const signupData = new Signup(req.body);
      const savedData = await signupData.save();
      res.status(201).json({ message: 'Signup data successfully saved', data: savedData });
    } catch (error) {
      console.error('Error saving data:', error); // Add this line
      res.status(400).json({ message: 'Error saving signup data', error: error.message });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
