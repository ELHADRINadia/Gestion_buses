const express = require('express')
const dotenv = require('dotenv').config()
const port =process.env.PORT  || 6000

const app = express()


app.use('/api/booking', require('./routes/bookingRoutes'))

app.use(error)

app.listen(port, () => console.log(`server runs at port ${port}`));
// const session = require("express-session")
// require('./env')
// const mongoose = require('mongoose')


// mongoose.connect(database)

// const userRoute = require("./routes/User")

// app.use("/user", userRoute)

// const PORT = process.env.PORT  || 6000