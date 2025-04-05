import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { authService } from "../../services/authService";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const coludinarybase_url='http://res.cloudinary.com/dpg0noki6/image/upload/v1741513415/'
const Appoinment = () => {
  const {centerid}=useParams();
 
  const [dialysiscenters,setdialysiscenters]=useState([])
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  console.log(selectedDate,selectedTime)


  useEffect(()=>{
    const fetchDialysisCenter=async()=>{
      const response=await authService.dialysisCenters();
      console.log(response,".....................")
    }
  },[])
  // Sample dialysis center data
  const dialysisCenter = {
    name: "Renal Care Partners",
    address: "123 Medical Way, Healthcare City, HC 12345",
    phone: "(555) 123-4567",
    email: "appointments@renalcarepartners.com",
    rating: 4.8,
    reviews: 156,
    description: "Our state-of-the-art dialysis center provides comprehensive care with the latest technology and experienced medical staff. We offer a comfortable environment focused on patient wellbeing.",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Home Dialysis Training", "Nutritional Counseling"],
    facilities: ["Free WiFi", "Personal TV", "Heated Chairs", "Refreshments"],
    image: "/api/placeholder/600/400"
  };

  // Generate time slots for a given date (5am to 9pm in 4-hour intervals)
  const generateTimeSlots = (date) => {
    const selectedDateObj = new Date(date);
    console.log(selectedDateObj,"date object")
    const today = new Date();
    
    today.setHours(0,0,0,0)

    const selectedDateOnly = new Date(selectedDateObj);
    selectedDateOnly.setHours(0, 0, 0, 0);

  
const dayName = selectedDateOnly.getDay()
console.log(dayName,".............................................................................")

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    maxDate.setHours(0, 0, 0, 0);
   
    
   console.log(selectedDateOnly,today,maxDate,".......................")
    // Check if selected date is in the past
    if (selectedDateOnly < today || selectedDateOnly>maxDate || selectedDateOnly.getDay()===0 ) {
        // Don't generate any slots for past dates
        return [];
    }
    
    const isToday = selectedDateOnly.getTime() === today.getTime();

    const currentTime = new Date();
    
    const slots = [];
    const startHour = 5; // 5 AM
    const endHour = 21; // 9 PM
    const interval = 4; // 4-hour intervals
    
    let currentHour = startHour;
    
    while (currentHour < endHour) {
        const slotTime = new Date(selectedDateObj);
        slotTime.setHours(currentHour, 0, 0, 0);
        
        // If today, only show future time slots
        if (!isToday || slotTime > currentTime) {
            const formattedTime = formatTimeSlot(currentHour);
            slots.push(formattedTime);
        }
        
        currentHour += interval;
    }
    
    // If all slots have passed for today, show message
    if (isToday && slots.length === 0) {
        // Get tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setSelectedDate(tomorrow.toISOString().split('T')[0]);
    }
    
    return slots;
};
  
  // Format time slot for display
  const formatTimeSlot = (hour) => {
    const amPm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const endHour = (hour + 4) % 12 === 0 ? 12 : (hour + 4) % 12;
    const endAmPm = (hour + 4) >= 12 ? 'PM' : 'AM';
    return `${displayHour} ${amPm} - ${endHour} ${endAmPm}`;
  };
  
  // Set default date to today
  useEffect(() => {
    const today = new Date();
  
    const formattedDate = today.getFullYear() + '-' + 
    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
    String(today.getDate()).padStart(2, '0');
    console.log("today in useeffect",formattedDate)
    setSelectedDate(formattedDate);
  }, []);
  
  // Update available times when date changes
  useEffect(() => {
    if (selectedDate) {
      const times = generateTimeSlots(selectedDate);
      setAvailableTimes(times);
      
      // Select first available time by default
      if (times.length > 0 && !selectedTime) {
        setSelectedTime(times[0]);
      } else if (times.length === 0) {
        setSelectedTime('');
      }
    }
  }, [selectedDate]);

  // fetch dialysis center
  useEffect(() => {
       const fetchcenter=async()=>{
         const response=await authService.dialysisCenters();
         console.log(response)
         setdialysiscenters(response?.data?.dialysisCenters)
  
       }
       fetchcenter()
        window.scrollTo(0, 0);
    }, []);

    const clickedcenter=dialysiscenters?.find((center)=>center._id==centerid)
   console.log(clickedcenter,"clicked center")


  const getMinDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return  today.getFullYear() + '-' + 
    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
    String(today.getDate()).padStart(2, '0');
};



  
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.getFullYear() + '-' + 
    String(maxDate.getMonth() + 1).padStart(2, '0') + '-' + 
    String(maxDate.getDate()).padStart(2, '0');
  };
  
  const handleBookAppointment =async () => {
   if(!selectedDate || !selectedTime){
    alert("select both date and time")
    return
   }
    // In a real application, you would submit this to an API
    const stripe=await loadStripe('pk_test_51R5jFaRvfHeznjdnx2b2DkxEAsax1MkLgUCM1QSZm65tTzBgzXEGX0J4i7X5frN9ICdgOWnAaejEEvtw72UsM33b009h2mEwJz')
    const bookingData={
      date:selectedDate,
      time:selectedTime,
      centerId:clickedcenter._id,
      CenterName:clickedcenter.CenterName,
      price:clickedcenter.DialysisCharge
      
    }
    console.log(bookingData,"booking data in appoinment booking page")
    const response=await authService.makePayment(bookingData)
    console.log("response from make payment :",response)
    const session=await response?.data?.session;
    console.log(session,"sessionid")
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
            <h1 className="text-3xl font-bold">{clickedcenter?.CenterName}</h1>
            <p className="mt-2 text-blue-100">{clickedcenter?.CenterAddress + "," + clickedcenter?.CenterCity}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            {/* Left Column - Center Details */}
            <div className="md:col-span-2 space-y-6">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={coludinarybase_url+clickedcenter?.Photo} 
                  alt="Dialysis Center" 
                  className="w-full h-64  object-cover"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {dialysisCenter.rating} ({dialysisCenter.reviews} reviews)
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">Call:</span> {clickedcenter?.ContactNumber}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">About Our Center</h2>
                <p className="text-gray-600">{dialysisCenter.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Services</h3>
                  <ul className="space-y-2">
                    {clickedcenter?.Services.map((Service, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {Service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Facilities</h3>
                  <ul className="space-y-2">
                    {clickedcenter?.Facilities.map((facility, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Column - Appointment Booking */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-inner">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Book Your Appointment</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    min={getMinDate()}
                    max={getMaxDate()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                     
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Time Slot
                  </label>
                  {availableTimes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2">
                      {availableTimes.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg text-left ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-gray-800 hover:bg-blue-100'
                          } transition-colors duration-200`}
                        >
                          <div className="flex items-center">
                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {time}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No time slots available for this date. Please select another date.</p>
                  )}
                </div>
                
                <button
                  onClick={handleBookAppointment}
                  disabled={!selectedTime}
                  className={`w-full py-3 px-4 rounded-lg text-white text-center font-medium text-lg mt-6 ${
                    selectedTime
                      ? 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
                      : 'bg-gray-400 cursor-not-allowed'
                  } transition-colors duration-200`}
                >
                  Book Appointment
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-2">
                  You can reschedule or cancel your appointment up to 24 hours before the scheduled time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;