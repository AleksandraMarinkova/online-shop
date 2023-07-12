const AuthService = require("./auth.service");
const { createAccessToken, createRefreshToken } = require("../const/jwt");

class AuthController {
  // 1. Register
  static async registerUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await AuthService.registerUser(userData);

      const token = createAccessToken(newUser._id);

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 1000 * 60 * process.env.JWT_TIME),
        httpOnly: true,
      });
      console.log(newUser);
      res.status(200).send({newUser, token });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 2. Login
}

module.exports = AuthController;
