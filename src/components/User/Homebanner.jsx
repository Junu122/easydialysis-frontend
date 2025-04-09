import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('D:\desktop\EASYDIALYSIS\frontend\src\assets\dialysisimg9.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      {/* Content container */}
      <div className="relative h-full flex items-center">
        <div ref={ref} className="container mx-auto px-6 lg:px-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            className="max-w-3xl mx-auto lg:mx-0"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
            >
              <span className="text-white text-sm font-medium">Professional Healthcare Services</span>
            </motion.div>
            
            {/* Main heading with backdrop */}
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <h1 className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">DIALYSIS</span>
                <br />
                <span className="relative">
                  MADE EASY
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4"
            >
              Booking on your convenience
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/80 max-w-xl mb-8"
            >
              Experience seamless dialysis care with our modern, patient-centered booking system designed for your comfort and peace of mind.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => navigate('/dialysis')}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <Calendar size={18} />
                Book Now
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
              >
                Learn More
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
};

export default HomeBanner;