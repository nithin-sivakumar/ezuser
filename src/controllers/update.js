const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Updates a user with the provided data using the provided model.
 * @param {Object} model - Mongoose user model.
 * @param {string} userId - ID of the user to update.
 * @param {Object} newData - Data object to be updated for the user.
 * @returns {Promise<Object>} - Promise resolving to the updated user.
 */
async function update(model, userId, newData) {
  try {
    if (!model) {
      console.error("🚨 At update()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const temp = await model.find({ _id: userId });
      if (!temp) {
        console.log(
          "👉 User with the provided ID does not exist! Unable to update"
        );
        return null;
      } else {
        const updatedUser = await model.findByIdAndUpdate(userId, newData, {
          new: true,
        });
        console.log("👉 User updated successfully.");
        return updatedUser;
      }
    }
  } catch (error) {
    console.error("🚨 Error updating user:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  update,
};
