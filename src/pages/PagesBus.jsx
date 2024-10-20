import { useEffect, useState } from "react";

const PagesBus = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = document.getElementById('text-section').getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 min-h-screen bg-gradient-to-r from-blue-200 via-teal-100 to-blue-100">
        {/* Left Side - Text Content */}
        <div
          id="text-section"
          className={`md:w-1/2 transition-all duration-1000 ease-in-out transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight hover:text-blue-600 transition-colors duration-300">
            Push Your Business to the Next Level
          </h1>
          <p className="text-lg text-gray-900 mb-8 leading-relaxed">
            Unlock growth with seamless management and dynamic strategies, tailored to drive your enterprise forward. Partner with us to achieve your vision and reach new heights.
          </p>

          <div className="space-y-6 mb-6">
            <div className="flex items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 hover:text-white">Digital Consulting Strategy</h3>
                <p className="text-gray-600 hover:text-white">
                  Our cutting-edge digital consulting strategies drive innovation and success.
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 hover:text-white">24/7 Support</h3>
                <p className="text-gray-600 hover:text-white">
                  We provide around-the-clock assistance to ensure you are always supported.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className={`md:w-1/2 mt-8 md:mt-0 flex justify-center transition-all duration-1000 ease-in-out transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <div className="relative group">
            <img
              src="./key.png" // Use the correct path to your image
              alt="Business Growth"
              className="w-full max-w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            {/* 3D shadow effect */}
            <div className="absolute inset-0 rounded-lg transform group-hover:rotate-6 bg-gradient-to-br from-blue-500 to-teal-400 opacity-40 blur-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesBus;