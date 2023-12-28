const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Find a user by email.
 * @param {mongoose.Model} model - Mongoose User Model.
 * @param {string} email - User email.
 * @returns {Promise} - Resolves with the user or null if not found.
 */
async function getByEmail(model, email) {
  try {
    if (!model) {
      console.error("🚨 At getById()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const user = await model.findOne({ email });
      if (!user) {
        console.log("👉 User with the provided ID does not exist.");
        return null;
      } else {
        console.log("✨ User found by email successfully.");
        return user;
      }
    }
  } catch (error) {
    console.error("🚨 Error finding user by email:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = { getByEmail };
