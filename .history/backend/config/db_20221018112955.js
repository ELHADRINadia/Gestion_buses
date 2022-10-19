const mongoose = require('mongoose')
const connectDB = async () => {
   try {
    const conn =await mongoose.Connect(process.env.MONGO)
    
   } catch (error) {
    
   } 
}