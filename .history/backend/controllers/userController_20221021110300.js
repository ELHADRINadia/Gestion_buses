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
    const hashedPassword = await bcrypt.hash(req.body.password, );
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

const UpdateUser = async (req, res) =>{
    const user = await User.findById(req.params.id)
    if(!user){
      res.status(400)
      throw new Error('User not found')
    }

    const UpdateUser = await User.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
    })
  res.status(200).json(UpdateUser)
}
const deleteOneUser =async (req, res) =>{

    const user = await User.findById(req.params.id)
    if(!user){
      res.status(400)
      throw new Error('User not found')
    }
await User.remove()

    res.status(200).json({id: req.params.id})
}



// exports.getAllUsers = base.getAll(User)
// exports.getUser = base.getOne(User)
// exports.updateUser = base.updateOne(User)
// exports.deleteUser = base.deleteOne(User)

module.exports = { getAllUsers , createUser, UpdateUser, deleteOneUser }