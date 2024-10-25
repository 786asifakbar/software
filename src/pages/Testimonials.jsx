import React, { useState, useEffect } from 'react';

const testimonials = [
  { id: 1, name: "Alice Johnson", title: "CEO, Tech Innovations", image: "https://via.placeholder.com/100", description: "Fantastic service! Our project was handled professionally and exceeded expectations." },
  { id: 2, name: "David Smith", title: "Marketing Head, Soft Solutions", image: "https://via.placeholder.com/100", description: "An absolute pleasure to work with! The team's creativity is unmatched." },
  { id: 3, name: "Sophia Brown", title: "Founder, Green Earth", image: "https://via.placeholder.com/100", description: "High-quality service and very attentive to our needs. Highly recommend." },
  { id: 4, name: "John Miller", title: "CTO, FinTech Solutions", image: "https://via.placeholder.com/100", description: "Professional, efficient, and truly innovative. We were impressed by the outcome." },
  { id: 5, name: "Emma Wilson", title: "Director, HealthFirst", image: "https://via.placeholder.com/100", description: "The team was extremely cooperative and delivered exactly what we needed." },
  { id: 6, name: "Liam Anderson", title: "Owner, Boutique Agency", image: "https://via.placeholder.com/100", description: "Their attention to detail and dedication are simply top-notch!" },
  { id: 7, name: "Olivia Lee", title: "Head of Operations, SolarTech", image: "https://via.placeholder.com/100", description: "Great experience from start to finish. Will definitely work with them again." },
  { id: 8, name: "James Taylor", title: "Project Manager, EduConnect", image: "https://via.placeholder.com/100", description: "The team delivered outstanding results that exceeded our expectations." },
  { id: 9, name: "Ella Carter", title: "Manager, UrbanRealty", image: "https://via.placeholder.com/100", description: "Professional, innovative, and attentive. Highly recommended." },
  { id: 10, name: "Lucas Johnson", title: "CEO, BlueTech Labs", image: "https://via.placeholder.com/100", description: "A truly exceptional experience. They were responsive and creative." },
  { id: 11, name: "Grace Martin", title: "Founder, Eco Ventures", image: "https://via.placeholder.com/100", description: "The best agency we've worked with. True experts in their field." },
  { id: 12, name: "Henry Davis", title: "Director, CareAid", image: "https://via.placeholder.com/100", description: "Superb service, excellent communication, and flawless execution." },
  { id: 13, name: "Mia Thompson", title: "CFO, BuildRight", image: "https://via.placeholder.com/100", description: "They delivered outstanding results with great attention to detail." },
  { id: 14, name: "William Moore", title: "COO, MedPlus", image: "https://via.placeholder.com/100", description: "Timely, professional, and highly effective in meeting our needs." },
  { id: 15, name: "Ava Scott", title: "VP, Ocean Ventures", image: "https://via.placeholder.com/100", description: "Exceeded our expectations and brought our ideas to life seamlessly." },
  { id: 16, name: "Sebastian Harris", title: "Owner, Artisan Goods", image: "https://via.placeholder.com/100", description: "Quality service with outstanding results, highly impressed." },
  { id: 17, name: "Ella Walker", title: "CEO, TechPros", image: "https://via.placeholder.com/100", description: "Professional, responsive, and skilled. Couldn't ask for more." },
  { id: 18, name: "Daniel Perez", title: "Founder, Home Haven", image: "https://via.placeholder.com/100", description: "Fantastic collaboration, really brought our vision to life!" },
  { id: 19, name: "Zoe Turner", title: "Director, FitLife", image: "https://via.placeholder.com/100", description: "They were amazing from start to finish. We loved the final result." },
  { id: 20, name: "Ethan Evans", title: "Product Lead, BrightLight", image: "https://via.placeholder.com/100", description: "Wonderful team, innovative approach, and smooth process." },
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
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Clients Say</h1>
      <p className="text-gray-600 text-center mb-12">Here's what our valued clients have to say about our services.</p>

      <div className="relative flex justify-center items-center">
        {/* Testimonial Card */}
        <div className="relative flex items-center justify-center w-11/12 md:w-3/5 lg:w-2/5 p-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
             style={{
                perspective: '1000px',
                transform: `perspective(1000px) rotateY(${current * -5}deg)`
              }}>
          <div
            className="w-full h-full text-center text-white"
            style={{
              transform: `rotateY(0deg)`,
              visibility: current ? 'visible' : 'hidden'
            }}
          >
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

export default Testimonials;