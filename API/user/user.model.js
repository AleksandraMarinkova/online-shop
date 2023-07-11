const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  _id: {
    type: String,
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    minLenght: [2, "Your name cannot be less then 2 characters long"],
  },
  userName: {
    type: String,
    required: [true, "Username is required"],
    minLenght: [6, "Username cannot be less then 6 characters long"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth is required"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  orders: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    default: [],
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
