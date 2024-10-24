import React from 'react';
import { FaCloud, FaCheckCircle } from 'react-icons/fa';
import AwsEx from './AwsEx';

const CloudSolutions = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen p-8 flex items-center justify-center bg-no-repeat"
      style={{ backgroundImage: 'url(./banner.png)' }} // Add your background image here
    >
      <div className="backdrop-blur-md bg-gradient-to-r from-blue-50/70 to-purple-100/70 min-h-screen w-full p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide">
                <FaCloud className="inline-block mr-3" />
                Cloud Solutions
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Logic Tech, we offer innovative cloud solutions designed to enhance your business’s efficiency and scalability. Our services provide flexible, secure, and cost-effective cloud solutions that allow you to focus on your core operations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We offer cloud migration, infrastructure management, and security services. Benefit from increased agility, improved collaboration, and scalable resources. Let us help you harness the power of the cloud.
              </p>

              <div className="grid grid-cols-2 gap-6 text-gray-800">
                <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6">
                  <FaCheckCircle className="text-blue-600 w-8 h-8 mb-2" />
                  Cloud Migration
                </div>

                <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6">
                  <FaCheckCircle className="text-blue-600 w-8 h-8 mb-2" />
                  Infrastructure Management
                </div>

                <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6">
                  <FaCheckCircle className="text-blue-600 w-8 h-8 mb-2" />
                  Cloud Security
                </div>

                <div className="p-4 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6">
                  <FaCheckCircle className="text-blue-600 w-8 h-8 mb-2" />
                  Scalability
                </div>
              </div>
            </div>

            {/* Right Side - 3D Image with Hover Effect */}
            <div className="relative group transform transition-transform duration-1000 hover:scale-105 hover:rotate-y-12 perspective-1000">
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:rotate-x-12 group-hover:rotate-y-12 transition-all duration-1000 ease-in-out">
                <img
                  src="./cloud.png"
                  alt="Cloud Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AWS Services */}
        <div className="mt-12">
          <AwsEx />
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;