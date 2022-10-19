const ooking  = require("../models/bookingModel")
const base = require('./bookingController')

exports.banMe = async (req, res, next) => {
    try{
        await booking.findByIdAndUpdate(req.user.id, {
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
exports.getAllUsers = base.getAll(booking)
exports.getbookind = base.getOne(booking)
exports.updateUser = base.updateOne(booking)
exports.deleteUser = base.deleteOne(booking)