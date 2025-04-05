import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add background blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => setDropdown(!dropdown);

  const handleLogout = () => {
    dispatch(logout());
    setDropdown(false);
    navigate("/");
  };

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div 
      className={`sticky  w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <NavLink to="/" className="z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img
                src={assets.Companylogo}
                alt="Logo"
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationLinks />
          </div>

          {/* Desktop Authentication */}
          <div className="hidden md:block">
            {!isAuthenticated ? (
              <LoginButton navigate={navigate} />
            ) : (
              <UserMenu 
                user={user} 
                dropdown={dropdown} 
                toggleDropdown={toggleDropdown} 
                navigate={navigate}
                handleLogout={handleLogout}
                dropdownVariants={dropdownVariants}
              />
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center"
            onClick={toggleNavbar}
            aria-label="Toggle menu"
          >
            <motion.div
              className="w-6 flex flex-col gap-1.5"
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-gray-800 block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-800 block"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-800 block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
              />
            </motion.div>
          </button>

          {/* Mobile Menu - Fixed and not affected by scrolling */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex flex-col min-h-screen p-6 pt-24">
                  <div className="flex-1">
                    <NavigationLinks mobile={true} closeMenu={() => setIsMenuOpen(false)} />
                  </div>
                  
                  <div className="mt-auto mb-8 w-full">
                    {!isAuthenticated ? (
                      <LoginButton navigate={navigate} mobile={true} closeMenu={() => setIsMenuOpen(false)} />
                    ) : (
                      <div className="w-full">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-500 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                            {user?.username.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{user?.username}</p>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <button 
                            className="w-full py-3 px-4 rounded-lg bg-gray-100 text-gray-800 font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors"
                            onClick={() => {
                              navigate("/myappoinments");
                              setIsMenuOpen(false);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            Appointments
                          </button>
                          <button 
                            className="w-full py-3 px-4 rounded-lg bg-red-100 text-red-600 font-medium flex items-center gap-2 hover:bg-red-200 transition-colors"
                            onClick={() => {
                              handleLogout();
                              setIsMenuOpen(false);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                              <path d="M9 14A5 5 0 109 4a5 5 0 000 10z" />
                            </svg>
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.div>
  );
};

// Separate components for better organization
const NavigationLinks = ({ mobile = false, closeMenu }) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/dialysis", label: "Dialysis" },
    { path: "/SERVICES", label: "Services" },
    { path: "/ABOUT", label: "About" }
  ];

  return (
    <ul className={`flex ${mobile ? "flex-col w-full" : "flex-row"} items-center gap-6`}>
      {navItems.map((item) => (
        <li key={item.path} className={mobile ? "w-full" : ""}>
          <NavLink
            to={item.path}
            className={({ isActive }) => 
              `${mobile ? "block text-center py-3 w-full" : "relative py-2 px-1"} 
              ${isActive 
                ? "text-primary font-semibold" 
                : "text-gray-700 hover:text-primary"} 
              transition-colors duration-300 text-base md:text-sm lg:text-base uppercase tracking-wide`
            }
            onClick={mobile ? closeMenu : undefined}
          >
            {({ isActive }) => (
              <>
                {item.label}
                {!mobile && isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                    layoutId="navIndicator"
                  />
                )}
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const LoginButton = ({ navigate, mobile = false, closeMenu }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        mobile ? "w-full" : ""
      } px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-pink-500 text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300`}
      onClick={() => {
        navigate("/login");
        if (closeMenu) closeMenu();
      }}
    >
      LOG IN
    </motion.button>
  );
};

const UserMenu = ({ user, dropdown, toggleDropdown, navigate, handleLogout, dropdownVariants }) => {
  return (
    <div className="relative">
      <motion.button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        aria-label="User menu"
      >
        {user?.username.charAt(0).toUpperCase()}
      </motion.button>

      <AnimatePresence>
        {dropdown && (
          <motion.div
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-10 border border-gray-100"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
          >
            <div className="px-4 py-3 bg-gray-50">
              <p className="font-semibold text-gray-800">{user?.username}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            
            <div className="py-2">
              <button
                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-700 flex items-center gap-2 transition-colors"
                onClick={() => navigate("/myappoinments")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Appointments
              </button>
              
              <button
                className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-600 flex items-center gap-2 transition-colors"
                onClick={handleLogout}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                  <path d="M9 14A5 5 0 109 4a5 5 0 000 10z" />
                </svg>
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;