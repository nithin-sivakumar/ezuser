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
});

const userModel = mongoose.model("user", userSchema);

(async () => {
  //   // Create Secure
  //   const securedUser = await ezuser.createSecure(userModel, {
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     password: "securePassword123",
  //   });
  //   console.log("New User created with hashed password:", securedUser);
  //   // Verify Password
  //   const isPasswordValid = await ezuser.verifyPassword(
  //     "securePassword123",
  //     securedUser.password
  //   );
  //   How to verify in your code?
  //   const valid = await ezuser.verifyPassword(
  //     "securePassword12",
  //     "$2b$10$SBziEXPJGS9oRxEOABiKaOBloI0LaMoPuW.TI7CGLghl7H9RJnZ0O"
  //   );
  //   console.log("Is Password Valid?", valid);
})();
