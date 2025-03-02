import React,{useEffect} from 'react'
import Footer from '../../components/User/Footer'

const About = () => {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#d02b6e] text-white py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to EasyDialysis</h1>
                    <p className="text-lg md:text-xl">
                        Simplifying dialysis care with innovative solutions and compassionate service.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/about-bg.jpg"
                                alt="About EasyDialysis"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        {/* Text */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-semibold mb-4">About EasyDialysis</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                At EasyDialysis, we are dedicated to providing accessible, efficient, and personalized
                                dialysis booking solutions for patients across India. Our mission is to bridge the gap
                                between patients and quality dialysis services through cutting-edge technology and
                                compassionate care. 
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Whether you're at home, traveling, or in need of urgent dialysis care, EasyDialysis is
                                here to make the process seamless and hassle-free. Trust us to be your partner in
                                ensuring timely and reliable dialysis care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our mission is to revolutionize dialysis care by providing unparalleled accessibility, reliability,
                        and patient-focused solutions. We strive to empower individuals to manage their dialysis
                        needs with confidence, ensuring that every patient receives the best care, anytime and
                        anywhere.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {/* Team Member */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Chief Medical Officer</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Rahul Sharma</h3>
                            <p className="text-gray-600">CTO</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
  )
}

export default About
