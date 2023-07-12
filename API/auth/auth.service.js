const User = require("../user/user.model");
const { Types } = require("mongoose");

class AuthService {
  // 1. Register
  static async registerUser(userData) {
    const user = new User(userData);

    const createdUser = await user.save();

    return createdUser;
  }
  // 2. Login

  // 3. Save refresh token
  static async saveRefreshToken(userId, refreshToken) {
    // let lst = [];
    // lst.push(refreshToken);
    // try {
    //   console.log("asd", refreshToken);
    //   console.log("List", lst);
    //   console.log("Type refresh token", userId.toString());
    //   const idOfUser=userId.toString()
    //   const user = await User.findOneAndUpdate(
    //     { _id:idOfUser },
    //     { tokenRef: "string neso" });
    //   console.log("user", user);
    // } catch (error) {
    //   console.log("Error from find by id: ",error);
    //   throw error;
    // }
    console.log("Model user: ", User);
    let lista = [];
    lista.push(refreshToken);
    lista.push("nekoja vrednost");
    const foundUser = await User.findById(userId);
    console.log("Found user: ", foundUser);
    // foundUser.tokenRef = refreshToken;
    foundUser.tokenRef = lista;
    console.log("So fiksen string: ", foundUser);

    await foundUser.save();
    const foundUser1 = await User.findById(userId);
    console.log("Vo bazata: ", foundUser1);
  }
}

module.exports = AuthService;
