var express = require("express");
var router = express.Router();
const userController = require("../controller/usersController");

/* GET users listing. */
router.get("/", userController.get_users);

module.exports = router;
