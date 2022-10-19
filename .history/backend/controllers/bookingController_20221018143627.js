const asyncHandler = require('express-async-handler')
const booking  = require("../models/bookingModel")

 






















// exports.banMe = async (req, res, next) => {
//     try{
//         await Booking.findByIdAndUpdate(req.booking.id, {
//             isbanned : true
//         })

//         res.status(204).json({
//             status: 'success', 
//             data: null
//         })
//     }catch(error){
//         next(error);
//     }
// }
// exports.getAllBookings = base.getAll(Booking)
// exports.getBooking = base.getOne(Booking)
// exports.updateBooking = base.updateOne(Booking)
// exports.deleteBooking = base.deleteOne(Booking)
const getBooking = asyncHandler(async (req, res) =>{
const Booking = await booking.find()
    res.status(200).json(Booking)
})
const setBooking = asyncHandler(async (req, res) =>{
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

      const updatedbooking = await booking.findByIdAndUpdate(req.params.id,req)
    res.status(200).json({message: `update booking ${req.params.id}`})
})
const deleteBooking =asyncHandler( async (req, res) =>{
    res.status(200).json({message: `delete booking ${req.params.id}`})
})

module.exports ={
    getBooking,
    setBooking,
    updateBooking,
    deleteBooking

}