const B  = require("../models/bookingModel")
const base = require('./bookingController')

exports.banMe = async (req, res, next) => {
    try{
        await B.findByIdAndUpdate(req.user.id, {
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
exports.getAllUsers = base.getAll(B)
exports.getbookind = base.getOne(B)
exports.updateUser = base.updateOne(B)
exports.deleteUser = base.deleteOne(B)