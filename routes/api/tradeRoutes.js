const router = require("express").Router();
const tradeController = require("../../controllers/tradeController");

router
    .route("/")
    .post(tradeController.createTrade)

module.exports = router;