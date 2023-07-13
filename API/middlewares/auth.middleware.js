const User = require("../user/user.model");
const { verifyAccessToken } = require("../const/jwt");

const authValidator = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    console.log("Headers in middleware: ", req.headers);
    console.log("Bearer in middleware: ", req.headers.authorization);
    console.log(
      "Token in middleware: ",
      req.headers.authorization.split(" ")[1]
    );
    if (!token) res.status(400).send({ msg: "You are not authenticated" });
    const { userId } = verifyAccessToken(token);

    console.log(userId);

    const foundUser = await User.findById(userId);

    if (!foundUser) return res.status(400).send({ msg: "Log in first" });

    req.user = foundUser;
    console.log("Request: ",req.user);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = { authValidator };
