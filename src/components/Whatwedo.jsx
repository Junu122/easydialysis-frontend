import React from 'react'
import { assets } from '../assets/assets'
const Whatwedo = () => {
    return (
        <div className="w-[90%] mx-auto mt-10 flex flex-col lg:flex-row bg-white shadow-lg rounded-lg border border-gray-200">
  {/* Text Section */}
  <div className="lg:w-1/2 px-6 py-10 flex flex-col justify-between">
    {/* Heading */}
    <div>
      <p className="text-lg font-semibold text-[#EF468D] uppercase tracking-wide">
        What we do?
      </p>
      <h2 className="text-3xl md:text-4xl text-[#EF468D] font-bold leading-[1.4] mt-4">
        We provide a seamless and compassionate dialysis booking experience tailored to meet your needs.
      </h2>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-10">
      {/* Card 1 */}
      <div className="text-center py-6 px-4 border rounded-lg shadow-sm bg-[#f9ecee] hover:bg-[#f5e2e5] transition duration-300">
        <h2 className="text-3xl font-bold text-[#e91268]">16</h2>
        <p className="text-xl font-light mt-2">STATES</p>
      </div>
      {/* Card 2 */}
      <div className="text-center py-6 px-4 border rounded-lg shadow-sm bg-[#f9ecee] hover:bg-[#f5e2e5] transition duration-300">
        <h2 className="text-3xl font-bold text-[#e91268]">400</h2>
        <p className="text-xl font-light mt-2">DIALYSIS CENTERS</p>
      </div>
      {/* Card 3 */}
      <div className="text-center py-6 px-4 border rounded-lg shadow-sm bg-[#f9ecee] hover:bg-[#f5e2e5] transition duration-300">
        <h2 className="text-3xl font-bold text-[#e91268]">20000+</h2>
        <p className="text-xl font-light mt-2">DIALYSIS DONE</p>
      </div>
      {/* Card 4 */}
      <div className="text-center py-6 px-4 border rounded-lg shadow-sm bg-[#f9ecee] hover:bg-[#f5e2e5] transition duration-300">
        <h2 className="text-3xl font-bold text-[#e91268]">912</h2>
        <p className="text-xl font-light mt-2">STAFFS</p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 flex items-center justify-center p-4">
    <img
      src={assets.appointment_img}
      alt="Dialysis Appointment"
      className="rounded-lg w-full max-w-[400px] lg:max-w-full object-contain"
    />
  </div>
</div>
    )
}

export default Whatwedo
