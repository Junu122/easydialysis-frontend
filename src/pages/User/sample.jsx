import React, { useEffect,useState } from 'react';
import { assets } from '../../assets/assets';
import Ourservices from '../../components/User/Ourservices';
import Footer from '../../components/User/Footer';
import { Wrench,LoaderCircle } from 'lucide-react';
import { Search, MapPin, Hospital, Heart, Activity } from "lucide-react";

const Services = () => {
   const [pageLoading,setpageLoading]=useState(true);
     const [loadingProgress, setLoadingProgress] = useState(0);
    
  const dialysisServices = [
    {
      id: 1,
      heading: "Accessible Locations",
      paragraph: "Our dialysis centers are located in easily accessible areas to ensure that quality care is always within reach. Designed with your convenience in mind, our facilities make it easy for you to focus on your health.",
      image:  "https://via.placeholder.com/300x200?text=Reliable+Booking",
      icon: "map-pin"
    },
    {
      id: 2,
      heading: "Reliable Booking",
      paragraph: "We offer a dependable and user-friendly booking system to schedule your dialysis sessions at your convenience. Our goal is to make your scheduling experience seamless and stress-free.",
      image: "/api/placeholder/600/400",
      icon: "calendar"
    },
    {
      id: 3,
      heading: "Experienced Staff",
      paragraph: "Our medical team is composed of highly experienced professionals dedicated to providing safe and personalized dialysis care. With a focus on empathy and precision, we ensure you receive the highest quality treatment.",
      image:  "/api/placeholder/600/400",
      icon: "users"
    },
    {
      id: 4,
      heading: "Modern Equipment",
      paragraph: "Our dialysis centers are equipped with modern technology to ensure effective and efficient treatments. We prioritize your comfort and safety during every session.",
      image: "/api/placeholder/600/400",
      icon: "cpu"
    },
    {
      id: 5,
      heading: "Comprehensive Support",
      paragraph: "We provide holistic support services, including dietary guidance and counseling, to help you manage your health effectively. Our team is here to assist you at every step of your dialysis journey.",
      image:  "/api/placeholder/600/400",
      icon: "heart"
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 2000);
    setLoadingProgress(100);
    const pageLoadTimer = setTimeout(() => {
      setpageLoading(false);
      
    }, 1000); 
  },[])


    if (pageLoading) {
      return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="relative mb-8">
          {/* Pulsing circles */}
          <div className="absolute inset-0 rounded-full bg-pink-500/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
          
          {/* Heart beat animation */}
          <div className="relative h-28 w-28 flex items-center justify-center">
            <Heart className="h-16 w-16 text-white animate-pulse" strokeWidth={1.5} />
            
            {/* Animated circle around icon */}
            <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="45" 
                stroke="white" 
                strokeWidth="2"
                strokeDasharray="10,5"
                fill="none" 
              />
            </svg>
            
            {/* Small orbiting icons */}
            <div className="absolute h-10 w-10 animate-orbit" style={{ animationDuration: '3s' }}>
              <Hospital className="h-6 w-6 text-pink-700 absolute -top-3 -left-3" />
            </div>
            <div className="absolute h-10 w-10 animate-orbit" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <Activity className="h-6 w-6 text-pink-700 absolute -bottom-3 -right-3" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3 tracking-wide">Services</h1>
        <p className="text-white/80 mb-8 text-center max-w-sm">Loading our services..</p>
        
        {/* Progress bar */}
        <div className="w-64 md:w-80 h-2 bg-pink-400 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-pink-800 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}  
          ></div>
        </div>
        <p className="text-pink-700 text-sm">{Math.round(loadingProgress)}%</p>
        
        {/* Animated dots */}
        <div className="flex space-x-2 mt-8">
          <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      );
    }

  return (
    <div className="font-sans">
    {/* Hero Section - REDUCED HEIGHT */}
    <section className="relative h-64 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${ "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="})`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-600/80"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 text-center z-10">
      <Wrench />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
          Comprehensive services designed with care, expertise, and your well-being in mind.
        </p>
      </div>
    </section>

    {/* Services Card Section */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our state-of-the-art facilities and compassionate team are dedicated to providing 
            exceptional care tailored to your individual needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dialysisServices.map((dialysisService) => (
            <Ourservices key={dialysisService.id} service={dialysisService} />
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our patients have to say about their experience with our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-lg">Sarah Johnson</h4>
                <p className="text-gray-500">Patient since 2022</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The staff has been incredible. They're not only professional but also genuinely caring. The modern facilities and flexible scheduling have made my treatment journey much easier."</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-lg">Michael Torres</h4>
                <p className="text-gray-500">Patient since 2021</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Finding a center with such accessible locations and reliable booking has been a game-changer for me. The comprehensive support I receive here goes beyond just treatment - it's truly holistic care."</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* CTA Section - CHANGED TO PINK-600 WITH WHITE TEXT */}
    <section className="py-16 bg-pink-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Quality Care?</h2>
        <p className="text-xl mb-8">Schedule your appointment today and let our experienced team take care of you.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-pink-600 hover:bg-pink-50 transition-colors px-8 py-3 rounded-full font-medium text-lg">
            Book an Appointment
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors px-8 py-3 rounded-full font-medium text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
};

export default Services;