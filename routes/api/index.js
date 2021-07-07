const router = require("express").Router();
const userRoutes = require("./userRoutes");
const tradeRoutes = require("./tradeRoutes");

router.use("/user", userRoutes);
router.use("/trade", tradeRoutes);

module.exports = router;