const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createTrip,
  GetAllTrips,
  GetAllTripsByUser,
  deletetrip,
} = require("../Controllers/tripController");

router.post("/create_trip",  createTrip);
router.get("/get_all_trips",  GetAllTrips);
router.get("/updateTrip/:id",  GetAllTripsByUser);
router.delete("/deleteTrip/:id",  deletetrip);

module.exports = router;