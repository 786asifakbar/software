

const WebAppDevelopment = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-8 flex flex-col items-center" style={{ backgroundImage: 'url(./banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
        {/* Left Side */}
        <div className="opacity-0 animate-fadeInLeft transform transition-all duration-700 delay-150">
          <h4 className="text-3xl font-bold text-blue-600 flex items-center mb-4">
            <span className="mr-2">💻</span>
            Web And Native App Development
          </h4>
          <p className="text-gray-700 my-4">
            Experience the artistry of web and native app development at Logic Tech, where creativity meets functionality. Our skilled team harnesses the power of Django, Node.js, Express, React, Next.js, Vue.js, and MongoDB to craft immersive digital solutions. From dynamic web applications to seamless native experiences, we transform ideas into reality.
          </p>

          {/* Icons representing technologies */}
          <div className="flex space-x-4 my-4">
            <div className="transform transition-transform duration-300 hover:scale-110 hover:rotate-3D">
              <img
                src="https://th.bing.com/th/id/OIP._NzcNLPoXtlRoFJPyk7IXgHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Django"
                className="w-12"
              />
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110 hover:rotate-3D">
              <img
                src="https://th.bing.com/th/id/OIP.TPhsX2qJo5qcsy2I3An6qAHaFj?w=251&h=188&c=7&r=0&o=5&pid=1.7"
                alt="Node.js"
                className="w-12"
              />
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110 hover:rotate-3D">
              <img
                src="https://th.bing.com/th/id/OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo?w=219&h=196&c=7&r=0&o=5&pid=1.7"
                alt="React"
                className="w-12"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="opacity-0 animate-fadeInRight transform transition-all duration-700 delay-150">
          <div className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3D">
            <img
              src="./development.png" // Adjust your image source
              alt="Web App Development"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h4 className="text-3xl font-bold text-blue-600 mt-12">Our Services</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
          <h5 className="text-xl font-semibold text-blue-600 mb-2">Custom Web Development</h5>
          <p className="text-gray-700">Tailored web solutions that meet your business needs and enhance user experience.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
          <h5 className="text-xl font-semibold text-blue-600 mb-2">E-Commerce Solutions</h5>
          <p className="text-gray-700">Comprehensive e-commerce platforms to drive your online sales and growth.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
          <h5 className="text-xl font-semibold text-blue-600 mb-2">Mobile App Development</h5>
          <p className="text-gray-700">Creating intuitive mobile applications that engage users on the go.</p>
        </div>
      </div>

      {/* Inline CSS for 3D rotation effect */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.5s forwards;
        }

        /* 3D rotation on hover */
        .hover\\:rotate-3D:hover {
          transform: perspective(600px) rotateY(15deg);
        }
      `}</style>
    </div>
  );
};

export default WebAppDevelopment;
