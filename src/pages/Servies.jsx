import React from 'react'
import { assets } from '../assets/assets'
import Ourservices from '../components/Ourservices'
import Footer from '../components/Footer'

const Servies = () => {
    const dialysisServices = [
  {
    id: 1,
    heading: "Accessible Locations",
    paragraph: "Our dialysis centers are located in easily accessible areas to ensure that quality care is always within reach. Designed with your convenience in mind, our facilities make it easy for you to focus on your health.",
    image: "https://via.placeholder.com/300x200?text=Accessible+Locations",
  },
  {
    id: 2,
    heading: "Reliable Booking",
    paragraph: "We offer a dependable and user-friendly booking system to schedule your dialysis sessions at your convenience. Our goal is to make your scheduling experience seamless and stress-free.",
    image: "https://via.placeholder.com/300x200?text=Reliable+Booking",
  },
  {
    id: 3,
    heading: "Experienced Staff",
    paragraph: "Our medical team is composed of highly experienced professionals dedicated to providing safe and personalized dialysis care. With a focus on empathy and precision, we ensure you receive the highest quality treatment.",
    image: "https://via.placeholder.com/300x200?text=Experienced+Staff",
  },
  {
    id: 4,
    heading: "Modern Equipment",
    paragraph: "Our dialysis centers are equipped with modern technology to ensure effective and efficient treatments. We prioritize your comfort and safety during every session.",
    image: "https://via.placeholder.com/300x200?text=State-of-the-Art+Equipment",
  },
  {
    id: 5,
    heading: " Support",
    paragraph: "We provide holistic support services, including dietary guidance and counseling, to help you manage your health effectively. Our team is here to assist you at every step of your dialysis journey.",
    image: "https://via.placeholder.com/300x200?text=Comprehensive+Support",
  },
];

    return (
        <div>
            <div className="bg-gray-50 min-h-screen">
                <section className="bg-[#d02b6e] text-white py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
                    <p className="text-lg md:text-xl mt-4">
                        Comprehensive dialysis services designed to meet your needs.
                    </p>
                </section>
               
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dialysisServices.map((dialysisservice)=>(
                                <Ourservices key={dialysisservice.id} service={dialysisservice}/>
                            ))}
                           
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Servies
