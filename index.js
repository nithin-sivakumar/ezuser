// index.js
const { config } = require("./src/controllers/config");
const { create } = require("./src/controllers/create");
const { update } = require("./src/controllers/update");
const { remove } = require("./src/controllers/remove");
const { get } = require("./src/controllers/get");
const { getById } = require("./src/controllers/getById");
const { getByEmail } = require("./src/controllers/getByEmail");
const { validator } = require("./src/controllers/validate");
const { strictCreate } = require("./src/controllers/strictCreate");
const { getPaginated } = require("./src/controllers/pagination");

module.exports = {
  config,
  create,
  update,
  remove,
  get,
  getById,
  getByEmail,
  validator,
  strictCreate,
  getPaginated,
};
