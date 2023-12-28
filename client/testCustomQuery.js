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
  try {
    // Define a custom query
    const customQuery = { name: "Nithin" };

    // Get users based on custom query
    const usersByQuery = await ezuser.getByQuery(userModel, customQuery);
    console.log("Users by Custom Query:", usersByQuery);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    // Disconnect from the MongoDB after all operations
    mongoose.disconnect();
  }
})();
