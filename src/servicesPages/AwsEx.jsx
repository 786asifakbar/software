import { FaServer, FaDatabase, FaCloud, FaCubes } from 'react-icons/fa'; // Import icons

const AwsEx = () => {
  return (
    <div 
      className="min-h-screen py-20 flex items-center justify-center"
      style={{
        backgroundImage: 'url("/back.png")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-blue-50 bg-opacity-75 rounded-lg p-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - 3D Rotating Image */}
            <div className="flex justify-center md:justify-end perspective">
              <div className="relative group transform transition duration-1000 hover:rotate-y-12 hover:rotate-x-6 hover:scale-105">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl transform group-hover:rotate-x-0 group-hover:rotate-y-0 transition-all duration-1000 ease-in-out">
                  <img
                    src="/aws.png"
                    alt="AWS"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-left md:text-left space-y-6">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 tracking-wide">
                AWS Solutions
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                At Logic Tech, we offer comprehensive AWS solutions to help your business leverage the power of the cloud. Our AWS services include cloud infrastructure setup, scalable storage solutions, and high-performance computing resources tailored to your needs.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {/* 3D Icon Blocks */}
                <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                  <div className="w-16 h-16 mb-2 text-blue-600">
                    <FaServer size={64} /> {/* EC2 Icon */}
                  </div>
                  <span className="text-blue-600 font-semibold">EC2 Instances</span>
                </div>

                <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                  <div className="w-16 h-16 mb-2 text-blue-600">
                    <FaCloud size={64} /> {/* S3 Icon */}
                  </div>
                  <span className="text-blue-600 font-semibold">S3 Storage</span>
                </div>

                <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                  <div className="w-16 h-16 mb-2 text-blue-600">
                    <FaCubes size={64} /> {/* Lambda Icon */}
                  </div>
                  <span className="text-blue-600 font-semibold">Lambda Functions</span>
                </div>

                <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                  <div className="w-16 h-16 mb-2 text-blue-600">
                    <FaDatabase size={64} /> {/* RDS Icon */}
                  </div>
                  <span className="text-blue-600 font-semibold">RDS Databases</span>
                </div>
              </div>

              {/* Service Features */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-lg text-gray-700">
                <p className="flex items-center transform hover:scale-105 transition duration-500">
                  <span className="text-blue-600 mr-2">✓</span> Scalable Solutions
                </p>
                <p className="flex items-center transform hover:scale-105 transition duration-500">
                  <span className="text-blue-600 mr-2">✓</span> Cost Optimization
                </p>
                <p className="flex items-center transform hover:scale-105 transition duration-500">
                  <span className="text-blue-600 mr-2">✓</span> EC2 Instances
                </p>
                <p className="flex items-center transform hover:scale-105 transition duration-500">
                  <span className="text-blue-600 mr-2">✓</span> RDS Databases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsEx;