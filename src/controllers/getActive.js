const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Get all active users (not deleted) based on a specific field.
 * @param {mongoose.Model} model - Mongoose User Model.
 * @param {String} fieldToCheck - The field that stores the existence of users (e.g., "exists", "deleted").
 * @param {Boolean} isNot - The value to check against. If true, retrieves users where the field is not equal to the specified value; if false, retrieves users where the field is equal to the specified value.
 * @returns {Promise} - Resolves with an array of active users.
 */
async function getActive(model, fieldToCheck, isNot) {
  try {
    if (!model) {
      console.error("🚨 At getActive()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return [];
    } else {
      await connect();
      const query = {};
      query[fieldToCheck] = { $ne: Boolean(isNot) };
      const activeUsers = await model.find(query);
      if (!activeUsers || activeUsers.length === 0) {
        console.log("👉 No active users found in the database.");
      } else {
        console.log(`✨ Active users retrieved successfully.`);
        console.log(
          `\x1b[31mQuery: '${fieldToCheck}' is '${!Boolean(isNot)}'\x1b[0m`
        );
      }
      return activeUsers;
    }
  } catch (error) {
    console.error("🚨 Error getting active users:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  getActive,
};
