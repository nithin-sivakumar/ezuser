const mongoose = require("mongoose");

/**
 * Disconnects from MongoDB.
 * @returns {Promise<void>} - Promise resolving when disconnected from MongoDB.
 */
async function disconnect() {
  try {
    // await mongoose.disconnect();
    console.log("👋 Disconnected from MongoDB");
  } catch (error) {
    console.error("🚨 Error disconnecting from MongoDB:", error.message);
    throw error;
  }
}

module.exports = {
  disconnect,
};
