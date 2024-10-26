const About = () => {
  return (
    <section
      className="py-16 text-gray-800"
      style={{
        backgroundImage: 'url("./back.png")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-5 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {/* Section Title */}
        <h2 className="
                       text-center mb-8 text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg
                       
                       ">
          About Us
        </h2>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/team.png" // Replace with the actual image path
              alt="Team Working"
              className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to <span className="font-bold text-blue-600">NexOusTech</span>, where innovation meets excellence. Our passionate team of developers and designers is dedicated to delivering custom web and mobile applications tailored to your business needs. We strive to create scalable and user-friendly solutions to help you achieve success.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're a startup or an established business, our client-first approach ensures that every project is handled with transparency, collaboration, and efficiency. We are driven by our passion for technology and a desire to help our clients reach their goals.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:rotate-3d transition-transform duration-500">
            <img src="/full.png" alt="Team Member 1" className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-white shadow-md" />
            <h3 className="text-xl font-semibold mb-2 text-white">Asif Akbar</h3>
            <p className="text-gray-100">Expert in Full-Stack Development</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:rotate-3d transition-transform duration-500">
            <img src="/ui.png" alt="Team Member 2" className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-white shadow-md" />
            <h3 className="text-xl font-semibold mb-2 text-white">Muzammil Khan </h3>
            <p className="text-gray-100">UX/UI Designer & Frontend Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:rotate-3d transition-transform duration-500">
            <img src="/project.png" alt="Team Member 3" className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-white shadow-md" />
            <h3 className="text-xl font-semibold mb-2 text-white">Bilal Amhed</h3>
            <p className="text-gray-100">Project Manager & Strategist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;