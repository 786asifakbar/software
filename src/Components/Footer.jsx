import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 px-4 sm:px-8 md:px-16 lg:px-32 text-justify shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-8">
        {/* Subscribe Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
          <h3 className="font-bold mb-4">Subscribe Our Newsletter</h3>
          <p className="mb-4">
            Stay updated with the latest news and exclusive offers. Join our newsletter for valuable insights and exciting updates in the world of technology and innovation.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white text-black w-full rounded-xl p-2"
            />
            <button className="ml-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out">
              Send
            </button>
          </div>
        </div>

        {/* Quick NavLinks Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
          <h3 className="font-bold mb-4">Quick NavLinks</h3>
          <ul>
            <li className="mb-2">
              <NavLink to="/services" className="hover:underline">Services</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/contact-us" className="hover:underline">Contact Us</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/career" className="hover:underline">Career</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/privacy-policy" className="hover:underline">Privacy Policy</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/terms-conditions" className="hover:underline">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
          <h3 className="font-bold mb-4">Address</h3>
          <ul>
            <li className="mb-2 flex items-center">
              <span className="mr-2">📍</span> PECHS Block 2, Karachi, Pakistan
            </li>
            <li className="mb-2 flex items-center">
              <span className="mr-2">📞</span> +012 345 67890
            </li>
            <li className="mb-4 flex items-center">
              <span className="mr-2">📧</span> info@example.com
            </li>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-600 transition duration-300"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-blue-400 transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-pink-500 transition duration-300"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-blue-800 transition duration-300"><FaLinkedinIn /></a>
            </div>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-sm">
          © <span className="font-bold">NexOusTech</span>, All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/cookies" className="hover:underline">Cookies</NavLink>
          <NavLink to="/help" className="hover:underline">Help</NavLink>
          <NavLink to="/faqs" className="hover:underline">FAQs</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;