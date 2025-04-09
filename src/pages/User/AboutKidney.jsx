import { useEffect, useState } from 'react';
import {  Heart, Droplet, Activity, Info, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../../components/User/Footer';
import { GiKidneys } from "react-icons/gi"
export default function KidneyAndDialysisPage() {
  useEffect(()=>{

    window.scrollTo(0, 0);
  },[])
  const [openFaq, setOpenFaq] = useState(null);
   
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is chronic kidney disease (CKD)?",
      answer: "Chronic kidney disease is a condition characterized by a gradual loss of kidney function over time. The kidneys filter wastes and excess fluids from the blood, which are then excreted in the urine. When chronic kidney disease reaches an advanced stage, dangerous levels of fluid, electrolytes, and wastes can build up in your body."
    },
    {
      question: "What causes kidney disease?",
      answer: "The most common causes of kidney disease are diabetes and high blood pressure. Other causes include glomerulonephritis (inflammation of the kidney's filtering units), polycystic kidney disease, repeated urinary infections, and prolonged obstruction of the urinary tract."
    },
    {
      question: "What is dialysis?",
      answer: "Dialysis is a treatment that filters and purifies the blood using a machine. This helps keep your fluids and electrolytes in balance when the kidneys can no longer perform these functions. There are two types of dialysis: hemodialysis and peritoneal dialysis."
    },
    {
      question: "What's the difference between hemodialysis and peritoneal dialysis?",
      answer: "In hemodialysis, blood is pumped out of your body to an artificial kidney machine and returned to your body by tubes. In peritoneal dialysis, the inside lining of your abdomen acts as a natural filter. Wastes are taken out by means of a cleansing fluid called dialysate, which is washed in and out of your abdomen in cycles."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Understanding Kidney Health & Dialysis</h1>
              <p className="text-xl mb-8">Learn about kidney function, disease prevention, and treatment options available.</p>
             
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-full shadow-xl">
              <GiKidneys className="text-pink-600 w-16 h-16 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Kidney Health Essentials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your kidneys are vital organs that help filter waste and excess fluid from your blood, regulate blood pressure, and support overall health.</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
           <GiKidneys />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Kidney Function</h3>
            <p className="text-gray-600">Kidneys filter about 120-150 quarts of blood daily, producing 1-2 quarts of urine. They balance electrolytes, regulate blood pressure, and produce important hormones.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
              <Heart size={36} className="text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Kidney Disease</h3>
            <p className="text-gray-600">Chronic kidney disease affects about 10% of the global population. Early detection through regular testing can help prevent or slow disease progression.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
              <Droplet size={36} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Dialysis Treatment</h3>
            <p className="text-gray-600">Dialysis is a life-saving treatment that takes over kidney function when kidneys fail. Two main types are hemodialysis and peritoneal dialysis.</p>
          </div>
        </div>

        {/* Dialysis Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Types of Dialysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Hemodialysis</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Blood is pumped out of your body to an artificial kidney machine</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Usually done at a dialysis center three times per week</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Each session lasts about 3-4 hours</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Requires vascular access through an arteriovenous fistula, graft, or catheter</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Peritoneal Dialysis</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Uses the lining of your abdominal cavity (peritoneum) as a filter</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Can be performed at home, at work, or while traveling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Done either manually (CAPD) or using a machine at night (APD)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Requires a catheter to be placed in your abdomen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prevention Section */}
        <div className="bg-green-50 p-8 rounded-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Kidney Disease Prevention</h2>
            <p className="text-lg text-green-700">Take these steps to reduce your risk of developing kidney disease</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Activity className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Stay Active</h3>
              </div>
              <p className="text-gray-600">Regular exercise helps maintain healthy blood pressure and improves cardiovascular health, reducing kidney disease risk.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Droplet className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Stay Hydrated</h3>
              </div>
              <p className="text-gray-600">Drinking plenty of water helps clear sodium and toxins from your kidneys, lowering the risk of kidney disease.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Info className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Regular Check-ups</h3>
              </div>
              <p className="text-gray-600">Regular screening for kidney function, especially if you have diabetes, high blood pressure, or a family history of kidney disease.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 py-4"
              >
                <button 
                  className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
                  onClick={()=>toggleFaq(index)} 
                >
                  {faq.question}
                  {openFaq === index ? 
                    <ChevronUp size={20} className="text-blue-600" /> : 
                    <ChevronDown size={20} className="text-gray-400" />
                  }
                </button>
                {openFaq === index && (
                  <div className="mt-2 text-gray-600 pb-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Consult with healthcare professionals for personalized advice about kidney health and treatment options.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
              Find a Specialist
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Download Resources
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
    <Footer />
    </div>
  );
}