import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-t from-blue-500 to-blue-800 p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <span className="flex items-center">
            <FaPhoneAlt className="w-5 h-5 mr-2" />
            Phone: +92 123 456 789
          </span>
          <span className="flex items-center">
            <FaEnvelope className="w-5 h-5 mr-2" />
            Email: contact@yourngo.org
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="w-5 h-5 mr-2" />
            Address: 1234 Street, Karachi, Pakistan
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 p-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 p-2 rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;