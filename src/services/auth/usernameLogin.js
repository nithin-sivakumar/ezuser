const { connect } = require("../../controllers/connect");
const { disconnect } = require("../../controllers/disconnect");
const { verifyPassword } = require("../../controllers/verifyPassword");
const { generateAuthToken } = require("../authToken/generate");

/**
 * Authenticate a user by username and password and generate an authentication token.
 *
 * @param {mongoose.Model} model - Mongoose User Model.
 * @param {string} username - The username of the user.
 * @param {string} password - The password for authentication.
 * @returns {Promise<string|null>} - Resolves with an authentication token if login is successful, otherwise null.
 * @throws {Error} - Throws an error if there are invalid credentials or any other error occurs.
 */
async function loginByUsername(model, username, password) {
  try {
    if (!model) {
      console.error("🚨 At loginByUsername()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return null;
    } else {
      await connect();
      const user = await model.findOne({ username });

      if (!user || !(await verifyPassword(password, user.password))) {
        throw new Error("🚨 Invalid credentials");
      }

      console.log("✨ User logged in successfully.");
      return generateAuthToken(user._id);
    }
  } catch (error) {
    console.error(`🚨 Error logging in user: ${error.message}`);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  loginByUsername,
};
