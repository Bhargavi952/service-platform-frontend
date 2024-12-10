import React from "react";
import { formatDate } from "../utils/formatDateAndTime";

const Bookings = ({ setBookings, bookings }) => {
  // Handle cancel booking
  const handleCancel = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="p-8 bg-gray-50">
      {bookings?.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Your Bookings
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-blue-600 p-3 text-left">
                    Service Type
                  </th>
                  <th className="border border-blue-600 p-3 text-left">
                    Date & Time
                  </th>
                  <th className="border border-blue-600 p-3 text-left">
                    Address
                  </th>
                  <th className="border border-blue-600 p-3 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => {
                  const formattedDateTime = formatDate(booking.dateTime);
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition duration-300"
                    >
                      <td className="border border-gray-300 p-3">
                        {booking.serviceType}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {formattedDateTime}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {booking.address}
                      </td>
                      <td className="border border-gray-300 p-3">
                        <button
                          onClick={() => handleCancel(index)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg">
            No bookings yet.{" "}
            <span className="text-blue-500 font-semibold">
              Book your first service now!
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Bookings;
