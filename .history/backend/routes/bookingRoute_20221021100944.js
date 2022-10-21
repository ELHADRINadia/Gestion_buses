const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  BookSeat,
  GetAllBookings,
  GetAllBookingsByUser,
  AnnuleBooking,
} = require("../Controllers/bookingController");

router.post("/create_booking", authMiddleware, BookSeat);
router.get("/get_all_bookings", authMiddleware, GetAllBookings);
router.get("/:id", authMiddleware, GetAllBookingsByUser);
router.delete("/:id", authMiddleware, AnnuleBooking);

module.exports = router;