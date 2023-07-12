const router = require("express").Router();
const UserController = require("./user.controller");

//1.Get All
// http://localhost:3000/user/
router.get("/", UserController.getAllUser);
//2.Get user by id
// http://localhost:3000/user/64ad21af419c9708e36a726d
router.get("/:id", UserController.getUserById);
//4.Edit user
// http://localhost:3000/user/64ad21af419c9708e36a726d
router.patch("/:id", UserController.editUser);
//5.Delete user
// http://localhost:3000/user/64ad21af419c9708e36a726d
router.delete("/:id", UserController.deleteUser);

module.exports = router;
