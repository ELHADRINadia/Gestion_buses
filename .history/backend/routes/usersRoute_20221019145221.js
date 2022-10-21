const express = require("express")
const router = express.Router()
const bas = require("..")
const { getAllUsers } = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get("/", getAllUsers)

module.exports = router