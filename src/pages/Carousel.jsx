import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaAws, FaCss3Alt, FaHtml5, FaJsSquare, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Databases', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl font-bold text-center text-blue-700 mb-8">
          Technologies
        </h2>
        <div className="relative overflow-hidden">
          {/* Carousel Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="min-w-full flex-shrink-0 p-4">
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-6xl mb-4">{skill.icon}</div>
                  <h3 className="text-2xl font-semibold">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;