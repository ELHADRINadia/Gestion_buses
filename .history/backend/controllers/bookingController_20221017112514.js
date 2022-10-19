const Booking  = require("../models/bookingModel")
const base = require('./bookingController')

exports.banMe = async (req, res, next) => {
    try{
        await Booking.findByIdAndUpdate(req.booking.id, {
            isbanned : true
        })

        res.status(204).json({
            status: 'success', 
            data: null
        })
    }catch(error){
        next(error);
    }
}
exports.getAllBookings = base.getAll(Booking)
exports.getBooking = base.getOne(Booking)
exports.updateBooking = base.updateOne(Booking)
exports.deleteUser = base.deleteOne(Booking)