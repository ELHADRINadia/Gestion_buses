const express = require("express")
const router = express.Router()
const { getAllUsers } = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get("/", controller.get)

module.exports = router