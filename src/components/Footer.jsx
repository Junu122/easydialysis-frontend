import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full '>
      <div className='w-[80%] mx-auto   flex flex-col  md:flex-row py-[32px] justify-between items-start gap-2'>
        <div className='w-[15%] grow-0 shrink-0 basis-auto mb-3'>
          <img src={assets.Companylogo} alt="" className='w-[84px]' />
        </div>
        <div className='md:w-[25%] '>
          <h3 className='text-[24px] from-stone-700 mb-2'>For Patients</h3>
          <ul>
            <li className='text-[#686c6f] text-[18px] py-1'>dialysis</li>
            <li className='text-[#686c6f] text-[18px] py-1'>precautions</li>
            <li className='text-[#686c6f] text-[18px] py-1'>about kidney</li>
            <li className='text-[#686c6f] text-[18px] py-1'>connect</li>
          </ul>
        </div>
        <div className='md:w-[25%] '>
          <h3 className='text-[24px] from-stone-700 mb-2'>For Patients</h3>
          <ul>
            <li className='text-[#686c6f] text-[18px] py-1'>dialysis</li>
            <li className='text-[#686c6f] text-[18px] py-1'>precautions</li>
            <li className='text-[#686c6f] text-[18px] py-1'>about kidney</li>
            <li className='text-[#686c6f] text-[18px] py-1'>connect</li>
          </ul>
        </div>
        <div className='md:w-[25%] '>
          <h3 className='text-[24px] from-stone-700 mb-2'>For Patients</h3>
          <ul>
            <li className='text-[#686c6f] text-[18px] py-1'>dialysis</li>
            <li className='text-[#686c6f] text-[18px] py-1'>precautions</li>
            <li className='text-[#686c6f] text-[18px] py-1'>about kidney</li>
            <li className='text-[#686c6f] text-[18px] py-1'>connect</li>
          </ul>
        </div>
        
      </div>
      <hr className='w-full h-2'/>
      
      <div className='mt-2 mb-2'>
        <p className='text-center text-[14px]'>© EASYDIALYSIS, 2025 , ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
