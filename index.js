// index.js
const { config } = require("./src/controllers/config");
const { create } = require("./src/controllers/create");
const { update } = require("./src/controllers/update");
const { remove } = require("./src/controllers/remove");
const { get } = require("./src/controllers/get");
const { getById } = require("./src/controllers/getById");
const { getByEmail } = require("./src/controllers/getByEmail");

module.exports = {
  config,
  create,
  update,
  remove,
  get,
  getById,
  getByEmail,
};
