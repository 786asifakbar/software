import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 shadow-lg">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/fav.png" alt="Logo" className="h-32 w-32 mr-2 rounded-full" />
          <div className="text-3xl font-bold text-white">
            <NavLink to="/"> {/* Add logo text if needed */} </NavLink>
          </div>
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6 md:p-0 md:bg-transparent absolute md:relative top-16 right-0 w-full md:w-auto transition-all duration-300 ease-in-out transform ${
            isOpen ? 'block' : 'hidden'
          } md:block z-10 shadow-lg md:shadow-none rounded-lg md:rounded-none`}
        >
          <li className="hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
          </li>
          <li className="hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/About" onClick={handleLinkClick}>Why Us</NavLink>
          </li>
          <li className="hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/ServicesPage" onClick={handleLinkClick}>Services</NavLink>
          </li>
          <li className="hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/overview" onClick={handleLinkClick}>Overview</NavLink>
          </li>
          <li className="hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/testimonials" onClick={handleLinkClick}>Testimonials</NavLink>
          </li>
          <li>
            <NavLink
              to="/ContactUs"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleLinkClick} // Close the menu on Contact Us click as well
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
