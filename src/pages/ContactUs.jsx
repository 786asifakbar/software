import { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    // Initialize any effects here if needed
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-8 shadow-2xl transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-center mb-8 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">Contact Us</h1>
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                We are here to help. Feel free to reach out to us.
              </p>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-blue-500 mr-2">📞</span>
                  <span className="text-gray-700">+123 456 7890</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-blue-500 mr-2">📧</span>
                  <span className="text-gray-700">info@example.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">📍</span>
                  <span className="text-gray-700">
                    123 Example Street, City, Country
                  </span>
                </div>
              </div>
              <div className="h-64 w-full rounded-lg overflow-hidden mt-4">
                <iframe
                  title="map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890!2d-122.4194154846814!3d37.77492927975969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a2d5e9f%3A0xa2d5e9f123456789!2sExample+Address!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="bg-gradient-to-r from-blue-500 to-teal-400 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;