const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    token: String,
  },
  { collection: "Users" }
);

module.exports =
  mongoose.models.Customer || mongoose.model("User", userSchema, "Users");
