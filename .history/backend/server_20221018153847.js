const express = require('express')
// const colors = require('colors')
const dotenv = require('dotenv').config()
// const { errorHandler} = require('./middleware/errorMiddleware')
const dbConfig = require("./config/db");
const port =process.env.PORT  || 6000
const app = express()

app.use (express.json());


// app.use('/api/booking', require('./routes/bookingRoutes'))

// app.use(errorHandler)

app.listen(port, () => console.log(`server runs at port ${port}`));
