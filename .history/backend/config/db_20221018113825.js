const mongoose = require('mongoose')
const connectDB = async () => {
   try {
    const conn =await mongoose.Connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    
   } catch (error) {

    console.log(error)
    process.exit(1)
   } 
}
