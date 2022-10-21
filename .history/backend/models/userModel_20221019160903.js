const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  email: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please fill this field!"],
    minLength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required : [true, "Please confirm your password"],
    validate: {
      validator: function(el){
        return el === this.password;
      },
      message : "Something went wrong!"
    },
  },
}
);
module.exports = mongoose.model("users", userSchema);