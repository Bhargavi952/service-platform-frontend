import React from "react";

const BookingForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-md mx-auto p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Book a Service</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Service Type</label>
          <select className="w-full border-gray-300 rounded-lg p-2">
            <option>AC Technician</option>
            <option>Electrician</option>
            <option>Plumber</option>
            {/* Add more options dynamically */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Date & Time</label>
          <input
            type="datetime-local"
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <textarea
            rows={3}
            className="w-full border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
