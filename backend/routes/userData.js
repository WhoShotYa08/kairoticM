import express from 'express';
// import User from '../models/userModel'; // Make sure the User model is correct and connected to MongoDB

const getUser = express.Router();

// Ensure you're using async/await properly and passing the full request
// getUser.post('users/getUser', async (req, res) => {
//   const emailAddress = req.body;  // Add `const` to emailAddress

//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       res.json(user);  // Send user data if found
//     } else {
//       res.status(404).json({ message: 'User not found' });  // Send 404 if user not found
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user', error });
//   }
// });

export default getUser;