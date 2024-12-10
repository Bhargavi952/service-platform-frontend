import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Services from "./pages/Services";
import React, { useEffect, useState } from "react";
import BookingFormModal from "./components/BookingFormModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [selectedService, setSelectedService] = useState("");

  // Load bookings from localStorage when app is mounted
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);

  // Handle modal open/close
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Function to add a new booking
  const addBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];

    // Update React state
    setBookings(updatedBookings);

    // Update localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Close modal after booking is confirmed
    handleCloseModal();
  };

  return (
    <div>
      <Router>
        <div className="font-sans">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenModal={handleOpenModal}
                  bookings={bookings}
                  setBookings={setBookings}
                  setSelectedService={setSelectedService}
                />
              }
            />
            <Route
              path="/services"
              element={
                <Services
                  onOpenModal={handleOpenModal}
                  setSelectedService={setSelectedService}
                />
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <BookingFormModal
          onClose={handleCloseModal}
          addBooking={addBooking}
          selectedService={selectedService}
        />
      )}
    </div>
  );
};

export default App;
