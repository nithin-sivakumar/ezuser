const { connect } = require("./connect");
const { disconnect } = require("./disconnect");
const { validator } = require("./validate");

/**
 * Create a new user with dynamic validation.
 * @param {mongoose.Model} userModel - Mongoose User Model.
 * @param {Object} userData - User data to be inserted.
 * @param {Object} validationSchema - Validation schema for user data.
 * @returns {Promise} - Resolves with the created user.
 */
async function createStrict(model, userData, validationSchema) {
  try {
    if (!model) {
      console.error("🚨 At createStrict()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      validator(userData, validationSchema);

      const user = await model.create(userData);
      console.log("✨ User created successfully with dynamic validation.");
      return user;
    }
  } catch (error) {
    console.error(
      "🚨 Error creating user with dynamic validation:",
      error.message
    );
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  createStrict,
};
