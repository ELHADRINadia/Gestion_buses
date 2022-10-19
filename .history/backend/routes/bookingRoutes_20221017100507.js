const express = require("express")
const router = express.Router()
// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
router.get('/',(req, res) => {
    res.send('Get booking')
})
router.post('/',(req, res) => {
    res.send('Set booking')
})
router.put('/:id',(req, res) => {
    res.send(`update booking ${req.params.id}`)
})
router.remove('/',(req, res) => {
    res.send(`u booking ${req.params.id}`)
})
// router.get("/", controller.get)

module.exports = router