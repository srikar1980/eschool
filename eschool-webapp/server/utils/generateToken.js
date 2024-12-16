import jwt from 'jsonwebtoken';

// Generate a JSON Web Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expiry time (adjust as needed)
  });
};

export { generateToken };
