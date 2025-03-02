import { useState,useEffect } from "react";
import React from 'react'
import { useParams } from "react-router-dom";
const Appoinment = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  const {centerid}=useParams()
  console.log(centerid,"params id")
  const centers = [
    {
      id: 1,
      name: "EasyDialysis Mumbai",
      location: "Mumbai",
      image: "/dialysisimg1.jpg",
    },
    {
      id: 2,
      name: "EasyDialysis Delhi",
      location: "Delhi",
      image: "/dialysisimg2.jpg",
    },
    {
      id: 3,
      name: "EasyDialysis Hyderabad",
      location: "Hyderabad",
      image: "/dialysisimg3.jpeg",
    },
    {
      id: 4,
      name: "EasyDialysis Chennai",
      location: "Chennai",
      image: "/dialysisimg4.jpg",
    },
    {
      id: 5,
      name: "EasyDialysis Bangalore",
      location: "Bangalore",
      image: "/dialysisimg5.jpeg",
    },
    {
      id: 6,
      name: "life dialysis",
      location: "Mumbai",
      image: "/dialysisimg6.jpg",
    },
    {
      id: 7,
      name: "angel  dialysis",
      location: "Mumbai",
      image: "/dialysisimg7.jpg",
    },
    {
      id: 8,
      name: "appolo dialysis",
      location: "Bangalore",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 9,
      name: "CareLife Dialysis",
      location: "Mumbai",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 10,
      name: "Healing Dialysis Center",
      location: "Delhi",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 11,
      name: "EasyDialysis Delhi",
      location: "Delhi",
      image: "/dialysisimg2.jpg",
    },
    {
      id: 12,
      name: "EasyDialysis Hyderabad",
      location: "Hyderabad",
      image: "/dialysisimg3.jpeg",
    },
    {
      id: 13,
      name: "EasyDialysis Chennai",
      location: "Chennai",
      image: "/dialysisimg4.jpg",
    },
    {
      id: 14,
      name: "EasyDialysis Bangalore",
      location: "Bangalore",
      image: "/dialysisimg5.jpeg",
    },
    {
      id: 15,
      name: "life dialysis",
      location: "Mumbai",
      image: "/dialysisimg6.jpg",
    },
    {
      id: 16,
      name: "angel  dialysis",
      location: "Mumbai",
      image: "/dialysisimg7.jpg",
    },
    {
      id: 17,
      name: "appolo dialysis",
      location: "Bangalore",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 18,
      name: "CareLife Dialysis",
      location: "Mumbai",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 19,
      name: "Healing Dialysis Center",
      location: "Delhi",
      image: "/dialysisimg8.jpg",
    },
  ];
  const clickedcenter=centers.find((center)=>center.id==parseInt(centerid,10))
  console.log(clickedcenter,"clicked center")
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

 
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]); 
    }
    return dates;
  };


  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 5; hour <= 21; hour += 4) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      slots.push(time);
    }
    return slots;
  };

  const dates = generateDates();
  const allTimeSlots = generateTimeSlots();

  const filteredTimeSlots = () => {
    if (selectedDate === new Date().toISOString().split("T")[0]) {
      const currentHour = new Date().getHours();
      return allTimeSlots.filter((time) => {
        const slotHour = parseInt(time.split(":")[0], 10);
        return slotHour > currentHour; 
      });
    }
    return allTimeSlots;
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time slot.');
      return;
    }
   
  
   
    alert(`Booking confirmed for ${clickedcenter.name} on ${selectedDate} at ${selectedTime}`);
  };

  const centerDetails={
    specialties: [
  "24/7 Emergency Dialysis Services",
  "Comprehensive Patient Monitoring",
  "State-of-the-Art Dialysis Machines",
  "Infection Control and Hygiene Protocols",
  "Expert Nephrology Team",
  "Individualized Dialysis Treatment Plans",
  "Comfortable and Modern Facilities",
  "Nutritional Counseling for Dialysis Patients",
  "Advanced Hemodialysis and Peritoneal Dialysis",
  "Psychological Support for Patients and Families",
]
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 relative">
    {/* Card */}
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image */}
      <img
        src={clickedcenter.image}
        alt={"appolo"}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Center Details */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{clickedcenter.name}</h1>
        <p className="text-gray-600 mb-2">{clickedcenter.location}</p>
        <p className="text-gray-600 mb-4">Contact: {3522245585}</p>

        {/* Specialities */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Specialties:</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {centerDetails.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>

        {/* Date and Time Selection */}
        <div className="space-y-4">
          {/* Date Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Select Date</label>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Select a date</option>
              {dates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          {/* Time Slot Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Select Time Slot</label>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select a time slot</option>
              {filteredTimeSlots().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Booking Button */}
        <button
          className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  </div>
  )
}

export default Appoinment
