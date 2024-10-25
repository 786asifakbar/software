
import { FaCode } from 'react-icons/fa';
import { DiDjango, DiNodejsSmall, DiReact } from 'react-icons/di';

const WebAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-8 flex justify-center items-center bg-[url('./banner.png')]">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 transform hover:scale-105 transition-transform duration-500 ease-in-out">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center text-4xl font-bold text-blue-600 mb-6">
            <FaCode className="mr-3 text-blue-500" />
            Web And Native App Development
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Experience the artistry of web and native app development at Logic Tech, where creativity meets functionality. Our skilled team harnesses the power of Django, Node.js, Express, React, Next.js, Vue.js, and MongoDB to craft immersive digital solutions. From dynamic web applications to seamless native experiences, we transform ideas into reality.
          </p>

          {/* Technology Icons */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <DiDjango className="text-6xl text-blue-600 transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">Django</span>
            </div>
            <div className="flex flex-col items-center">
              <DiNodejsSmall className="text-6xl text-green-600 transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <DiReact className="text-6xl text-blue-500 transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">React</span>
            </div>
          </div>
        </div>

        {/* Right Side - Additional Illustration */}
        <div className="relative group">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg overflow-hidden shadow-lg transform hover:rotate-3 hover:scale-105 transition-all duration-700 ease-in-out">
            <img
              src="./development.png"
              alt="App development illustration"
              className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;