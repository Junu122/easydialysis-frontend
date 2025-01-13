import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setislogin] = useState(true)
  const [dropdown,setdropdown]=useState(false)

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown=()=>setdropdown(!dropdown)

  const activeClassName = "selected navlink";

  const activeStyleCallback = ({ isActive }) =>
    isActive ? activeClassName : "navlink";

  const handleLogout=()=>{
   setislogin(false)
   setdropdown(false)
  }

  return (
    <div className="z-30 bg-white sticky w-full top-0">
      <nav className="flex justify-between items-center py-4 px-6 shadow-md w-full">
        {/* Logo */}
        <section>
          <NavLink to={"/"}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={assets.Companylogo}
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </NavLink>
        </section>

        {/* Mobile Menu Toggle */}
        <section className="md:hidden">
          {isMenuOpen ? (
            <motion.i
              key="close"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleNavbar}
              className="bx bxs-x-square text-3xl cursor-pointer rounded-md"
            ></motion.i>
          ) : (
            <motion.i
              key="menu"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleNavbar}
              className="bx bx-menu text-3xl cursor-pointer"
            ></motion.i>
          )}
        </section>

        {/* Navigation Links */}
        <section
          className={`${isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col-reverse md:flex-row items-center md:gap-6 absolute md:relative top-[100%] left-0 md:top-0 md:left-auto bg-white w-full md:w-auto px-6 py-4 md:py-0 z-50 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6">
            <NavLink to={"/"} className={activeStyleCallback}>
              <li className="py-1 font-semibold linkeffect hover:text-primary transition duration-500 ease-in-out">
                HOME
              </li>
              <hr className="h-[1px] bg-primary hidden" />
            </NavLink>
            <NavLink to={"/dialysis"} className={activeStyleCallback}>
              <li className="py-1 font-semibold linkeffect hover:text-primary transition duration-500 ease-in-out">
                DIALYSIS
              </li>
              <hr className="h-[1px] bg-primary hidden" />
            </NavLink>
            <NavLink to={"/SERVICES"} className={activeStyleCallback}>
              <li className="py-1 font-semibold linkeffect hover:text-primary transition duration-500 ease-in-out">
                SERVICES
              </li>
              <hr className="h-[1px] bg-primary hidden" />
            </NavLink>
            <NavLink to={"/ABOUT"} className={activeStyleCallback}>
              <li className="py-1 font-semibold linkeffect hover:text-primary transition duration-500 ease-in-out">
                ABOUT
              </li>
              <hr className="h-[1px] bg-primary hidden" />
            </NavLink>
          </ul>

          {/* Login Button */}
          {
            !isLogin ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-primary hover:bg-[#ef468d] text-white text-sm w-1/2 md:w-auto"
                onClick={()=>navigate('/login')}
              >
                LOG-IN
              </motion.button>
            ) : (
              <div
            className="relative w-full md:w-auto"
            onBlur={() => setdropdown(false)}
          >
            <div
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={toggleDropdown}
            >
             j
            </div>

            {dropdown && (
              <div className="relative w-full md:absolute right-0 mt-2 md:w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
                <div className="px-4 py-2 border-b text-gray-800 w-full">
                  <p className="font-bold">junaid</p>
                  <p className="text-sm">junaid@gmail.com</p>
                </div>
                <ul className="py-2 text-gray-800">
                  <li onClick={()=>navigate('/myappoinments')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Appointments
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
            )}

        </section>
      </nav>
    </div>
  );
};

export default Navbar;
