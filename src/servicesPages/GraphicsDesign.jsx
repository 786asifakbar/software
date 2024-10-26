import { FaBrush, FaCheckCircle } from 'react-icons/fa';

const GraphicsDesign = () => {
  return (
    <div className="bg-white min-h-screen p-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(./back.png)' }} // Add your background image here
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Graphics Design Section */}
        <div className="p-4 bg-white shadow-lg rounded-lg backdrop-blur-md transform transition duration-700 ease-in-out hover:scale-105">
          <h2 className="text-4xl font-bold text-blue-600 flex items-center">
            <FaBrush className="text-5xl mr-3" />
            Graphics Design
          </h2>
          <p className="text-gray-700 my-4 text-lg leading-relaxed">
            At Logic Tech, our graphics design team brings your vision to life with stunning visuals and creative artistry. We specialize in logo design, branding, UI/UX design, and more, using tools like Adobe Photoshop, Illustrator, Figma, and Sketch to deliver eye-catching and impactful designs.
          </p>

          <div className="grid grid-cols-2 gap-4 my-6">
            {[
              { src: 'https://th.bing.com/th/id/OIP.1itKg-PJRR-wJs1XA1uzzAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7', label: 'Photoshop' },
              { src: 'https://th.bing.com/th/id/OIP.S88g4b0j0BQXj6CE_1vfCQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', label: 'Illustrator' },
              { src: 'https://th.bing.com/th/id/OIP.SY-UoZd3UR4zQsCzjwnOsAHaHa?w=144&h=180&c=7&r=0&o=5&pid=1.7', label: 'Figma' },
              { src: 'https://th.bing.com/th/id/OIP.-xUqe3ecbiaxV646Ax6s3gHaHa?w=217&h=218&c=7&r=0&o=5&pid=1.7', label: 'Sketch' },
            ].map((tool, index) => (
              <div key={index} className="transform transition hover:scale-110 hover:rotate-3d duration-500">
                <img src={tool.src} alt={tool.label} className="w-16 h-16 mx-auto" />
                <p className="text-center mt-2">{tool.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            {[
              'Logo Design',
              'UI/UX Design',
              'Branding',
              'Digital Art',
            ].map((service, index) => (
              <div key={index} className="flex items-center transform transition hover:scale-105 duration-500">
                <FaCheckCircle className="text-blue-600 mr-2" />
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative transform transition duration-700 ease-in-out hover:scale-110">
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
