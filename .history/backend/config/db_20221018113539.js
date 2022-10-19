const mongoose = require('mongoose')
const connectDB = async () => {
   try {
    const conn =await mongoose.Connect(process.env.MONGO_URI)
    console.log(`MongoDB Connexted`)
    
   } catch (error) {
    
   } 
}