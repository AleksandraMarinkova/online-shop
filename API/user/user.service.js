
const User = require("./user.model");

class UserService {
  //1.Get  all user
  static async getAllUser() {
    const user = await User.find({});
    return user;
  }
  //2.Get user by id
  static async getUserById(userId) {
    const user = await User.findById(userId);
    return user;
  }
  //3.Create user
  static async createUser(userData) {
    console.log("asd");
    const user = new User(userData);
    await user.save();
    return user;
  }
  //4.Edit user
   static async editUser(userId,userData){
    const user=await User.findById(userId);
    user.fullName=userData.fullName;
    user.userName=userData.userName;
    user.dateOfBirth=userData.dateOfBirth;
    if(userData.role){
        throw "Invalid update";
    }
    
    await user.save();
    return user;

    
   }
  //5.Delete user
  static async deleteUser(userId){
    const user=await User.findByIdAndDelete();

  }

}

module.exports = UserService;
