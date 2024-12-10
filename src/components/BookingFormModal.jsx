import React, { useEffect, useState } from "react";

const BookingFormModal = ({ onClose, addBooking, selectedService }) => {
  const [formData, setFormData] = useState({
    serviceType: selectedService,
    dateTime: "",
    address: "",
  });
  // Effect to update formData when selectedService changes
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      serviceType: selectedService, // Update serviceType if selectedService changes
    }));
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the booking by calling the parent function
    addBooking(formData); // Update state and local storage

    // Close modal after booking is confirmed
    onClose();
  };

  const now = new Date().toISOString().slice(0, 16);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Service Type</label>
            <select
              name="serviceType"
              className="w-full border border-gray-300 rounded-lg p-2"
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="AC Technicians">💡 AC Technicians</option>
              <option value="Electricians">🔌 Electricians</option>
              <option value="Plumbers">🚰 Plumbers</option>
              <option value="Mechanics">🔧 Mechanics</option>
              <option value="Carpenters">🪚 Carpenters</option>
              <option value="Cleaning">🧹 Cleaning</option>
              <option value="Pest Control">🐜 Pest Control</option>
              <option value="Home Appliances">📺 Home Appliances</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              className="w-full border border-gray-300 rounded-lg p-2"
              min={now}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              rows={3}
              className="w-full border-gray-300 border rounded-lg p-2"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;
