const User = require("../models/userModel")

const getAllUsers = async (req, res, next) => {
    try{
        await User.find(req.user.id, {
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
// exports.getAllUsers = base.getAll(User)
// exports.getUser = base.getOne(User)
// exports.updateUser = base.updateOne(User)
// exports.deleteUser = base.deleteOne(User)

module.exports = { getAllUsers }