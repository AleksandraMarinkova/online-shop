const User = require("../user/user.model");

class AuthService {
  // 1. Register
  static async registerUser(userData) {
    console.log("asd");
    const user = new User(userData);
    await user.save();
    return user;
  }
  // 2. Login
}

module.exports = AuthService;
