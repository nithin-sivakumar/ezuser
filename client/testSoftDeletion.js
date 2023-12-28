const mongoose = require("mongoose");
const ezuser = require("../index");
require("dotenv").config();

ezuser.config(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, `Value not found! Please enter the name`],
  },
  email: {
    type: String,
    // required: [true, `Value not found! Please enter the email`],
  },
  password: {
    type: String,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("user", userSchema);

(async () => {
  // // Get Active Users
  // const activeUsers = await ezuser.getActive(userModel, "deleted", 1);
  // console.log("Active Users:", activeUsers);
  // // Soft Deleting a user requires "deleted" field in the Schema
  // const deletedUser = await ezuser.softDelete(
  //   userModel,
  //   "658d24604df06aae1fdd3002",
  //   "deleted",
  //   true
  // );
  // console.log("Soft Deleted User:", deletedUser);
})();
