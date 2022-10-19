const Booking  = require("../models/bookingModel")
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
const getBooking = (req, res) =>{
    res.status(200).json({message: 'Get booking'})
}
const setBooking = (req, res) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('error ')   
     }
     res.status(200).json({message:'Set Booking'})
}

const updateBooking =(req, res)