const express = require("express")
const router = express.Router()
// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
.get('/api/booking',(req, res) => {
    res.send('Get booking')
})
// router.get("/", controller.get)

module.exports = router