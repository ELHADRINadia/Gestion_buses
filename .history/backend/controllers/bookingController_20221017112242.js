const User  = require("../models/bookingModel")
const base = require('./bookingController')

exports.banMe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
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
exports.getAllbooking = base.getAll(User)
exports.getbookind = base.getOne(User)
exports.update = base.updateOne(User)
exports.deleteUser = base.deleteOne(User)