const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Deletes a user by their ID using the provided model.
 * @param {Object} model - Mongoose user model.
 * @param {string} userId - ID of the user to delete.
 * @returns {Promise<Object>} - Promise resolving to the deleted user.
 */
async function remove(model, userId) {
  try {
    if (!model) {
      console.error("🚨 At remove()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const temp = await model.findOne({ _id: userId });
      if (!temp) {
        console.log("👉 User with the provided ID does not exist.");
        return null;
      } else {
        const deletedUser = await model.findByIdAndDelete(userId);
        console.log("👉 User deleted successfully.");
        return deletedUser;
      }
    }
  } catch (error) {
    console.error("🚨 Error deleting user:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  remove,
};
