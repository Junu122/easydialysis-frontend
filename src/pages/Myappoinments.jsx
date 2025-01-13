import React, { useState, useEffect } from "react";

const Myappoinments = () => {
  const [appointments, setAppointments] = useState([]);

  // Mock data for demonstration; replace with API data
  useEffect(() => {
    const mockAppointments = [
      {
        id: 1,
        date: "2025-01-15",
        status: "Confirmed",
        services: ["Hemodialysis", "Post-dialysis care"],
        center: "Healthy Life Dialysis Center",
      },
      {
        id: 2,
        date: "2025-01-18",
        status: "Pending",
        services: ["Hemodialysis"],
        center: "City Dialysis Hub",
      },
    ];
    setAppointments(mockAppointments);
  }, []);

  // Cancel booking handler
  const cancelBooking = (id) => {
    // Replace with API call to cancel the booking
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
    alert("Booking canceled!");
  };
  return (
    <div className="min-h-screen bg-gray-100 ">
      <section className="bg-[#d02b6e] text-white py-12 text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">My Appoinments</h1>
        <p className="text-lg md:text-xl mt-4">
          Here you can manage your appoinments booked
        </p>
      </section>

      {appointments.length > 0 ? (
        <div className="space-y-4 px-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <div className="mb-2">
                <span className="font-bold text-gray-700">
                  Date of Booking:
                </span>{" "}
                <span className="text-gray-600">{appointment.date}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold text-gray-700">Status:</span>{" "}
                <span
                  className={`${
                    appointment.status === "Confirmed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  } font-medium`}
                >
                  {appointment.status}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-bold text-gray-700">Services:</span>{" "}
                <ul className="list-disc list-inside text-gray-600">
                  {appointment.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700">
                  Dialysis Center:
                </span>{" "}
                <span className="text-gray-600">{appointment.center}</span>
              </div>
              <button
                onClick={() => cancelBooking(appointment.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-10">
          No appointments booked.
        </p>
      )}
    </div>
  );
};

export default Myappoinments;
