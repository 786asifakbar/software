import { FaInfoCircle, FaWrench, FaClipboardList } from 'react-icons/fa';

const Overview = () => {
  return (
    <>
      <div className="relative bg-gray-50 min-h-screen py-24 overflow-hidden">
        {/* Background Parallax */}
        <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-[url('/banner.png')] opacity-10 z-0" style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 animate-fade-in-down">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              <FaInfoCircle className="inline-block mr-2 text-blue-600" />
              Software & Services Overview
            </h1>
            <p className="text-gray-600 text-lg">
              Discover our range of software solutions and services tailored to meet your business needs.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl mb-16 transition duration-500 transform hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
              <FaWrench className="mr-2 text-blue-500 hover:text-purple-500 transition duration-500" />
              Our Software Solutions
            </h2>
            <p className="text-gray-700 mb-4 animate-fade-in">
              At Logic Tech, we offer cutting-edge software solutions that help businesses optimize their workflows and enhance productivity.
            </p>
            <p className="text-gray-700 animate-fade-in">
              Our development process is driven by innovation, focusing on delivering secure, scalable, and high-quality software that meets industry standards and client expectations.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl transition duration-500 transform hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center">
              <FaClipboardList className="mr-2 text-blue-500 hover:text-purple-500 transition duration-500" />
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="relative group bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-400">
                <img src="/path/to/service1.png" alt="Service 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition duration-500">Service 1</h3>
                <p className="text-gray-600">
                  Description of service 1. This service helps enhance productivity and client success through effective solutions.
                </p>
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-purple-600 transition-all duration-500"></div>
              </div>

              {/* Service 2 */}
              <div className="relative group bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-400">
                <img src="/path/to/service2.png" alt="Service 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition duration-500">Service 2</h3>
                <p className="text-gray-600">
                  Description of service 2. This service provides key solutions for client operations and workflow.
                </p>
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-purple-600 transition-all duration-500"></div>
              </div>

              {/* Service 3 */}
              <div className="relative group bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-400">
                <img src="/path/to/service3.png" alt="Service 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition duration-500">Service 3</h3>
                <p className="text-gray-600">
                  Description of service 3. This service focuses on solving client problems with innovative solutions.
                </p>
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-purple-600 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;