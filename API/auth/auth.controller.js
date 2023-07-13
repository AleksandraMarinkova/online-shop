const AuthService = require("./auth.service");
const { createAccessToken, createRefreshToken } = require("../const/jwt");
const UserService = require("../user/user.service");

class AuthController {
  // 1. Register
  static async registerUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await AuthService.registerUser(userData);
      const token = createAccessToken(newUser._id);
      const refreshToken = createRefreshToken(newUser._id);

      // console.log();
      await AuthService.saveRefreshToken(newUser._id, refreshToken);
      const userId = newUser._id.toString();
      const foundUser = await UserService.getUserById(userId);

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 1000 * 60 * process.env.JWT_TIME),
        httpOnly: true,
      });
      res.status(200).send({ ...foundUser.toJSON(), token });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 2. Login
  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      console.log(email);
      console.log(password);
      const user = await AuthService.loginUser(email, password);
      const userId = user._id;
      console.log("User id: ", userId);
      const token = createAccessToken(userId);
      const tokenRef = createRefreshToken(userId);

      const saveRefreshToken = await AuthService.saveRefreshToken(
        userId,
        tokenRef
      );
      console.log("saved refresh token", saveRefreshToken);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 1000 * 60 * process.env.JWT_TIME),
        httpOnly: true,
      });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = AuthController;
