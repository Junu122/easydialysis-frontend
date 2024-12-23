import { Section } from 'lucide-react'
import {React,useEffect,useRef} from 'react'
import {motion, useInView,useAnimation} from 'framer-motion'
const Homebanner = () => {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true})
  const maincontrols=useAnimation()

  useEffect(()=>{
     if(inView){
      maincontrols.start('visible')
   
     }
  },[inView])
  return (
<section className="bg-bgimage  bg-cover bg-center bg-no-repeat h-[500px] md:h-[100vh] w-full flex items-center">
  <div ref={ref} className="container mx-auto px-6 md:px-20 text-center md:text-left pt-10">
    <motion.div variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}}}
        initial='hidden' animate={maincontrols} transition={{duration:0.9,delay:0.5}} className="max-w-2xl mx-auto md:mx-0">
      <h1 className="text-4xl md:text-8xl font-bold text-[#333333] opacity-90 leading-tight px-[6px] py-[6px] shadow-lg border-2 bg-white ">
        DIALYSIS MADE EASY
      </h1>
      <h2 className="text-2xl md:text-6xl text-white mt-[10px] font-medium capitalize">
        Booking on your convenient
      </h2>
      <p className="mt-4 text-white text-md md:text-base leading-5">
      Experience seamless dialysis care with our hassle-free booking system.
      </p>
      <button 
        className="mt-6 bg-transparent border-2 border-white text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-primary transition-all">
        Book Now
      </button>
    </motion.div>
  </div>
</section>



   
  )
}

export default Homebanner
