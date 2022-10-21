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
const updateUser = asyncHandler(async (req, res) =>{
    const User = await User.findById(req.params.id)
    if(!User){
      res.status(400)
      throw new Error('User not found')
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
    })
  res.status(200).json(updateUser)
})
}

// exports.getAllUsers = base.getAll(User)
// exports.getUser = base.getOne(User)
// exports.updateUser = base.updateOne(User)
// exports.deleteUser = base.deleteOne(User)

module.exports = { getAllUsers , createUser, updateUser }