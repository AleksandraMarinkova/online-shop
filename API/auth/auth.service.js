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
  static async LoginUser(email, password) {
    console.log("email i pass",email,password);
    if (!email) throw "Please enter your email";
    if (!password) throw "Please enter your password";
    const user = await User.findOne({ email });
    console.log("Email and password", user);
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw "Invalid password";
    if (!user) throw "Invalid credentials";
    return user;
  }

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
    //console.log("vnatre vo servis");
    const foundUser = await User.findById(userId);
    //console.log("Model user: ", User);
    let lista = [];
    lista.push(refreshToken);
    lista.push("nekoja vrednost");

    //console.log("Found user: ", foundUser);
    // foundUser.tokenRef = refreshToken;
    foundUser.tokenRef = lista;

    await foundUser.save();
    const foundUser1 = await User.findById(userId);
    //console.log("Vo bazata: ", foundUser1);
    return foundUser;
  }
}

module.exports = AuthService;
