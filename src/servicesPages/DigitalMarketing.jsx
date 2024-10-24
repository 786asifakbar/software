import React from 'react';
import { FaRocket, FaThumbsUp, FaSearch, FaChartLine, FaUsers, FaClipboardList, FaEnvelope, FaChartBar } from 'react-icons/fa';

const DigitalMarketing = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen p-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(./marketing-bg.jpg)' }} // Add your background image here
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with 3D Animation */}
          <div className="relative transform transition-transform duration-1000 hover:scale-105 hover:rotate-6 perspective-1000">
            <div className="w-full h-full bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:rotate-y-12 hover:rotate-x-12 transition-all duration-1000 ease-in-out">
              <img
                src="./Degital.png"
                alt="Digital Marketing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content with 3D Effects */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">
              <FaRocket className="inline-block mr-3 transform transition-transform duration-500 hover:scale-110" />
              Digital Marketing
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Logic Tech, we drive business growth with cutting-edge digital marketing strategies.
              Our services include SEO, PPC, social media marketing, and content creation, all tailored
              to increase your online presence and engagement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From creating compelling content to optimizing your digital campaigns, we ensure your brand
              stands out in the competitive online landscape. Let us help you transform your digital footprint
              and achieve your marketing goals.
            </p>

            {/* Services Section with Hover Animations */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-6 flex items-center">
                <FaSearch className="text-blue-600 w-8 h-8 mb-2 text-shadow-lg" /> {/* SEO Optimization Icon */}
                <span className="ml-2">SEO Optimization</span>
              </div>

              <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-6 flex items-center">
                <FaChartLine className="text-blue-600 w-8 h-8 mb-2 text-shadow-lg" /> {/* PPC Campaigns Icon */}
                <span className="ml-2">PPC Campaigns</span>
              </div>

              <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-6 flex items-center">
                <FaUsers className="text-blue-600 w-8 h-8 mb-2 text-shadow-lg" /> {/* Social Media Management Icon */}
                <span className="ml-2">Social Media Management</span>
              </div>

              <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-6 flex items-center">
                <FaClipboardList className="text-blue-600 w-8 h-8 mb-2 text-shadow-lg" /> {/* Content Marketing Icon */}
                <span className="ml-2">Content Marketing</span>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="text-gray-800 flex items-center">
                <FaEnvelope className="text-blue-600 mr-2 w-5 h-5 text-shadow-lg" /> {/* Email Marketing Icon */}
                Email Marketing
              </div>

              <div className="text-gray-800 flex items-center">
                <FaChartBar className="text-blue-600 mr-2 w-5 h-5 text-shadow-lg" /> {/* Analytics & Reporting Icon */}
                Analytics & Reporting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
