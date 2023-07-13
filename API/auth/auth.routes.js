const router = require("express").Router();
const AuthController = require("./auth.controller");
const { authValidator } = require("../middlewares/auth.middleware");

// http://localhost:3000/auth/register
router.post("/register", AuthController.registerUser);
router.post("/login", authValidator, AuthController.loginUser);

module.exports = router;
