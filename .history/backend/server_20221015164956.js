const express = require('express')
const dotenv = require('dotenv').config()
const port =6000

const app = express()

app.listen(PORT, () => console.log(`server runs at port ${PORT}`));
// const session = require("express-session")
// require('./env')
// const mongoose = require('mongoose')


// mongoose.connect(database)

// const userRoute = require("./routes/User")

// app.use("/user", userRoute)

// const PORT = process.env.PORT  || 6000
