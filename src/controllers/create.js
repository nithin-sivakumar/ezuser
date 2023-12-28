const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Creates a new user using the provided model and user data.
 * @param {Object} model - Mongoose user model.
 * @param {Object} userData - Data for creating a new user.
 * @returns {Promise<Object>} - Promise resolving to the newly created user.
 */
async function create(model, userData) {
  try {
    if (!model) {
      console.error("🚨 At create()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const newUser = await model.create(userData);
      console.log("👉 User created successfully.");
      return newUser;
    }
  } catch (error) {
    console.error("🚨 Error creating user:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  create,
};
