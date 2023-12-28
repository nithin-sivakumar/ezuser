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
  age: {
    type: Number,
    // required: [true, `Value not found! Please enter the age`],
  },
  phone: {
    type: Number,
  },
});

const userModel = mongoose.model("user", userSchema);

(async () => {
  // Get paginated users (page 2, 5 users per page)
  const paginatedUsers = await ezuser.getPaginated(userModel, 2, 5);
  console.log("Paginated Users:", paginatedUsers);
})();
