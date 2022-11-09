// const { promisify } = require("util")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
// const AppError = require("../utils/appError")

const createToken = id => {
    return jwt.sign({ id },process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION },)
}

exports.login = async (req, res, next) => {
    try{
        const { email, password } = req.body
        if (!email ||!password) {
            return next( new AppError(404, 'Fail', "Please provide email or password"), req, res, next)
        }
        const user = await User.find({email})
        const selectedpass = user[0].password
        const decrepted = await bcrypt.compare(password,selectedpass)
        const token = await createToken(user.id)
        if(decrepted){
            res.status(200).json({
                status: "success",
                token, 
                data: {
                    user,
                },
            })
        }else{
            res.status(400).json({
                message : "password incorrect"
            })
        }
        // if(!user || !(await user.correctPassword(password, user.password))){
        //     return next(new AppError(401, 'Fail', "Email or password incorrect"), req, res, next)
        // }
        
        // user.password = undefined
        
       
    }catch (err){
        next(err)
    }
}

exports.signup = async (req, res, next) => {
    try{
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        })
        const token = createToken(user.id);
        user.passord = undefined
        res.status(201).json({
            status: "success", 
            token, 
            data: {
                user,
            }
        })
    }catch(err){
        next(err)
    }
}

exports.protect = async (req, res, next) => {
    try{
        let token
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1]
        }
        if(!token){
            return next(new AppError(401, "Fail", "You are not logged in"), req, res, next)
        }
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
        const user = await User.findById(decode.id)
        if(!user){
            return next(new AppError(401, 'Fail', "This user is no longer exists"), req, res, next)
        }
        req.user = user
        next()
    }catch(err){
        next(err)
    }
}

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        (!roles.includes(req.user.role))
        ?    next(new AppError(403, "Fail", "You are not allowed to do this action"), req, res, next)
        :   next()
    }
}