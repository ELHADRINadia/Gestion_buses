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
exports.getbooking = base.getOne(Booking)
exports.updateUser = base.updateOne(Booking)
exports.deleteUser = base.deleteOne(Booking)