const router = require("express").Router();
const tradeController = require("../../controllers/tradeController");

router
    .route("/")
    .post(tradeController.createTrade)

router
    .route("/user/:id")
    .get(tradeController.getAllTrades)

module.exports = router;