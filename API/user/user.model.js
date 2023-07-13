const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
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
  // tokenRef: { type: String,default:"asd" },
  tokenRef: {
    type: [{ type: String }],
    default: [],
  },
});

userSchema.methods.comparePasswords = async function (enteredPassword) {
  const user = this;
  console.log("Userpass", user.password);
  console.log("Userpass", enteredPassword);
  const isPasswordValid = await bcrypt.compare(enteredPassword, user.password);
  console.log(isPasswordValid);
  return isPasswordValid;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password") || user.isNew) {
    const hashedPassword = await bcrypt.hash(user.password, 8);

    user.password = hashedPassword;
    return next();
  }

  return next();
});

const user = mongoose.model("User", userSchema);

module.exports = user;
