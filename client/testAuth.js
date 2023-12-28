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
  },
  phone: {
    type: String,
  },
  username: {
    type: String,
    // required: [true, `Value not found! Please enter the email`],
  },
  password: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

(async () => {
  //   const authToken = await ezuser.loginByEmail(
  //     userModel,
  //     "samp@gmail.com",
  //     "somePassword"
  //   );
  //   console.log("User logged in");

  //   const authToken = await ezuser.loginByUsername(
  //     userModel,
  //     "1234567890",
  //     "somePassword"
  //   );
  //   console.log("User logged in");

  const authToken = await ezuser.loginByUsername(
    userModel,
    "samp280",
    "somePassword"
  );
  console.log("User logged in");

  const decodedToken = ezuser.verifyToken(authToken);
  console.log("Decoded Token:", decodedToken);
})();
