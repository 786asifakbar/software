import { FaCode } from 'react-icons/fa';
import { DiDjango, DiNodejsSmall, DiReact, DiAngularSimple, DiPhp, DiHtml5, DiCss3, DiMongodb, DiPostgresql, DiFlutter } from 'react-icons/di';

const WebAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-8 flex justify-center items-center bg-[url('./banner.png')]">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 transform hover:scale-105 transition-transform duration-500 ease-in-out">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center text-center mb-8 text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">
            <FaCode className="mr-3 text-blue-500" />
            Web And Native App Development
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Experience the artistry of web and native app development at Logic Tech, where creativity meets functionality. Our skilled team harnesses the power of Django, Node.js, Express, React, Next.js, Vue.js, MongoDB, Angular, PHP, and HTML5 to craft immersive digital solutions. From dynamic web applications to seamless native experiences, we transform ideas into reality.
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
            <div className="flex flex-col items-center">
              <DiAngularSimple className="text-6xl text-red-600 transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">Angular</span>
            </div>
            <div className="flex flex-col items-center">
              <DiPhp className="text-6xl text-blue-700 transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <DiHtml5 className="text-6xl text-orange-600 transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">HTML5</span>
            </div>
            {/* New Technologies */}
            <div className="flex flex-col items-center">
              <DiCss3 className="text-blue-400 text-6xl transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <DiMongodb className="text-green-700 text-6xl transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <DiPostgresql className="text-blue-600 text-6xl transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
              <DiFlutter className="text-blue-400 text-6xl transform hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-600 mt-2">Flutter</span>
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