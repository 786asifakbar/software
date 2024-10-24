import React from 'react';

const GraphicsDesign = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Graphics Design Section */}
        <div
          className="p-4 transform transition duration-700 ease-in-out hover:translate-x-4 hover:opacity-90 hover:rotate-y-6 perspective-1000"
        >
          <h2 className="text-4xl font-bold text-blue-600 flex items-center">
            <span className="material-icons text-5xl mr-3">brush</span>
            Graphics Design
          </h2>
          <p className="text-gray-700 my-4 text-lg leading-relaxed">
            At Logic Tech, our graphics design team brings your vision to life with stunning visuals and creative artistry. We specialize in logo design, branding, UI/UX design, and more, using tools like Adobe Photoshop, Illustrator, Figma, and Sketch to deliver eye-catching and impactful designs.
          </p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="transform transition hover:scale-110 hover:rotate-3d hover:rotate-y-12 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.1itKg-PJRR-wJs1XA1uzzAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Photoshop"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2">Photoshop</p>
            </div>
            <div className="transform transition hover:scale-110 hover:rotate-3d hover:rotate-y-12 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.S88g4b0j0BQXj6CE_1vfCQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Illustrator"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2">Illustrator</p>
            </div>
            <div className="transform transition hover:scale-110 hover:rotate-3d hover:rotate-y-12 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.SY-UoZd3UR4zQsCzjwnOsAHaHa?w=144&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Figma"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2">Figma</p>
            </div>
            <div className="transform transition hover:scale-110 hover:rotate-3d hover:rotate-y-12 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.-xUqe3ecbiaxV646Ax6s3gHaHa?w=217&h=218&c=7&r=0&o=5&pid=1.7"
                alt="Sketch"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2">Sketch</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center transform transition hover:scale-105 hover:rotate-6 duration-500">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              Logo Design
            </div>
            <div className="flex items-center transform transition hover:scale-105 hover:rotate-6 duration-500">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              UI/UX Design
            </div>
            <div className="flex items-center transform transition hover:scale-105 hover:rotate-6 duration-500">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              Branding
            </div>
            <div className="flex items-center transform transition hover:scale-105 hover:rotate-6 duration-500">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              Digital Art
            </div>
          </div>
        </div>

        <div
          className="relative transform transition duration-700 ease-in-out hover:scale-110 hover:rotate-y-12 perspective-1000"
        >
          <img
            src="./graphics.png"
            alt="Graphics Design"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesign;