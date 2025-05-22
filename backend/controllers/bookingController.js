const Booking = require("../models/Booking");

// POST /api/bookings
const createBooking = async (req, res) => {
  try {
    const { car, startDate, endDate } = req.body;

    if (!car || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.create({
      user: req.user._id,
      car,
      startDate,
      endDate,
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: "Failed to create booking" });
  }
};

// GET /api/bookings/user
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("car");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to load your bookings" });
  }
};

// GET /api/bookings (admin only)
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("car")
      .populate("user", "name email");

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to load bookings" });
  }
};

// DELETE /api/bookings/:id
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Only admin or booking owner can delete
    if (
      !req.user.isAdmin &&
      booking.user.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await booking.deleteOne();
    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to cancel booking" });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
  deleteBooking,
};
