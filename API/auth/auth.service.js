const User = require("../user/user.model");
const { Types } = require("mongoose");

class AuthService {
  // 1. Register
  static async registerUser(userData) {
    const user = new User({ _id: new Types.ObjectId(), ...userData });

    const createdUser = await user.save();

    return createdUser;
  }
  // 2. Login
}

module.exports = AuthService;
