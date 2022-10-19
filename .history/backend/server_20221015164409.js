const express = require("express")
const session = require("express-session")
require('./env')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(database)

const userRoute = require("./routes/User")

app.use("/user", userRoute)

const PORT = process.env.PORT  || 5000 
app.listen(PORT, () => console.log(`server is running ${PORT}`));