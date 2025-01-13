import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full bg-primary  py-[80px] px-[24px] '>
            <div className='max-w-[1100px] mx-auto grid md:grid-cols-2 gap-[32px] grid-cols-1'>
                <div className='text-white'>
                    <h1 className='text-[32px] font-[700]'>Join Our Community</h1>
                    <p className='text-[16px] mt-[24px]'>Subscribe to our newsletter to receive useful information and our latest news .</p>
                </div>
                <form action="">
                    <div className='flex flex-col gap-2 md:flex-row md:gap-0 '>
                        <div className='grow shrink'>
                            <input placeholder='Enter Email Address' type="text" className='w-full   border-[1px] border-[#c3c5c6] outline-none px-[12px] py-[6px] h-[44px] border-r-0 text-[#9A9DB7]' />
                        </div>
                        <button className='py-[6px] px-[12px] bg-[#1877f2] text-white'>subscrible</button>
                    </div>
                    <label htmlFor="" className='mt-[24px] inline-flex'>
                        <input type="checkbox" className='h-[24px] w-[24px] mr-[10px]'/>
                        <span className='text-white'>By submitting your email address you consent to the processing of personal data as described in our <a href="" className='text-[#9A9DB7]'>privacy policy.</a></span>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
