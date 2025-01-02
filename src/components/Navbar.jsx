import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion";
import { mobileNavContainerVariant, mobileNavListVariant, mobileNavExitProps } from '../data/animationconfig';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMenuopen, setIsmenuopne] = useState(false)
    console.log(isMenuopen, "isMenuopen")

    const togglenavbar = () => {
        setIsOpen(!isOpen)
    }
    const activeClassName = "selected navlink";

    const activeStyleCallback = ({ isActive }) =>
        isActive ? activeClassName : "navlink";


    return (

        <div className='z-10 bg-white sticky w-full top-0 '>
            <nav className='flex justify-between items-center py-4 px-6    shadow-md w-full '>
                <section>
                    <Link to={'/'}>
                        <motion.img whileHover={{ scale: 1.5 }} transition={{ type: 'spring', stiffness: 300 }} src={assets.Companylogo} alt="" className='w-12 h-12 md:w-16 md:h-16' />
                    </Link>
                </section>
               
                <section  className={`
                   ${isMenuopen ? 'opacity-100' : 'opacity-0'}
                   transition-opacity duration-300 ease-in-out md:opacity-100
                   md:relative absolute bg-white left-0 top-[100%] z-50 
                   md:w-auto w-full flex items-center px-5 
                   border-b-2 md:border-0
                            `} >
                    <ul    className='flex flex-col md:flex-row md:items-center md:gap-6 gap-6 p-[1rem] items-center w-full'>
                        <NavLink to={'/'} className=''>
                            <li  className='py-1   font-semibold linkeffect hover:text-[#323856] transition-all duration-500 ease-in-out'>HOME</li>
                            <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
                        </NavLink>
                        <NavLink to={'/PRODUCT'}>
                            <li className='py-1 font-semibold linkeffect hover:text-[#2b3772] transition-all duration-500 ease-in-out'>PRODUCT</li>
                            <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
                        </NavLink>
                        <NavLink to={'/SERVICE'}>
                            <li className='py-1 font-semibold linkeffect hover:text-[#323856] transition-all duration-500 ease-in-out'>SERVICE</li>
                            <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
                        </NavLink>
                        <NavLink to={'/ABOUT'}>
                            <li className='py-1 font-semibold linkeffect hover:text-[#323856] transition-all duration-500 ease-in-out '>ABOUT</li>
                            <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
                        </NavLink>

                    </ul>
                </section>
               
                <section className='hidden md:flex '>
                    <motion.button whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className=' px-4 py-2 rounded-full bg-primary hover:bg-[#ef468d] text-white text-sm '>LOG-IN</motion.button>
                </section>


                {/* <div className='relative hidden md:flex items-center justify-center gap-3 '>
                <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
                <input type="text" className='py-2 pl-10 rounded-xl border-2  outline-none focus:bg-slate-100 focus:outline-sky-500' />
            </div> */}


               
                {isMenuopen ? <motion.i key="close"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }} onClick={() => setIsmenuopne(!isMenuopen)} className='bx bxs-x-square mt-0  text-xl cursor-pointer md:hidden  rounded-md '></motion.i> :


                    <motion.i key="menu"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }} onClick={() => setIsmenuopne(!isMenuopen)} className='bx bx-menu   text-3xl cursor-pointer md:hidden block'>

                    </motion.i>}


            



            </nav>
        </div>
    )
}

export default Navbar
