const router = require("express").Router();
const AuthController = require("./auth.controller");

// http://localhost:3000/auth/register
router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);

module.exports = router;
