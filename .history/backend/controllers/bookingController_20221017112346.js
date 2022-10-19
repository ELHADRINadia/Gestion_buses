const bo  = require("../models/bookingModel")
const base = require('./bookingController')

exports.banMe = async (req, res, next) => {
    try{
        await bo.findByIdAndUpdate(req.user.id, {
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
exports.getAllUsers = base.getAll(bo)
exports.getbookind = base.getOne(bo)
exports.updateUser = base.updateOne(bo)
exports.deleteUser = base.deleteOne(bo)