import { useState,useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, Heart, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import Footer from '../../components/User/Footer';

import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../components/User/LoadingAnimation';
export default function Services() {
  const navigate=useNavigate()
  const [activeTab, setActiveTab] = useState('services');
 const [loadingProgress, setLoadingProgress] = useState(0);
   const [pageLoading,setpageLoading]=useState(true);
  const services = [
    {
      title: "In-Center Hemodialysis",
      description: "Standard dialysis treatment performed at our state-of-the-art centers with medical professionals present.",
      icon: <Heart className="text-pink-700" size={24} />,
      duration: "3-4 hours",
      frequency: "3 times per week"
    },
    {
      title: "Home Hemodialysis",
      description: "Perform dialysis in the comfort of your own home with our support and equipment.",
      icon: <MapPin className="text-pink-700" size={24} />,
      duration: "2-3 hours",
      frequency: "4-6 times per week"
    },
    {
      title: "Peritoneal Dialysis",
      description: "A home-based treatment that uses the lining of your abdomen to filter blood inside your body.",
      icon: <ShieldCheck className="text-pink-700" size={24} />,
      duration: "All day or night",
      frequency: "Daily"
    },
    {
      title: "Urgent Dialysis Care",
      description: "Emergency dialysis services for patients requiring immediate treatment.",
      icon: <Phone className="text-pink-700" size={24} />,
      duration: "As needed",
      frequency: "As required"
    }
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
         <LoadingAnimation loadingProgress={loadingProgress} />
        );
      }
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <header className="bg-pink-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Compassionate Dialysis Care When You Need It</h1>
              <p className="text-lg mb-8">Book your dialysis treatment with ease and receive top-quality care from our experienced professionals.</p>
              <button onClick={()=>navigate('/dialysis')} className="bg-white text-pink-800 px-6 py-3 rounded-lg font-bold hover:bg-pink-100 transition duration-300 flex items-center">
                Book Appointment <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-pink-800 bg-opacity-50 p-6 rounded-xl shadow-2xl">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1rBKU_OJuv-d0d9s8z9rYZl0VHhvvAndKQ&s" 
                  alt="Dialysis Care" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="sm:flex-col md:flex-row space-x-1">
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-4 py-3 font-medium transition ${activeTab === 'services' ? 'text-pink-700 border-b-2 border-pink-700 text-[20px]' : 'text-gray-600 hover:text-pink-700'}`}
            >
              Our Services
            </button>
            <button 
              onClick={() => setActiveTab('insurance')}
              className={`px-4 py-3 font-medium transition ${activeTab === 'insurance' ? 'text-pink-700 border-b-2 border-pink-700 text-[20px]' : 'text-gray-600 hover:text-pink-700'}`}
            >
              Insurance
            </button>
            <button 
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-3 font-medium transition ${activeTab === 'resources' ? 'text-pink-700 border-b-2 border-pink-700 text-[20px]' : 'text-gray-600 hover:text-pink-700'}`}
            >
              Resources
            </button>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {activeTab === 'services' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Dialysis Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-pink-100">
                    <div className="bg-pink-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="border-t border-pink-100 pt-4 mt-2">
                      <div className="flex items-center mb-2">
                        <Clock size={16} className="text-pink-700 mr-2" />
                        <span className="text-sm text-gray-600">Duration: {service.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="text-pink-700 mr-2" />
                        <span className="text-sm text-gray-600">Frequency: {service.frequency}</span>
                      </div>
                    </div>
                    <button className="w-full mt-6 bg-pink-700 text-white py-2 rounded-lg font-medium hover:bg-pink-800 transition duration-300">
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 bg-pink-50 rounded-xl p-8 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Dialysis Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-2 rounded-full mr-4">
                      <Star className="text-pink-700" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Experienced Team</h4>
                      <p className="text-gray-600">Our staff includes board-certified nephrologists and specially trained dialysis nurses.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-2 rounded-full mr-4">
                      <Star className="text-pink-700" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">State-of-the-Art Facilities</h4>
                      <p className="text-gray-600">Modern equipment and comfortable treatment areas for the best care experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-2 rounded-full mr-4">
                      <Star className="text-pink-700" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Personalized Care</h4>
                      <p className="text-gray-600">Customized treatment plans developed specifically for your health needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

      

          {activeTab === 'insurance' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Insurance Information</h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-lg text-gray-700 mb-6">
                  We work with most major insurance providers to ensure you receive the care you need. Our team will help verify your coverage and assist with any paperwork needed.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accepted Insurance Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-pink-50 p-4 rounded-lg">Medicare</div>
                  <div className="bg-pink-50 p-4 rounded-lg">Medicaid</div>
                  <div className="bg-pink-50 p-4 rounded-lg">Blue Cross Blue Shield</div>
                  <div className="bg-pink-50 p-4 rounded-lg">Aetna</div>
                  <div className="bg-pink-50 p-4 rounded-lg">Cigna</div>
                  <div className="bg-pink-50 p-4 rounded-lg">UnitedHealthcare</div>
                </div>
                
                <div className="bg-pink-100 p-6 rounded-lg border border-pink-200">
                  <h4 className="font-bold text-gray-800 mb-2">Need help with insurance verification?</h4>
                  <p className="text-gray-700 mb-4">
                    Our patient coordinators can help you understand your coverage and estimate any out-of-pocket costs.
                  </p>
                  <button className="bg-pink-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-800 transition duration-300">
                    Contact Insurance Support
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Patient Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Patient Education</h3>
                  <p className="text-gray-600 mb-6">
                    Access resources to help you understand kidney disease, treatment options, and how to manage your health.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                      <ArrowRight className="text-pink-700 mr-2" size={16} />
                      <span>Understanding Dialysis Treatment</span>
                    </div>
                    <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                      <ArrowRight className="text-pink-700 mr-2" size={16} />
                      <span>Kidney-Friendly Diet Guide</span>
                    </div>
                    <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                      <ArrowRight className="text-pink-700 mr-2" size={16} />
                      <span>Managing Medications</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Support Services</h3>
                  <p className="text-gray-600 mb-6">
                    We offer various support services to help you manage your kidney disease journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-pink-100 p-2 rounded-full mr-3">
                        <Heart className="text-pink-700" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Nutrition Counseling</h4>
                        <p className="text-gray-600 text-sm">Work with our renal dietitians to create a kidney-friendly meal plan.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-pink-100 p-2 rounded-full mr-3">
                        <Heart className="text-pink-700" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Social Services</h4>
                        <p className="text-gray-600 text-sm">Get help with the emotional and social aspects of managing kidney disease.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-pink-100 p-2 rounded-full mr-3">
                        <Heart className="text-pink-700" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Transportation Assistance</h4>
                        <p className="text-gray-600 text-sm">Access transportation services to and from your dialysis appointments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-700 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Dialysis Treatment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to provide you with expert care and support throughout your treatment journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate('/dialysis')} className="bg-white text-pink-700 px-6 py-3 rounded-lg font-bold hover:bg-pink-100 transition duration-300">
              Book Appointment
            </button>
            <button className="bg-pink-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-pink-900 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
}