// const bcrypt = require("bcrypt");
// const { connect } = require("./connect");
// const { disconnect } = require("./disconnect");

// /**
//  * Hash a password using bcrypt.
//  * @param {string} password - Plain text password.
//  * @returns {Promise} - Resolves with the hashed password.
//  */
// async function hashPassword(password) {
//   const saltRounds = 10; // Adjust the number of salt rounds as needed
//   return bcrypt.hash(password, saltRounds);
// }

// /**
//  * Create a new user with hashed password.
//  * @param {mongoose.Model} userModel - Mongoose User Model.
//  * @param {Object} userData - User data to be inserted.
//  * @returns {Promise} - Resolves with the created user.
//  */
// async function createSecure(model, userData) {
//   try {
//     if (!model) {
//       console.error("🚨 At createStrict()");
//       console.error(
//         "🚨 Model not loaded! Kindly provide the user model as a param"
//       );
//       return;
//     } else {
//       await connect();
//       const hashedPassword = await hashPassword(userData.password);
//       const userWithHashedPassword = await model.create({
//         ...userData,
//         password: hashedPassword,
//       });
//       console.log("✨ User created successfully with hashed password.");
//       return userWithHashedPassword;
//     }
//   } catch (error) {
//     console.error(
//       "🚨 Error creating user with hashed password:",
//       error.message
//     );
//     throw error;
//   } finally {
//     await disconnect();
//   }
// }

// module.exports = {
//   createSecure,
// };
