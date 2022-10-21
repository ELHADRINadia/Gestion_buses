const express = require("express")
const router = express.Router()
const base = require("../models/basModel");
const { getAllUsers , getUser , updateUser , deleteUser } = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get("/", getAllUsers);

module.exports = router
