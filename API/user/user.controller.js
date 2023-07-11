const UserService = require("./user.service");

class UserController {
  // 1. Get all users
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // 2. Get user by id
  static async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const foundUser = await UserService.getUserById(userId);
      console.log(foundUser);
      res.status(200).send(foundUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 3. Create user
  static async createUser(req, res) {
    try {
      const userData = req.body;
      console.log(userData);
      const newUser = await UserService.createUser(userData);
      console.log(newUser);
      res.status(200).send(newUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 4. Edit user
  // 5. Delete user
}

module.exports = UserController;
