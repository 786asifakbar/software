import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-t from-blue-500 to-blue-800 p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Information in a line */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.003 5.884A2 2 0 013.73 4h12.54a2 2 0 011.727 1.884L18 14.5a2 2 0 01-2 2h-1.414l-1.829 1.83A2 2 0 0110.586 19H9.414a2 2 0 01-1.414-.586L6.17 16.5H4a2 2 0 01-2-2l.003-8.616zM3 6.07L3.001 14.5a1 1 0 001 1h3.758l2.121 2.122a1 1 0 001.414 0L13.758 15.5H16a1 1 0 001-1L17 6.07H3z"
                clipRule="evenodd"
              />
            </svg>
            Phone: +92 123 456 789
          </span>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0l6 4 6-4H4z" />
            </svg>
            Email: contact@yourngo.org
          </span>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-12a4 4 0 100 8 4 4 0 000-8z"
                clipRule="evenodd"
              />
            </svg>
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