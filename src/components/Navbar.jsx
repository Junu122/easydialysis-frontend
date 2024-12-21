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
        // <div className='flex items-center justify-between  py-4 mb-5 border-b px-2 gap-2 shadow-md w-full'>
        //     <div className='flex items-center px-2 h-[44px] cursor-pointer bg-red-300'>
        //         <img className='w-16  ' src={assets.kidneylogo} alt="" />
        //         <span className='text-[25px] font-bold text-[#C34848] '>EASYDIALYSIS</span>
        //     </div>
        //     <div className='flex '>
        //         <ul className='hidden md:flex items-center justify-between gap-5 font-medium '>
        //             <NavLink to={'/'}>
        //                 <li className='py-1'>HOME</li>
        //                 <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        //             </NavLink>
        //             <NavLink to={'/services'}>
        //                 <li className='py-1'>SERVICES</li>
        //                 <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        //             </NavLink>
        //             <NavLink to={'/dialysiscenteres'}>
        //                 <li className='py-1'>DIALYSIS </li>
        //                 <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        //             </NavLink>
        //             <NavLink to={'/about'}>
        //                 <li className='py-1'>ABOUT</li>
        //                 <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        //             </NavLink>
        //         </ul>
        //     </div>

        //     <div className='flex items-center '>
        //         <button className='bg-primary text-white px-6 py-3 rounded-full hidden md:block '>create account</button>
        //     </div>

        // </div>

        // <header className='bg-primary sticky top-0 z-20 mx-auto flex w-full items-center justify-between flex-wrap border-b border-gray-500 p-8'>
        //     <div className=''>
        //         <h1>EASYDIALYSIS</h1>
        //     </div>
        //     <nav className='w-1/3 flex justify-end'>
        //         <div className='hidden md:flex w-full justify-between'>
        //             <NavLink to={'/home'}>home</NavLink>
        //             <NavLink to={'/services'}>services</NavLink>
        //             <NavLink to={'/about'}>about</NavLink>
        //         </div>
        //         <div className='md:hidden'>
        //             <button onClick={togglenavbar}>
        //                 {isOpen ? <X /> : <Menu />}
        //             </button>
        //         </div>
        //     </nav>
        //     <AnimatePresence mode='wait'>
        //         {
        //             isOpen && (
        //                 <motion.div layout="position"
        //                     key="nav-links"
        //                     variants={mobileNavContainerVariant}
        //                     initial="hidden"
        //                     animate="show" className='flex flex-col items-center basis-full absolute bg-white shadow-md top-0 h-[300px] w-full md:hidden'>

        //                     <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        //                         <NavLink to="/" className={activeStyleCallback}>
        //                             Home
        //                         </NavLink>
        //                     </motion.div>
        //                     <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        //                         <NavLink to="/blog" className={activeStyleCallback}>
        //                             Blog
        //                         </NavLink>
        //                     </motion.div>
        //                 </motion.div>
        //             )
        //         }
        //     </AnimatePresence>
        // </header>

        <main className='w-full'>
            <nav  className='flex justify-between items-center py-4 px-6    shadow-md w-full'>
              
                <section>
                    <Link to={'/'}>
                        <motion.img whileHover={{ scale: 1.5 }} transition={{ type: 'spring', stiffness: 300 }} src={assets.Companylogo} alt="" className='w-16 h-18' />
                    </Link>
                </section>
                <section className={`
  ${isMenuopen ? 'opacity-100' : 'opacity-0'}
  transition-opacity duration-300 ease-in-out md:opacity-100
  md:relative absolute bg-white left-0 top-[20%] z-50 
  md:w-auto w-full flex items-center px-5 
  border-b-2 md:border-0
`} >
                    <ul    className='flex flex-col md:flex-row md:items-center md:gap-6 gap-6 p-[1rem] items-center w-full'>
                        <NavLink to={'/'} className=''>
                            <li   className='py-1   font-semibold linkeffect hover:text-[#323856] transition-all duration-500 ease-in-out'>HOME</li>
                            <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
                        </NavLink>
                        <NavLink to={'/PRODUCT'}>
                            <li className='py-1 font-semibold linkeffect hover:text-[#323856] transition-all duration-500 ease-in-out'>PRODUCT</li>
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
                    <motion.button whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}  className=' px-4 py-2 rounded-full bg-primary hover:bg-[#ef468d] text-white text-sm '>LOG-IN</motion.button>
                </section>


                {/* <div className='relative hidden md:flex items-center justify-center gap-3 '>
                <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
                <input type="text" className='py-2 pl-10 rounded-xl border-2  outline-none focus:bg-slate-100 focus:outline-sky-500' />
            </div> */}

            
                    {/* <AnimatePresence mode="wait">
                    {isMenuopen ? (
                        <motion.i
                            key="close"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bx bxs-x-square text-5xl cursor-pointer xl:hidden"
                            onClick={() => setIsmenuopne(!isMenuopen)}
                        ></motion.i>
                    ) : (
                        <motion.i
                            key="menu"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bx bx-menu text-5xl cursor-pointer xl:hidden"
                            onClick={() => setIsmenuopne(!isMenuopen)}
                        ></motion.i>
                    )}
                </AnimatePresence> */}

                    {isMenuopen ? <motion.i key="close"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }} onClick={() => setIsmenuopne(!isMenuopen)} className='bx bxs-x-square mt-0  text-2xl cursor-pointer md:hidden  rounded-md '></motion.i> :


                        <motion.i key="menu"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }} onClick={() => setIsmenuopne(!isMenuopen)} className='bx bx-menu   text-3xl cursor-pointer md:hidden block'>

                        </motion.i>}
               

                {/* <AnimatePresence mode="wait">
                    {isMenuopen && <motion.div layout="position"
                        key="nav-links"
                        variants={mobileNavContainerVariant}
                        initial="hidden"
                        animate="show"
                        className='absolute h-[100%] w-full md:hidden bg-black/50 top-20 left-0 backdrop-blur-sm '>
                        <section className='text-black bg-white flex flex-col fixed  right-0 top-0 h-full w-[70%]    z-50 overflow-scroll '>

                            <NavLink to={'/'}>
                                <li className='list-none w-full text-left  p-3 hover:bg-sky-400 hover:text-white text-[15px] font-bold'>HOME</li>
                            </NavLink>
                            <NavLink to={'/'}>
                                <li className='list-none w-full text-left  p-3 hover:bg-sky-400 hover:text-white text-[15px] font-bold'>HOME</li>
                            </NavLink>
                            <NavLink to={'/'}>
                                <li className='list-none w-full text-left  p-3 hover:bg-sky-400 hover:text-white text-[15px] font-bold'>HOME</li>
                            </NavLink>
                            <NavLink to={'/'}>
                                <li className='list-none w-full text-left  p-3 hover:bg-sky-400 hover:text-white text-[15px] font-bold'>HOME</li>
                            </NavLink>



                        </section>
                    </motion.div>}
                </AnimatePresence> */}

              

            </nav>
        </main>
    )
}

export default Navbar
