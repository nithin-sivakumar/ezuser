const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.SECRET;

/**
 * Verifies the authenticity of a JSON Web Token (JWT).
 * @param {string} token - The JWT to be verified.
 * @returns {object} - The decoded payload of the JWT.
 * @throws {Error} - Throws an error if the token is invalid.
 */
function authenticateToken(token) {
  /**
   * Verify the authenticity of a JSON Web Token (JWT).
   * @function
   * @memberof module:jwtUtils
   * @param {string} token - The JWT to be verified.
   * @param {string} secret - The secret key for verifying the token.
   * @returns {object} - The decoded payload of the JWT.
   * @throws {Error} - Throws an error if the token is invalid.
   */
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    throw new Error("🚨 Invalid token");
  }
}

module.exports = {
  authenticateToken,
};
