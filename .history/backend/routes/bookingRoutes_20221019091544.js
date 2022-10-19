const express = require("express")
const router = express.Router()
// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
router.get("/get",  async (req, res) => {
    try {
      const buses = await Bus.find();
      return res.status(200).send({
        success: true,
        message: "Buses fetched successfully",
        data: buses,
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });

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