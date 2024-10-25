import React, { useState, useEffect } from 'react';

// Sample Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "CEO, Tech Innovations",
    image: "https://via.placeholder.com/100",
    description: "Fantastic service! Our project was handled professionally and exceeded expectations.",
  },
  {
    id: 2,
    name: "David Smith",
    title: "Marketing Head, Soft Solutions",
    image: "https://via.placeholder.com/100",
    description: "An absolute pleasure to work with! The team's creativity is unmatched.",
  },
  // Add more testimonials as needed...
];

// Project Functions Component
const ProjectFunctions = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Project Functions</h2>
      <p className="text-gray-600 mb-8 text-center">We offer a wide range of project functions to ensure your success.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Function 1</h3>
          <p className="text-gray-700">Description of function 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Function 2</h3>
          <p className="text-gray-700">Description of function 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Function 3</h3>
          <p className="text-gray-700">Description of function 3.</p>
        </div>
        {/* Add more functions as needed */}
      </div>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What Our Clients Say</h2>
      <div className="relative flex justify-center items-center">
        <div
          className="relative flex items-center justify-center w-full md:w-2/3 p-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
        >
          <div className="w-full h-full text-center text-white">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-2 border-white mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
            <p className="text-sm italic">{testimonials[current].title}</p>
            <p className="mt-4">{testimonials[current].description}</p>
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-3 rounded-full shadow-md focus:outline-none hover:bg-gray-200 transition"
        >
          &lt;
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-3 rounded-full shadow-md focus:outline-none hover:bg-gray-200 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

// Project Completion Component
const ProjectCompletion = () => {
  return (
    <div className="py-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Project Completion Rate</h2>
      <div className="flex justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">95% Completion Rate</h3>
          <p className="text-gray-700">We are proud to have a high completion rate, ensuring that your projects are delivered on time and to your satisfaction.</p>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const ProjectPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-12">
        <h1 className="text-5xl font-bold text-blue-900 text-center">Our Projects</h1>
        <p className="text-gray-600 text-center mt-4">Delivering excellence in every project.</p>
      </header>
      <ProjectFunctions />
      <ProjectCompletion />
      <Testimonials />
    </div>
  );
};

export default ProjectPage;
