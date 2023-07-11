const User = require("./user.model");

class UserService {
  // 1. Get all users
  static async getAllUsers() {
    const users = await User.find({});
    return users;
  }

  // 2. Get user by id
  static async getUserById(userId) {
    console.log(userId);
    const foundUser = await User.findById(userId);
    console.log(foundUser);
    return foundUser;
  }
  // 3. Create user
  static async createUser(userData) {
    const user = new User(userData);
    // console.log(user);
    const newUser=await user.save();
    console.log(newUser);
    return user;
  }
  // 4. Edit user
  // 5. Delete user
}

module.exports = UserService;
