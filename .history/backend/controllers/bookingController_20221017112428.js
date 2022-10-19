const Booking  = require("../models/bookingModel")
const base = require('./bookingController')

exports.banMe = async (req, res, next) => {
    try{
        await Booking.findByIdAndUpdate(req..id, {
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
exports.getAllUsers = base.getAll(Booking)
exports.getbookind = base.getOne(Booking)
exports.updateUser = base.updateOne(Booking)
exports.deleteUser = base.deleteOne(Booking)