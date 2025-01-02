import { react, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { useSpring, animated } from '@react-spring/web'

import { motion, useInView, useAnimation } from 'framer-motion'
const Servicecontainer = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const maincontrols = useAnimation()
    const slidecontrols = useAnimation()
    useEffect(() => {
        if (inView) {
            maincontrols.start('visible')
            slidecontrols.start('visible')
        }
    }, [inView])

    return (

        <div ref={ref} className='relative'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={maincontrols}
                transition={{ duration: 0.9, delay: 0.5 }}
                id="carousel"
                className="flex flex-col md:flex-row  p-4 w-[90%] md:w-[90%] mx-auto gap-6 shadow-lg rounded-lg justify-between"
            >
                <div className='h-auto shadow-md border-2 md:w-[33.33%]'>
                  <h1 className='text-center text-[25px] font-bold underline  text-[#363538] p-4'>ACCESSABLE LOCATION</h1>
                  <p className='px-2 leading-8'>Find our dialysis centers in easily accessible areas to serve you better.Our strategically located centers ensure quality care is always nearby.
                  Choose from our network of easily accessible facilities designed with your comfort in mind.</p>
                  <div className='border-2 mt-[1.99rem]'>
                   <img src={assets.Location} alt="" className='h-[300px] w-full'/>
                  </div>
                </div>
                <div className='h-auto shadow-md border-2 md:w-[33.33%]'>
                  <h1 className='text-center text-[25px] font-bold underline text-[#363538] p-4'>RELIABLE BOOKING</h1>
                  <p className='px-2 leading-8'>Schedule your dialysis sessions with ease using our dependable and user-friendly booking platform.Count on our dependable booking system to secure your dialysis sessions at your convenience.
                  Trust us to make scheduling your care as simple and reliable as possible.</p>
                  <div className='border-2 mt-[1.99rem]'>
                   <img src={assets.Convenient} alt="" className='h-[300px] w-full '/>
                  </div>
                 
                </div>
                <div className='h-auto shadow-md border-2 md:w-[33.33%]'>
                  <h1 className='text-center text-[25px] font-bold underline text-[#363538] p-4'>EXPERIENCED STAFFS</h1>
                  <p className='px-2 opacity-90 leading-8'>Our medical staff brings years of expertise in providing safe and comfortable dialysis treatments dedicated to delivering personalized care with empathy and precision.
                  With a proven track record of excellence, our staff is committed to maintaining the highest standards in patient care.</p>
                  <div className='border-2'>
                   <img src={assets.Quality} alt="" className='h-[300px] w-full'/>
                  </div>
                  
                </div>

               
            </motion.div>
        </div>


    )
}

export default Servicecontainer
