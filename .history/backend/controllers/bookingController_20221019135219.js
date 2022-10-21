const asyncHandler = require('express-async-handler')
const booking  = require("../models/bookingModel")
const getBooking = asyncHandler(async (req, res) =>{
  res.send('Booking')
/
})
const setbooking = asyncHandler(async (req, res) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('error ')   
     }
 const booking= await booking.create({
    text: req.body.text
 })
     res.status(200).json(booking)
})

const updatebooking = asyncHandler(async (req, res) =>{
      const booking = await booking.findById(req.params.id)
      if(!booking){
        res.status(400)
        throw new Error('booking not found')
      }

      const updatedbooking = await booking.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
      })
    res.status(200).json(updatedbooking)
})
const deleteOnebooking =asyncHandler( async (req, res) =>{

    const booking = await booking.findById(req.params.id)
    if(!booking){
      res.status(400)
      throw new Error('booking not found')
    }
await booking.remove()

    res.status(200).json({id: req.params.id})
})

module.exports ={
    getBooking,
    setbooking,
    updatebooking,
    deleteOnebooking

}