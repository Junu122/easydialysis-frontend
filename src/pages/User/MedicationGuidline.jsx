import { useState,useEffect } from "react";
import { Search, Clock, AlertCircle,  BookOpen, Heart, Bell, ChevronDown, ChevronRight } from "lucide-react";
import { GiMedicines } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import Footer from "../../components/User/Footer";
const KidneyMedicationGuide=()=> {
  const [activeAccordion, setActiveAccordion] = useState("common");
    useEffect(()=>{
  
      window.scrollTo(0, 0);
    },[])
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3 bg-purple-600 text-white p-2 rounded-lg">
             <GiMedicines />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Kidney Care </h1>
          </div>
         
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="mb-12">
          <div className="bg-purple-600 text-white rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Medication Guide</h2>
            <p className="text-lg opacity-90 mb-6">
              Managing medications is crucial for kidney patients. This guide helps you understand your prescriptions, 
              potential interactions, and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="flex items-center">
                  <Clock className="mr-2" size={20} />
                  <span className="font-medium">Medication Schedule</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="mr-2" size={20} />
                  <span className="font-medium">Interaction Warnings</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="flex items-center">
                  <Heart className="mr-2" size={20} />
                  <span className="font-medium">Kidney-Friendly Tips</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <AiFillMedicineBox />
            </div>
            <h3 className="text-xl font-semibold mb-2">Common Medications</h3>
            <p className="text-gray-600 mb-4">Learn about standard medications prescribed for kidney patients.</p>
            <button className="text-blue-600 font-medium flex items-center">
              Read more <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
              <AlertCircle className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Side Effects Guide</h3>
            <p className="text-gray-600 mb-4">Understand possible side effects and when to contact your doctor.</p>
            <button className="text-green-600 font-medium flex items-center">
              Read more <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
              <BookOpen className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dietary Interactions</h3>
            <p className="text-gray-600 mb-4">How your medications interact with various foods and supplements.</p>
            <button className="text-purple-600 font-medium flex items-center">
              Read more <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Medication Information</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
            <button 
              className="w-full flex justify-between items-center p-6 focus:outline-none"
              onClick={() => toggleAccordion("common")}
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                 <GiMedicines />
                </div>
                <span className="font-semibold text-lg">Common Kidney Medications</span>
              </div>
              <ChevronDown 
                className={`transform transition-transform ${activeAccordion === "common" ? "rotate-180" : ""}`} 
                size={20} 
              />
            </button>
            
            {activeAccordion === "common" && (
              <div className="px-6 pb-6">
                <div className="border-l-4 border-blue-500 pl-4 mb-4">
                  <h4 className="font-semibold">Phosphate Binders</h4>
                  <p className="text-gray-600">Prevents phosphate absorption. Take with meals. Common brands: Renvela, Phoslo.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 mb-4">
                  <h4 className="font-semibold">Blood Pressure Medications</h4>
                  <p className="text-gray-600">ACE inhibitors and ARBs help protect kidney function. Take as prescribed.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Erythropoietin</h4>
                  <p className="text-gray-600">Helps produce red blood cells. Usually administered via injection.</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
            <button 
              className="w-full flex justify-between items-center p-6 focus:outline-none"
              onClick={() => toggleAccordion("avoid")}
            >
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <AlertCircle className="text-red-600" size={20} />
                </div>
                <span className="font-semibold text-lg">Medications to Avoid</span>
              </div>
              <ChevronDown 
                className={`transform transition-transform ${activeAccordion === "avoid" ? "rotate-180" : ""}`} 
                size={20} 
              />
            </button>
            
            {activeAccordion === "avoid" && (
              <div className="px-6 pb-6">
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h4 className="font-semibold">NSAIDs</h4>
                  <p className="text-gray-600">Ibuprofen, naproxen and similar pain relievers can worsen kidney function.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 mb-4">
                  <h4 className="font-semibold">Certain Antibiotics</h4>
                  <p className="text-gray-600">Some may need dose adjustment or alternatives. Always inform prescribers about your kidney condition.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">OTC Supplements</h4>
                  <p className="text-gray-600">Consult with your doctor before taking any supplements or herbal remedies.</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-6 focus:outline-none"
              onClick={() => toggleAccordion("tips")}
            >
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <Heart className="text-green-600" size={20} />
                </div>
                <span className="font-semibold text-lg">Medication Management Tips</span>
              </div>
              <ChevronDown 
                className={`transform transition-transform ${activeAccordion === "tips" ? "rotate-180" : ""}`} 
                size={20} 
              />
            </button>
            
            {activeAccordion === "tips" && (
              <div className="px-6 pb-6">
                <div className="border-l-4 border-green-500 pl-4 mb-4">
                  <h4 className="font-semibold">Use Pill Organizers</h4>
                  <p className="text-gray-600">Weekly pill organizers help you track your medication schedule.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 mb-4">
                  <h4 className="font-semibold">Set Reminders</h4>
                  <p className="text-gray-600">Use phone alarms or specialized medication reminder apps.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Keep a Medication Journal</h4>
                  <p className="text-gray-600">Track side effects and effectiveness to discuss with your healthcare provider.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Medication Reminder</h2>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Set up a personal reminder</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <Bell size={16} className="mr-2" />
                Add Reminder
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Never miss a dose again. Set up custom reminders for each medication based on your schedule.
            </p>
          </div>
        </section>
      </main>

   
      <Footer />
    </div>
  );
}

export default KidneyMedicationGuide;