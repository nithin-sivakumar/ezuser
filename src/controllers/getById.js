const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Retrieves a user by their ID using the provided model.
 * @param {Object} model - Mongoose user model.
 * @param {string} userId - ID of the user to retrieve.
 * @returns {Promise<Object>} - Promise resolving to the retrieved user.
 */
async function getById(model, userId) {
  try {
    if (!model) {
      console.error("🚨 At getById()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const fetchedUser = await model.findById(userId);
      if (!fetchedUser) {
        console.log("👉 User with the provided ID does not exist.");
        return null;
      } else {
        console.log("👉 User retrieved successfully.");
        return fetchedUser;
      }
    }
  } catch (error) {
    console.error("🚨 Error getting user by ID:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  getById,
};
