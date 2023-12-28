const mongoose = require("mongoose");
const ezuser = require("../index");
require("dotenv").config();

ezuser.config(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: Number,
  },
});

const userModel = mongoose.model("user", userSchema);

(async () => {
  // Create User
  // const newuser = await ezuser.create(userModel, {
  //   name: "Sameera",
  //   email: "samp@gmail.com",
  //   age: 20,
  // });
  // console.log(`Created user: ${newuser}`);
  //   Get All Users
  const users = await ezuser.get(userModel);
  console.log("Fetched: ", users);
  //   // Get By Id
  //   const user = await ezuser.getById(userModel, "658cf997daf6fb69bdeadd13");
  //   console.log(user);
  //   // Remove
  //   const deletedUser = await ezuser.remove(
  //     userModel,
  //     "658c5fdd6ebe6c8717c45dc0"
  //   );
  //   console.log(deletedUser);
  //   //   Update
  //   const updatedUser = await ezuser.update(
  //     userModel,
  //     "658d0d41392ecb688672999b",
  //     {
  //       name: "P Sameera",
  //       age: 21,
  //     }
  //   );
  // // Get By Email
  // const userByEmail = await ezuser.getByEmail(userModel, "samp1@gmail.com");
  // console.log(userByEmail);
})();
//
// // Fail the validation
// (async () => {
//   // Define validation schema for the user
//   const userValidationSchema = {
//     name: { type: "string", required: true },
//     phone: {
//       type: "string",
//       required: true,
//       validate: (value) => /^\d{10}$/.test(value),
//     },
//     // Add other fields as needed
//   };

//   // Create a new user with dynamic validation
//   const newUserWithValidation = await ezuser.createStrict(
//     userModel,
//     {
//       name: "John Doe",
//       phone: "123", // This will pass validation
//       // Add other fields as needed
//     },
//     userValidationSchema
//   );
//   console.log(
//     "New User created with dynamic validation:",
//     newUserWithValidation
//   );
// })();
//
// Pass the validation
// (async () => {
//   // Define validation schema for the user
//   const userValidationSchema = {
//     name: { type: "string", required: true },
//     phone: {
//       type: "string",
//       required: true,
//       validate: (value) => /^\d{10}$/.test(value),
//     },
//     // Add other fields as needed
//   };

//   // Create a new user with dynamic validation
//   const newUserWithValidation = await ezuser.createStrict(
//     userModel,
//     {
//       name: "John Doe",
//       phone: "9988776655", // This will pass validation
//       // Add other fields as needed
//     },
//     userValidationSchema
//   );
//   console.log(
//     "New User created with dynamic validation:",
//     newUserWithValidation
//   );
// })();
