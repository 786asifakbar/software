import { FaCode, FaCheckCircle } from "react-icons/fa";
import { DiReact, DiJavascript1, DiHtml5, DiNodejsSmall, DiCss3, DiMongodb, DiGit, DiJqueryLogo, DiWordpress } from "react-icons/di";

const WebDevelopment = () => {
  return (
    <div 
      className="min-h-screen p-8 flex flex-col items-center bg-white"
      style={{ backgroundImage: "url('./back.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Title Section */}
      <div className="text-center mt-12">
        <h1 className="text-center mb-8 text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">
          <FaCode className="inline-block mr-2" /> Web Development Services
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-700">
          Bringing ideas to life with interactive, responsive, and high-performance web solutions. Specializing in modern technologies to enhance user experience.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto px-4">
        
        {/* Left Side - Image */}
        <div className="relative shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
          <img 
            src="./webdev.png" 
            alt="Web Development" 
            className="object-cover w-full h-64 rounded-lg shadow-lg" 
            onError={(e) => e.target.src = './webdev.png'} // Handle image load error
          />
        </div>
        
        {/* Right Side - Description */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-800/90 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-blue-200 flex items-center">
            <FaCheckCircle className="mr-2" /> Our Expertise
          </h2>
          <p className="mt-4 text-blue-100 leading-relaxed">
            We craft scalable and robust websites tailored to your needs. Utilizing technologies like React, Vue.js, and Next.js, we focus on building platforms that enhance user experience and meet business goals.
          </p>
          <p className="mt-4 text-blue-100 leading-relaxed">
            From e-commerce sites to corporate platforms, our solutions integrate secure backend systems powered by Node.js and Express, ensuring reliable performance.
          </p>
        </div>
      </div>

      {/* Technology Icons Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {/* Existing Technologies */}
        <div className="flex flex-col items-center">
          <DiReact className="text-blue-600 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">React</span>
        </div>
        <div className="flex flex-col items-center">
          <DiJavascript1 className="text-yellow-600 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <DiHtml5 className="text-orange-600 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">HTML5</span>
        </div>

        {/* New Technologies */}
        <div className="flex flex-col items-center">
          <DiCss3 className="text-blue-400 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">CSS3</span>
        </div>
        <div className="flex flex-col items-center">
          <DiNodejsSmall className="text-green-600 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <DiMongodb className="text-green-700 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">MongoDB</span>
        </div>

        {/* Additional Technologies */}
        <div className="flex flex-col items-center">
          <DiGit className="text-orange-600 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <DiJqueryLogo className="text-blue-700 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">jQuery</span>
        </div>
        <div className="flex flex-col items-center">
          <DiWordpress className="text-blue-500 w-16 h-16 hover:scale-110 transition transform duration-300" />
          <span className="text-gray-700">WordPress</span>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;