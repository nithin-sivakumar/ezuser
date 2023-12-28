const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Soft delete a user by setting the 'deleted' flag.
 * @param {mongoose.Model} model - Mongoose User Model.
 * @param {string} userId - User ID.
 * @param {string} fieldToUpdate - This is the field that is used on the database (This could be something like: ["exists", "deleted", etc.]).
 * @param {boolean} valueToUpdate - This is the value that will be updated in the field. (Can be true or false)
 * @returns {Promise} - Resolves with the updated user or null if not found.
 */
async function softDelete(model, userId, fieldToUpdate, valueToUpdate) {
  try {
    if (!model) {
      console.error("🚨 At softDeleteUser()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const temp = await model.findOne({ _id: userId });
      if (!temp) {
        console.log(
          "👉 User with the provided ID does not exist. Cannot delete"
        );
        return null;
      }
      const updateQuery = { [fieldToUpdate]: valueToUpdate };
      const user = await model.findByIdAndUpdate(userId, updateQuery, {
        new: true,
      });
      console.log(
        `✨ User soft deleted successfully. Set '${fieldToUpdate}' to ${valueToUpdate}`
      );
      return user;
    }
  } catch (error) {
    console.error("🚨 Error soft deleting user:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  softDelete,
};
