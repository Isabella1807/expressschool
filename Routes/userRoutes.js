const express = require("express");
const router = express.Router();
const userController = require('../Controller/userController')

router.get("/", userController.getAllUsers);

router.get("/:userid", userController.getUserById);

module.exports = router;
