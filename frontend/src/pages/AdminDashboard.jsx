import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import API from "../api/api";

const AdminDashboard = () => {
  const [fleet, setFleet] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [searchModel, setSearchModel] = useState("");
  const [searchSeats, setSearchSeats] = useState("");
  const [error, setError] = useState("");

  // Fetch cars
  useEffect(() => {
    const fetchFleet = async () => {
      try {
        const res = await API.get("/cars");
        setFleet(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load fleet data.");
      }
    };
    fetchFleet();
  }, []);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  // Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      }
    };
    fetchBookings();
  }, []);

  // Cancel booking
  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?"))
      return;

    try {
      await API.delete(`/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Failed to cancel booking", err);
      alert("Failed to cancel booking");
    }
  };

  const filteredFleet = fleet.filter((car) => {
    const matchesModel = car.model
      .toLowerCase()
      .includes(searchModel.toLowerCase());
    const matchesSeats = searchSeats
      ? car.seats === parseInt(searchSeats)
      : true;
    return matchesModel && matchesSeats;
  });

  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Admin Dashboard</h1>

      {/* Admin Info */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow mb-10 max-w-3xl mx-auto"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-semibold mb-2">👤 Admin Info</h2>
        <p>
          <strong>Name:</strong> Ola Bialas
        </p>
        <p>
          <strong>Email:</strong> admin@tesla4rent.com
        </p>
        <p>
          <strong>Role:</strong> Super Admin
        </p>
      </motion.div>

      {/* Manage Fleet */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow mb-10"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-semibold mb-4">🚗 Manage Fleet</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Filter by model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          />
          <input
            type="number"
            placeholder="Filter by seats"
            value={searchSeats}
            onChange={(e) => setSearchSeats(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          />
        </div>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border">Model</th>
                  <th className="p-3 border">Seats</th>
                  <th className="p-3 border">Range (km)</th>
                  <th className="p-3 border">0–100 km/h</th>
                  <th className="p-3 border">Price €/day</th>
                </tr>
              </thead>
              <tbody>
                {filteredFleet.map((car) => (
                  <tr key={car._id} className="hover:bg-gray-100">
                    <td className="p-3 border">{car.model}</td>
                    <td className="p-3 border">{car.seats || "-"}</td>
                    <td className="p-3 border">{car.range}</td>
                    <td className="p-3 border">{car.acceleration || "-"}</td>
                    <td className="p-3 border font-semibold">
                      €{car.pricePerDay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Manage Users */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow mb-10"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-semibold mb-4">👥 Manage Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">
                    {user.isAdmin ? "Admin" : "User"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Manage Reservations */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-semibold mb-4">📅 Manage Reservations</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-500 text-sm">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border">Car</th>
                  <th className="p-3 border">User</th>
                  <th className="p-3 border">Pickup</th>
                  <th className="p-3 border">Return</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-100">
                    <td className="p-3 border">{booking.car?.model}</td>
                    <td className="p-3 border">
                      {booking.user?.name} ({booking.user?.email})
                    </td>
                    <td className="p-3 border">
                      {new Date(booking.startDate).toLocaleString()}
                    </td>
                    <td className="p-3 border">
                      {new Date(booking.endDate).toLocaleString()}
                    </td>
                    <td className="p-3 border">
                      <button
                        onClick={() => handleCancel(booking._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;
