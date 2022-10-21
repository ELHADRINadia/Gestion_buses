const express = require("express")
const router = express.Router()
const bas = require("../models/basModel");
const { getAllUsers ,  } = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get("/", getAllUsers);

module.exports = router



exports.getAllUsers = base.getAll(User)
exports.getUser = base.getOne(User)
exports.updateUser = base.updateOne(User)
exports.deleteUser = base.deleteOne(User)