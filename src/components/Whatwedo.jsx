import React from 'react'
import { assets } from '../assets/assets'
const Whatwedo = () => {
    return (
        <div className='w-full m-auto mt-10  flex flex-col md:flex-row bg-red-300 justify-between shadow-md rounded-md'>
            <div className='lg:max-w-[800px] md:max-w-[400px] px-4 flex flex-col justify-around'>
                <div className=' '>
                    <p className='text-[20px] text-[#EF468D] uppercase'> what we do?</p>
                    <h2 className='text-[32px] text-white leading-[50px] md:text-[40px]'>We provide a seamless and compassionate dialysis booking experience tailored to meet your needs.</h2>
                </div>
                <div className='md:grid md:grid-cols-2  mt-[5rem] gap-6 my-2 flex flex-col'>
                    <div className='text-center p-[20px]  border-[1px]  flex flex-col justify-center bg-[#e9d9d9] shadow-md'>
                       <h2 className='  text-[48px] font-extrabold text-[#e91268]'>16</h2>
                       <p className='text-[30px] font-extralight '>STATES</p>
                    </div>
                    <div className='text-center p-[20px] border-[1px] shadow-md  flex flex-col justify-center bg-[#e9d9d9]'>
                         <h2 className='  text-[48px] font-extrabold text-[#e91268]'>400</h2>
                         <p className='text-[30px] font-extralight'>DIALYSIS CENTERS</p> 
                    </div>
                    <div className='text-center p-[20px] border-[1px] shadow-md flex flex-col justify-center bg-[#e9d9d9]'>
                       <h2 className='  text-[48px] font-extrabold text-[#e91268]'>20000+</h2>
                       <p className='text-[30px] font-extralight'>DIALYSIS DONE</p>  
                    </div>
                    <div className='text-center p-[20px] border-[1px] shadow-md flex flex-col justify-center bg-[#e9d9d9]'>
                       <h2 className=' text-[48px] font-extrabold text-[#e91268]'>912</h2>
                       <p className='text-[30px] font-extralight'>STAFFS</p>  
                    </div>
                </div>
                
            </div>
            <div className='mt-2 pr-2 hidden md:flex'>
                <img src={assets.appointment_img} alt="" className='h-auto' />
            </div>
        </div>
    )
}

export default Whatwedo
