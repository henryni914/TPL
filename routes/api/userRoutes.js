const router = require("express").Router();
const userController = require("../../controllers/userController")

// http://localhost:3001/api/user will display all users in JSON format
// Matches with "/api/user"
router
  .route("/")
  .get(userController.test);

module.exports = router;