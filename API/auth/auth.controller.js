const AuthService = require("./auth.service");
const { createAccessToken, createRefreshToken } = require("../const/jwt");
const UserService = require("../user/user.service");

class AuthController {
  // 1. Register
  static async registerUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await AuthService.registerUser(userData);
      console.log(newUser);
      const token = createAccessToken(newUser._id);
      const refreshToken = createRefreshToken(newUser._id);
      console.log("Refresh token`; ", refreshToken);

      // console.log();
      const savedRefreshToken = await AuthService.saveRefreshToken(
        newUser._id,
        refreshToken
      );
      console.log(savedRefreshToken);

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 1000 * 60 * process.env.JWT_TIME),
        httpOnly: true,
      });
      console.log(newUser);
      res.status(200).send({ ...newUser.toJSON(), token });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 2. Login
  static async loginUser(req, res) {
    try {
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = AuthController;
