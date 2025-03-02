import { react, useEffect, useRef } from 'react'
import { assets } from '../../assets/assets'
import { useSpring, animated } from '@react-spring/web'

import { motion, useInView, useAnimation } from 'framer-motion'
const Servicecontainer = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const slidecontrols = useAnimation()
    useEffect(() => {
        if (inView) {
            mainControls.start('visible')
            
        }
    }, [inView])

    return (

        <div ref={ref} className="relative py-8 bg-gray-50">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[85%] mx-auto p-4 shadow-lg rounded-lg bg-white"
      >
        {/* Card 1 */}
        <div className="h-auto shadow-lg border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h1 className="text-center text-[20px] font-bold underline text-[#363538] py-4">
            ACCESSIBLE LOCATION
          </h1>
          <p className="px-4 text-gray-700 leading-7 text-sm">
            Find our dialysis centers in easily accessible areas to serve you
            better. Our strategically located centers ensure quality care is
            always nearby. Choose from our network of easily accessible
            facilities designed with your comfort in mind.
          </p>
          <div className="mt-4">
            <img
              src={assets.Location}
              alt="Accessible Location"
              className="h-[200px] w-full object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-auto shadow-lg border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h1 className="text-center text-[20px] font-bold underline text-[#363538] py-4">
            RELIABLE BOOKING
          </h1>
          <p className="px-4 text-gray-700 leading-7 text-sm">
            Schedule your dialysis sessions with ease using our dependable and
            user-friendly booking platform. Count on our dependable booking
            system to secure your dialysis sessions at your convenience. Trust
            us to make scheduling your care as simple and reliable as possible.
          </p>
          <div className="mt-4">
            <img
              src={assets.Convenient}
              alt="Reliable Booking"
              className="h-[200px] w-full object-cover"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-auto shadow-lg border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h1 className="text-center text-[20px] font-bold underline text-[#363538] py-4">
            EXPERIENCED STAFF
          </h1>
          <p className="px-4 text-gray-700 leading-7 text-sm">
            Our medical staff brings years of expertise in providing safe and
            comfortable dialysis treatments dedicated to delivering personalized
            care with empathy and precision. With a proven track record of
            excellence, our staff is committed to maintaining the highest
            standards in patient care.
          </p>
          <div className="mt-4">
            <img
              src={assets.Quality}
              alt="Experienced Staff"
              className="h-[200px] w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>


    )
}

export default Servicecontainer
