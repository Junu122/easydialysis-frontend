import React, { useEffect,useState } from "react";
import { authService } from "../../services/authService";
import { useSearchParams,Link } from "react-router-dom";
const TransactionSuccess = () => {
  const [searchParams]=useSearchParams()
  const sessionId = searchParams.get("session_id");
  const [paymentDetails, setPaymentDetails] = useState(null);
    useEffect(()=>{
      console.log("useeffect entered")
      const fetchBookingData=async()=>{
        const response=await authService.getPaymentDetails(sessionId);
        console.log(response)
        if(response.data.success){
          setPaymentDetails(response?.data?.BookingData[0])
        }
        console.log("response in success page  :",response)
      }
      fetchBookingData()
      
    },[sessionId])
    console.log("paymentDetails :",paymentDetails)
    const formattedDate=new Date(paymentDetails?.createdAt).toLocaleString("en-US", {    timeZone: "Asia/Kolkata" })
   
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex flex-col items-center">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-6">
            <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Payment Successful!
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Thank you for your booking. Your payment has been processed successfully.
            </p>
            
            {/* Payment Details Card */}
            <div className="w-full bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Details</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-medium text-gray-900 break-words overflow-hidden">{paymentDetails?.stripePaymentId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-medium text-gray-900">{formattedDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-bold text-indigo-600 text-xl">₹{paymentDetails?.paymentAmount}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <button
                
                type="button"
                className="flex-1 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Download Receipt
              </button>
              <Link to="/">
              <button
                type="button"
                
                className="flex-1 px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Home
              </button>
             </Link>
             
            </div>
          </div>
        </div>
      </div>


    
    </div>
  );
};

export default TransactionSuccess;