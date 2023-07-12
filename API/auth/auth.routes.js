const router = require("express").Router();
const AuthController = require("./auth.controller");

// http://localhost:3000/auth/register
router.post("/register", AuthController.registerUser);

module.exports = router;
