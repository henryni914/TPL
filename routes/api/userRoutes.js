const router = require("express").Router();
const userController = require("../../controllers/userController")

// http://localhost:3001/api/user will display all users in JSON format
// Matches with "/api/user"
router
  .route("/")
  .post(userController.findUser)

router
  .route("/create")
  .post(userController.createUser)

module.exports = router;