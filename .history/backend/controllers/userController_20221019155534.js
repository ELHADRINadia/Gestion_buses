const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.send({
        message: "Users fetched successfully",
        success: true,
        data: users,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  };


  const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.send({
        message: "User already exists",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 6);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      message: "User created successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
}
const updatebooking = asyncHandler(async (req, res) =>{
    const booking = await booking.findById(req.params.id)
    if(!booking){
      res.status(400)
      throw new Error('booking not found')
    }

    const updatedbooking = await booking.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
    })
  res.status(200).json(updatedbooking)
})

// exports.getAllUsers = base.getAll(User)
// exports.getUser = base.getOne(User)
// exports.updateUser = base.updateOne(User)
// exports.deleteUser = base.deleteOne(User)

module.exports = { getAllUsers , createUser }