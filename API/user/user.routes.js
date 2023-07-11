const router = require("express").Router();
const UserController = require("./user.controller");

// http://localhost:3000/product
// 1. Get all users
router.get("/", UserController.getAllUsers);
// 2. Get user by id
router.get("/:id", UserController.getUserById);
// 3. Create user
router.post("/", UserController.createUser);
// 4. Edit user
// 5. Delete user

module.exports = router;
