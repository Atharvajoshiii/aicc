const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [
      /^[0-9]{10}$/,
      'Please fill a valid 10-digit phone number',
    ],
  },
  year: {
    type: String,
    required: true,
    trim: true,
    
  },
  branch: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Signup = mongoose.model('users', signupSchema);

module.exports = Signup;
