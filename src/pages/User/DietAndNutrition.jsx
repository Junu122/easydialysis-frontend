import { useEffect, useState } from "react";
import { Leaf, AlertTriangle, Check, Info, ChevronDown, Search, Heart, BookOpen, Filter, ArrowRight } from "lucide-react";
import Footer from "../../components/User/Footer";
const KidneyDietNutritionGuide=()=> {
    useEffect(()=>{
  
        window.scrollTo(0, 0);
      },[])
  const [activeTab, setActiveTab] = useState("overview");
  const [activeAccordion, setActiveAccordion] = useState("phosphorus");
  
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 ">
      <header className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3 bg-teal-600 text-white p-2 rounded-lg">
              <Leaf size={24} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Kidney Nutrition Guide</h1>
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search foods or nutrients..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-12">
          <div className="bg-teal-600 text-white rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Diet & Nutrition for Kidney Patients</h2>
            <p className="text-lg opacity-90 mb-6">
              Proper nutrition is crucial when managing kidney disease or undergoing dialysis. This guide helps you make informed food choices to support your kidney health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <button 
                onClick={() => setActiveTab("overview")}
                className={`p-3 rounded-lg transition-colors flex items-center justify-center font-medium ${activeTab === "overview" ? "bg-white text-teal-700" : "bg-teal-700 text-white"}`}
              >
                <Info size={18} className="mr-2" /> Overview
              </button>
              <button 
                onClick={() => setActiveTab("avoid")}
                className={`p-3 rounded-lg transition-colors flex items-center justify-center font-medium ${activeTab === "avoid" ? "bg-white text-teal-700" : "bg-teal-700 text-white"}`}
              >
                <AlertTriangle size={18} className="mr-2" /> Foods to Avoid
              </button>
              <button 
                onClick={() => setActiveTab("eat")}
                className={`p-3 rounded-lg transition-colors flex items-center justify-center font-medium ${activeTab === "eat" ? "bg-white text-teal-700" : "bg-teal-700 text-white"}`}
              >
                <Check size={18} className="mr-2" /> Foods to Enjoy
              </button>
            
            </div>
          </div>
        </section>

        {activeTab === "overview" && (
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Info size={24} className="mr-3 text-teal-600" /> Nutrition Overview for Kidney Disease
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-teal-700">Key Nutrients to Monitor</h4>
                  <div className="space-y-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-800 mb-2">Sodium</h5>
                      <p className="text-gray-700">Limit sodium intake to control blood pressure and reduce fluid retention. Aim for less than 2,300mg daily.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-800 mb-2">Potassium</h5>
                      <p className="text-gray-700">Too much potassium can affect heart rhythm. Limits vary by individual and stage of kidney disease.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-800 mb-2">Phosphorus</h5>
                      <p className="text-gray-700">Excess phosphorus can weaken bones and cause itching. Often limited in advanced kidney disease.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-800 mb-2">Protein</h5>
                      <p className="text-gray-700">Protein needs vary based on kidney function and dialysis status. Quality matters more than quantity.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-teal-700">Diet Differences by Treatment</h4>
                  <div className="border-l-4 border-teal-500 pl-4 mb-6">
                    <h5 className="font-medium mb-2">Pre-Dialysis/CKD</h5>
                    <p className="text-gray-700 mb-2">Often requires controlling protein, sodium, phosphorus, and potassium. Focus on preserving remaining kidney function.</p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Moderate protein restriction</li>
                      <li>Strict phosphorus control</li>
                      <li>Careful potassium management</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 mb-6">
                    <h5 className="font-medium mb-2">Hemodialysis</h5>
                    <p className="text-gray-700 mb-2">Higher protein needs with continued control of phosphorus, potassium, and fluid intake.</p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Increased high-quality protein</li>
                      <li>Strict fluid restrictions</li>
                      <li>Lower potassium and phosphorus</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-medium mb-2">Peritoneal Dialysis</h5>
                    <p className="text-gray-700 mb-2">Higher protein needs with more flexible potassium restrictions. Increased focus on calorie management.</p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Higher protein requirements</li>
                      <li>Control glucose intake</li>
                      <li>More liberal potassium allowance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <Info size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-blue-800">
                    <span className="font-medium">Important Note:</span> Dietary needs are highly individual and can change over time. 
                    Work closely with your renal dietitian for personalized recommendations tailored to your specific condition, 
                    lab values, and treatment plan.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "avoid" && (
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <AlertTriangle size={24} className="mr-3 text-red-500" /> Foods to Limit or Avoid
              </h3>
              
              <div className="mb-8">
                <div className="bg-red-50 p-5 rounded-xl mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-700 flex items-center">
                    <Filter size={20} className="mr-2" /> Why Certain Foods Are Restricted
                  </h4>
                  <p className="text-gray-700">
                    When kidneys don't function properly, they can't efficiently filter waste products and excess nutrients from the blood. 
                    Restricting certain foods helps prevent dangerous build-up of substances like potassium, phosphorus, and sodium that 
                    can cause complications when they accumulate in your body.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* High Phosphorus Foods */}
                  <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-red-100 p-4">
                      <h5 className="font-medium text-lg text-red-800">High Phosphorus Foods</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Dairy (milk, cheese, yogurt)</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Nuts and seeds</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Whole grains</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Cola beverages</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Processed meats</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Foods with phosphate additives</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* High Potassium Foods */}
                  <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-red-100 p-4">
                      <h5 className="font-medium text-lg text-red-800">High Potassium Foods</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Bananas, oranges, avocados</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Potatoes, tomatoes</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Beans and legumes</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Chocolate and nuts</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Salt substitutes</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Dried fruits</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* High Sodium Foods */}
                  <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-red-100 p-4">
                      <h5 className="font-medium text-lg text-red-800">High Sodium Foods</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Processed foods</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Canned soups and vegetables</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Fast food</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Condiments (soy sauce, BBQ)</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Deli/lunch meats</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Salted snacks</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Foods High in Liquid */}
                  <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-red-100 p-4">
                      <h5 className="font-medium text-lg text-red-800">Foods High in Liquid</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Ice cream</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Gelatin</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Watermelon</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Soups and broths</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Grapes</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* High Protein Foods (for pre-dialysis) */}
                  <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-red-100 p-4">
                      <h5 className="font-medium text-lg text-red-800">High Protein (Pre-Dialysis)</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Large portions of meat</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>High-protein supplements</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Protein powders</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Excessive dairy consumption</span>
                        </li>
                      </ul>
                      <p className="mt-2 text-sm text-gray-600 italic">Note: Protein needs increase on dialysis</p>
                    </div>
                  </div>

                  {/* Additives to Avoid */}
                  <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-red-100 p-4">
                      <h5 className="font-medium text-lg text-red-800">Additives to Avoid</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Phosphate additives (PHOS-)</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>MSG (monosodium glutamate)</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Sodium nitrate/nitrite</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Sodium bicarbonate</span>
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span>Potassium chloride</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-200">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Info size={20} className="text-yellow-600 mr-2" /> Hidden Sources to Watch For
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2 text-yellow-800">Hidden Phosphorus:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Processed foods with "-phos" ingredients</li>
                      <li>Instant products (oatmeal, pudding)</li>
                      <li>Enhanced meats ("retained water" products)</li>
                      <li>Shelf-stable baked goods</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-yellow-800">Hidden Sodium:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Medications (antacids, laxatives)</li>
                      <li>Restaurant foods</li>
                      <li>Baking mixes</li>
                      <li>Frozen dinners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "eat" && (
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Check size={24} className="mr-3 text-green-500" /> Kidney-Friendly Food Choices
              </h3>
              
              <div className="mb-8">
                <div className="bg-green-50 p-5 rounded-xl mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-green-700">Focus on These Food Groups</h4>
                  <p className="text-gray-700">
                    While dietary restrictions can feel limiting, there are still many delicious and nutritious foods you can enjoy. 
                    Focus on these kidney-friendly options to create satisfying meals while supporting your health.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Protein Sources */}
                  <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-green-100 p-4">
                      <h5 className="font-medium text-lg text-green-800">Protein Sources</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Egg whites (low phosphorus)</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Fresh chicken or turkey</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Fish (not breaded)</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Lean cuts of beef or pork</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Tofu (in moderation)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Low-Potassium Vegetables */}
                  <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-green-100 p-4">
                      <h5 className="font-medium text-lg text-green-800">Low-Potassium Vegetables</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Bell peppers</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Cabbage</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Carrots</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Cucumber</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Green beans</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Lettuce</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Low-Potassium Fruits */}
                  <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-green-100 p-4">
                      <h5 className="font-medium text-lg text-green-800">Low-Potassium Fruits</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Apple</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Berries (blueberries, strawberries)</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Grapes</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Pineapple</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Plums</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Grains */}
                  <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-green-100 p-4">
                      <h5 className="font-medium text-lg text-green-800">Kidney-Friendly Grains</h5>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>White rice</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Couscous</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>White bread & pasta</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Rice noodles</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          <span>Unsalted crackers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </main>
    <Footer />
</div>
  )}

  export default KidneyDietNutritionGuide
      
        
      

                  