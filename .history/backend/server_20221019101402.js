const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
// const cors = require("cors");
const PORT = process.env.PORT || 000;
const connectDB=require('./config/db')
connectDB()

const router=express.Router()


// app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// const usersRoute = require("./routes/usersRoute");
// const busesRoute = require("./routes/busesRoute");;

// app.use("/api/users", usersRoute);
// app.use("/api/buses", busesRoute);
// app.use("/api/booking", require("./routes/bookingRoutes"));

router.get('/api/booking/',(req,res)=>{res.json('booking')})

// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


































































// const express = require('express')
// const colors = require('colors')
// require('dotenv').config()
// const { errorHandler} = require('./middleware/errorMiddleware')
// const dbConfig = require("./config/db");
// const port = process.env.PORT  || 6000
// const app = express()

// app.use (express.json());


// app.use('/api/booking', require('./routes/bookingRoutes'))

// app.use(errorHandler)

// app.listen(port, () => console.log(`server runs at port ${port}`));
