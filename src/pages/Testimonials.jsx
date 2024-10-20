import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This is a wonderful service that has helped our company grow immensely.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/100",
    description: "The team was professional and delivered the project on time. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://via.placeholder.com/100",
    description: "Excellent service with great attention to detail. Very satisfied.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://via.placeholder.com/100",
    description: "They went above and beyond our expectations. Outstanding work!",
  },
  {
    id: 5,
    name: "Chris Brown",
    image: "https://via.placeholder.com/100",
    description: "Very reliable and easy to work with. Will definitely use their services again.",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    image: "https://via.placeholder.com/100",
    description: "Great experience from start to finish. The results speak for themselves.",
  },
  {
    id: 7,
    name: "David Lee",
    image: "https://via.placeholder.com/100",
    description: "Professional, efficient, and results-driven. Highly recommended!",
  },
  {
    id: 8,
    name: "Laura Martinez",
    image: "https://via.placeholder.com/100",
    description: "The team was communicative and delivered quality work. Very impressed!",
  },
  {
    id: 9,
    name: "James Taylor",
    image: "https://via.placeholder.com/100",
    description: "Our experience was great. The project was handled with professionalism.",
  },
  {
    id: 10,
    name: "Linda White",
    image: "https://via.placeholder.com/100",
    description: "They provided excellent service and were a pleasure to work with.",
  },
];

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
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center">
        What Our Clients Said
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Discover what our clients have to say. Real experiences, real satisfaction.
      </p>

      {/* Testimonial Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-xl mx-2 my-4"
              style={{
                perspective: '1000px', 
                minWidth: '300px', 
                transform: current === testimonial.id - 1 ? 'rotateY(0deg)' : 'rotateY(-10deg)', // 3D effect
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-300 shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-blue-600 transition"
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;