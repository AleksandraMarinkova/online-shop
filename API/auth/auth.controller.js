const AuthService = require("./auth.service");

class AuthController {
  // 1. Register
  static async registerUser(req, res) {
    try {
      const userData = req.body;
      
      const newUser = await AuthService.registerUser(userData);
      console.log(newUser);
      res.status(200).send(newUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 2. Login
}

module.exports = AuthController;
