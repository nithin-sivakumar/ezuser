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
  const userPromises = [];

  for (let i = 0; i < 20; i++) {
    await ezuser.create(userModel, {
      name: `User${i + 1}`,
      email: `user${i + 1}@example.com`,
      age: Math.floor(Math.random() * 50) + 18, // Random age between 18 and 67
      phone: Math.floor(Math.random() * 10000000000), // Random 10-digit phone number
    });
  }

  await Promise.all(userPromises);
})();
