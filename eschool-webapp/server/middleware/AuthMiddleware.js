// Import dependencies using ES6 syntax
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js'; // Ensure the path and file name match your project structure

// Protect middleware function to secure routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if the request has an authorization header with a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token from the authorization header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token and decode the payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user based on the decoded ID and exclude the password
      req.user = await User.findById(decoded.id).select('-password');

      // Proceed to the next middleware
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  // If no token is found, throw an error
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// Export the protect middleware using ES6 syntax
export default protect;
