import {react,useEffect,useRef} from 'react'
import { assets } from '../assets/assets'
import {useSpring, animated } from '@react-spring/web'

import {motion, useInView,useAnimation} from 'framer-motion'
const Servicecontainer = () => {
    const ref=useRef(null)
    const inView=useInView(ref,{once:true})
    const maincontrols=useAnimation()
    const slidecontrols=useAnimation()
    useEffect(()=>{
       if(inView){
        maincontrols.start('visible')
        slidecontrols.start('visible')
       }
    },[inView])
   
    return (
       
       <div ref={ref} className='relative'>

       
        <motion.div  variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}}}
        initial='hidden' animate={maincontrols} transition={{duration:0.9,delay:0.5}} id='curosel'  className='flex flex-col md:flex-row h-auto text-center p-4 gap-2 shadow-md'>
           <div className='bg-[#ECF2EF] border-2 p-[2%]'>
                <h2 className='font-[275] text-[3rem] mb-[20px] '>RELIABLE BOOKING</h2>
                <h3 className='text-start mb-4'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, alias? Odit reprehenderit rem dolorem neque ea atque tempore laudantium hic omnis. Harum quasi maiores reprehenderit!.</h3>
                <img src={assets.Convenient} alt="" className='h-[240px] object-contain w-[100%]' />
            </div>
            <div  className='bg-[#ECF2EF] p-[2%]'>
                <h2 className='font-[275] text-[3rem] mb-[20px] '>ACCESSABLE LOCATIONS</h2>
                <h3 className='text-start'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptates, molestias perferendis, tempora debitis, asperiores laborum soluta a delectus voluptatum tempore possimus neque sint iure.</h3>
                <img src={assets.Location} alt="" className='h-[240px] object-contain w-[100%]' />

            </div>
            <div  className='bg-[#ECF2EF] p-[2%]'>
                <h2 className='font-[275] text-[3rem] mb-[20px] '>QUALITY TREATMENT</h2>
                <h3 className='text-start mb-4'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis facilis, veritatis soluta ducimus numquam dignissimos sint nihil minus, eligendi earum quia. Non, sint atque.</h3>
                <img src={assets.Quality} alt="" className='h-[240px] object-contain w-[100%]' />
               
                
            </div>
            
        </motion.div>
        <motion.div variants={{hidden:{left:'0%'},visible:{left:'100%'}}}
        initial='hidden'
        animate={slidecontrols}
        exit='hidden'
        transition={{duration:0.5,ease:'easeIn'}}
        style={{position:'absolute' ,top:'0', bottom:'4', left:'0', right:'0',backgroundColor:'green',zIndex:'20'}}>

        </motion.div>
        </div>

        
    )
}

export default Servicecontainer
