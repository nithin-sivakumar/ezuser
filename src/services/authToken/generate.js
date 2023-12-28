const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.SECRET;

/**
 * Generates a JSON Web Token (JWT) containing the user ID.
 * @param {string} userId - The user ID to be included in the token.
 * @param {string} expiresIn - The expiration time for the token. (e.g., "1h", "7d")
 * @returns {string} - The generated JWT.
 */
function generateAuthToken(userId) {
  /**
   * Sign a JSON Web Token.
   * @function
   * @memberof module:jwtUtils
   * @param {object} payload - The data to be included in the token.
   * @param {string} secret - The secret key for signing the token.
   * @param {object} options - Additional options for the token.
   * @returns {string} - The generated JWT.
   * @throws {Error} - Throws an error if the token cannot be signed.
   */
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: "1d" });
}

module.exports = {
  generateAuthToken,
};
