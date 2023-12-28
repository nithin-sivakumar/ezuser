const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Retrieves all users using the provided model.
 * @param {Object} model - Mongoose user model.
 * @returns {Promise<Array>} - Promise resolving to an array of all users.
 */
async function get(model) {
  try {
    if (!model) {
      console.error("🚨 At get()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return [];
    } else {
      await connect();
      const users = await model.find();
      if (users?.length === 0) {
        console.log("👉 No users found on database.");
      } else {
        console.log("👉 All users retrieved successfully.");
      }
      return users;
    }
  } catch (error) {
    console.error("🚨 Error getting all users:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  get,
};
