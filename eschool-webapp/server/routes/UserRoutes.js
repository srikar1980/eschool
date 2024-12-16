import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import { generateToken } from '../utils/generateToken.js';

const userRouter = express.Router();


// Login route
userRouter.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  // Check if user exists and the password is correct
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, // Include role in response
      isAdmin: user.isAdmin, // Optionally include isAdmin if needed
      token: generateToken(user._id),
      createdAt: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
}));


// Registration route
userRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists!');
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'student', // Use the provided role or default to 'student'
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isAdmin: user.isAdmin,
        token: generateToken(user._id), // Generate token here
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  })
);

export default userRouter;
