const mongoose = require("mongoose");
const { getMongoUrl } = require("./config");

let userModel;

/**
 * Connects to MongoDB using the provided user model.
 * @param {Object} user - Mongoose user model.
 * @returns {Promise<void>} - Promise resolving when connected to MongoDB.
 */
async function connect(user) {
  try {
    await mongoose.connect(getMongoUrl());

    // Assume userModel is provided as a parameter
    userModel = user;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("🚨 Error connecting to MongoDB:", error.message);
    throw error;
  }
}

module.exports = {
  connect,
};
