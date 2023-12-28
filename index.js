// index.js
const { config } = require("./src/controllers/config");
const { create } = require("./src/controllers/create");
const { update } = require("./src/controllers/update");
const { remove } = require("./src/controllers/remove");
const { get } = require("./src/controllers/get");
const { getById } = require("./src/controllers/getById");
const { getByEmail } = require("./src/controllers/getByEmail");
const { validator } = require("./src/controllers/validate");
const { createStrict } = require("./src/controllers/createStrict");
const { getPaginated } = require("./src/controllers/pagination");
const { createSecure } = require("./src/controllers/createSecure");
const { verifyPassword } = require("./src/controllers/verifyPassword");
const { getActive } = require("./src/controllers/getActive");
const { softDelete } = require("./src/controllers/softDelete");
const { getByQuery } = require("./src/controllers/getByQuery");
const { loginByEmail } = require("./src/services/auth/emailLogin");
const { loginByPhone } = require("./src/services/auth/phoneLogin");
const { loginByUsername } = require("./src/services/auth/usernameLogin");
const { authenticateToken } = require("./src/services/authToken/authenticate");

// console.log("Thank you for using this package");

module.exports = {
  config,
  create,
  update,
  remove,
  get,
  getById,
  getByEmail,
  validator,
  createStrict,
  getPaginated,
  createSecure,
  verifyPassword,
  getActive,
  softDelete,
  getByQuery,
  loginByEmail,
  loginByPhone,
  loginByUsername,
  verifyToken: authenticateToken,
};
