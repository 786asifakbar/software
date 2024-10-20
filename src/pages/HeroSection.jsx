const IsometricDesign = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center pt-10 bg-cover bg-center"
           style={{
             backgroundImage: "url('./banner.png')", // Replace with the relative path to your image
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}>
        <h1 className="text-7xl font-bold mb-8 text-center drop-shadow-lg">
          <span className="text-blue-600">Welcome to </span>
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Block for NEX */}
          <div className="flex flex-col items-center relative">
            <div className="bg-blue-500 w-40 h-40 transform rotate-12 skew-y-12 shadow-lg rounded-lg flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <span className="text-white text-6xl font-bold">NEX</span>
            </div>
          </div>
  
          {/* Block for OUS */}
          <div className="flex flex-col items-center relative">
            <div className="bg-green-500 w-40 h-40 transform rotate-12 shadow-lg rounded-lg flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <span className="text-white text-6xl font-bold">OUS</span>
            </div>
          </div>
  
          {/* Block for TECH */}
          <div className="flex flex-col items-center relative">
            <div className="bg-purple-500 w-40 h-40 transform rotate-12 skew-x-12 shadow-lg rounded-lg flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <span className="text-white text-6xl font-bold">TECH</span>
            </div>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-gray-800 drop-shadow-md">
            Join us to explore the world of technology!
          </p>
          <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default IsometricDesign;  