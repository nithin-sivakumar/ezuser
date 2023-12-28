const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Get paginated users.
 * @param {mongoose.Model} model - Mongoose User Model.
 * @param {number} page - Page number.
 * @param {number} pageSize - Number of users per page.
 * @returns {Promise} - Resolves with an array of users for the specified page.
 */
async function getPaginated(model, page = 1, pageSize = 10) {
  try {
    if (!model) {
      console.error("🚨 At getPaginated()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return [];
    } else {
      await connect();
      const users = await model
        .find()
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec();

      console.log(`✨ Users retrieved successfully for page ${page}.`);
      return users;
    }
  } catch (error) {
    console.error("🚨 Error getting paginated users:", error.message);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  getPaginated,
};
