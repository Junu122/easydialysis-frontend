import { useState,useEffect } from "react";
import React from 'react'
import { useParams } from "react-router-dom";
import { authService } from "../../services/authService";
import PaymentForm from "../../components/User/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51R5jFaRvfHeznjdnx2b2DkxEAsax1MkLgUCM1QSZm65tTzBgzXEGX0J4i7X5frN9ICdgOWnAaejEEvtw72UsM33b009h2mEwJz");
const Appoinmentsss = () => {
   const coludinarybase_url='http://res.cloudinary.com/dpg0noki6/image/upload/v1741513415/'
  const {centerid}=useParams()
  const [dialysiscenter,setdialysiscenter]=useState([])
  const [showPayment,setshowPayment]=useState(false)
   useEffect(() => {
     const fetchcenter=async()=>{
       const response=await authService.dialysisCenters();
       console.log(response)
       setdialysiscenter(response?.data?.data)

     }
     fetchcenter()
      window.scrollTo(0, 0);
  }, []);

  console.log(centerid,"params id")
  
  const clickedcenter=dialysiscenter?.find((center)=>center._id==centerid)

 
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
  console.log("date format",new Date(selectedDate))
  const handleBooking =async (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time slot.');
      return;
    }
    const stripe=await loadStripe('pk_test_51R5jFaRvfHeznjdnx2b2DkxEAsax1MkLgUCM1QSZm65tTzBgzXEGX0J4i7X5frN9ICdgOWnAaejEEvtw72UsM33b009h2mEwJz')
    const bookingData={
      date:selectedDate,
      time:selectedTime,
      centerId:clickedcenter._id,
      centerName:clickedcenter.name,
      price:100
      
    }
    console.log("bookingData   :", bookingData)
    const response=await authService.makePayment(bookingData)
    console.log("response in appoinment  :" , response)
    const session=await response.data.session;
   
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    })
    console.log(" result from payment :", result)

    if(result.error){
      console.log(result.error)
    }
    console.log("booking data  :",bookingData)
   
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
        src={coludinarybase_url+clickedcenter?.photo}
        alt={"appolo"}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Center Details */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{clickedcenter?.name}</h1>
        <p className="text-gray-600 mb-2">{clickedcenter?.places}</p>
        <p className="text-gray-600 mb-2">{clickedcenter?.city}</p>
        <p className="text-gray-600 mb-4">Contact: {clickedcenter?.phone}</p>

        {/* Specialities */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Specialties:</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {centerDetails.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
       <form  onSubmit={handleBooking}>

      
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
        <button type="submit"
          className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          
        >
          Confirm Booking
        </button>
        </form>
        {/* {showPayment && (
                        <Elements stripe={stripePromise}>
                            <PaymentForm amount={500} onPaymentSuccess={() => setshowPayment(false)} />
                        </Elements>
                    )} */}
      </div>
    </div>
  </div>
  )
}

export default Appoinment
