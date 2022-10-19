const express = require("express");
const app = express();
require("dotenv").config();
// const cors = require("cors");
const port = process.env.PORT || 5000;
const dbConfig = require("./config/db");


// app.use(cors());
app.use(express.json());

// const usersRoute = require("./routes/usersRoute");
// const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingRoutes");

// app.use("/api/users", usersRoute);
// app.use("/api/buses", busesRoute);
app.use("/api/booking", bookingsRoute);

// listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
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
