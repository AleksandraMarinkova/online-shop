const router = require("express").Router();
const UserController = require("./user.controller");
//1.Get All
router.get("/", UserController.getAllUser);

//2.Get user by id
router.get("/:id", UserController.getUserById);
//3.Create user
router.post("/", UserController.createUser);
//4.Edit user
router.patch("/:id",UserController.editUser);
//5.Delete user
router.delete("/:id",UserController.deleteUser);

module.exports = router;
