import { FaCode, FaCheckCircle } from "react-icons/fa";

const WebDevelopment = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed p-8 flex flex-col items-center text-white"
      style={{ backgroundImage: "url('./back.png')" }}
    >
      {/* Title Section */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-blue-500 drop-shadow-lg shadow-blue-900">
          <FaCode className="inline-block mr-2" /> Web Development Services
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-500">
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
        <div className="bg-blue-900/70 p-6 rounded-lg shadow-lg hover:bg-blue-800/90 transition duration-300 ease-in-out">
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
        <img 
          src="https://th.bing.com/th?id=OIP.Tpo0do4FnIyuhxRRUnFWjwHaHA&w=256&h=243&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2" 
          alt="React Logo" 
          className="w-16 h-16 hover:scale-110 transition transform duration-300" 
        />
        <img 
          src="https://image.shutterstock.com/image-vector/javascript-programming-language-icon-600w-1231886032.jpg" 
          alt="JavaScript Logo" 
          className="w-16 h-16 hover:scale-110 transition transform duration-300" 
        />
        <img 
          src="https://image.shutterstock.com/image-vector/html5-icon-600w-1259023012.jpg" 
          alt="HTML5 Logo" 
          className="w-16 h-16 hover:scale-110 transition transform duration-300" 
        />
      </div>
    </div>
  );
};

export default WebDevelopment;