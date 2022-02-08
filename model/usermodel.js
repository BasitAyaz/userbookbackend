const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
