const { connect } = require("./connect");
const { disconnect } = require("./disconnect");

/**
 * Get users based on custom query parameters.
 * @param {mongoose.Model} model - Mongoose User Model.
 * @param {Object} query - Custom query parameters.
 * @returns {Promise} - Resolves with an array of users based on the query.
 */
async function getByQuery(model, query) {
  try {
    if (!model) {
      console.error("🚨 At getById()");
      console.error(
        "🚨 Model not loaded! Kindly provide the user model as a param"
      );
      return;
    } else {
      await connect();
      const users = await model.find(query);
      console.log("✨ Users retrieved successfully based on custom query.");
      return users;
    }
  } catch (error) {
    console.error(`🚨 Error getting users by custom query: ${error.message}`);
    throw error;
  } finally {
    await disconnect();
  }
}

module.exports = {
  getByQuery,
};
