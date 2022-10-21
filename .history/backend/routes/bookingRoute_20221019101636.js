const express=require('express')
const router=express.Router()
const {getBooking}=require('../controllers/bookingController')
router.get('/',getBooking)
module.exports=router