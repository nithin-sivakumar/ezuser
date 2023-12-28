let mongoUrl;

/**
 * Sets the MongoDB connection URL.
 * @param {string} url - MongoDB connection URL.
 */
function config(url) {
  mongoUrl = url;
  console.log(`🔗 Attempting to connect to ${mongoUrl}`);
}

function getMongoUrl() {
  if (mongoUrl) {
    return mongoUrl;
  } else {
    return "";
  }
}

module.exports = {
  config,
  getMongoUrl,
};
