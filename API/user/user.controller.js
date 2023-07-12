const UserService = require("./user.service");

class UserController {
  //1.Get  all user
  static async getAllUser(req, res) {
    try {
      const user = await UserService.getAllUser();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //2.Get user by id
  static async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //4.Edit user
  static async editUser(req, res) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      console.log(userId, userData);
      const editedUser = await UserService.editUser(userId, userData);
      console.log("asd", editedUser);
      res.status(200).send(editedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //5.Delete user
  static async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await UserService.deleteUser(userId);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = UserController;
