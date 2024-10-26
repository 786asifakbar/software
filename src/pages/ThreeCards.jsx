import Card from './Card'; // Import the Card component
import { FaRocket, FaCheckCircle, FaLightbulb } from 'react-icons/fa'; // Import icons from react-icons

const Services = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12 mt-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {/* Card 1 */}
          <div className="relative group transform hover:scale-105 transition-transform duration-500">
            <Card
              icon={FaRocket}
              title="Efficiency"
              description="Delivering fast and optimized solutions to meet your needs."
            />
            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-800 rounded-lg shadow-lg opacity-50 group-hover:blur-md group-hover:scale-110 transition-all duration-500 z-0"></div>
          </div>

          {/* Card 2 */}
          <div className="relative group transform hover:scale-105 transition-transform duration-500">
            <Card
              icon={FaCheckCircle}
              title="Reliability"
              description="Ensuring consistent performance and dependability."
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-teal-800 rounded-lg shadow-lg opacity-50 group-hover:blur-md group-hover:scale-110 transition-all duration-500 z-0"></div>
          </div>

          {/* Card 3 */}
          <div className="relative group transform hover:scale-105 transition-transform duration-500">
            <Card
              icon={FaLightbulb}
              title="Innovation"
              description="Bringing creative and forward-thinking ideas to life."
            />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 to-orange-800 rounded-lg shadow-lg opacity-50 group-hover:blur-md group-hover:scale-110 transition-all duration-500 z-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
