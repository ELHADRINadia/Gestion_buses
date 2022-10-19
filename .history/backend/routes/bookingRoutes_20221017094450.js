const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get("/", controller.get)

module.exports = router