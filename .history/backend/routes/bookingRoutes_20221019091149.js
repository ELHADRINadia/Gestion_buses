const express = require("express")
const router = express.Router()
// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
router.get('/get',(req, res) => {
    try {
        
    } catch (error) {
        
    }
})
router.post('/',(req, res) => {
    res.send('Set booking')
})
router.put('/:id',(req, res) => {
    res.send(`update booking ${req.params.id}`)
})
// router.remove('/:id',(req, res) => {
//     res.send(`delete booking ${req.params.id}`)
// })
// router.get("/", controller.get)

module.exports = router