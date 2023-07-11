const router = require("express").Router();

const productRouter = require("../product/product.routes");
const userRouter = require("../user/user.routes");

// http://localhost:3000/product
router.use("/product", productRouter);
// http://localhost:3000/user
router.use("/user", userRouter);

module.exports = router;
