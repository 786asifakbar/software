import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-slate-100 text-black shadow-2xl shadow-gray-400">
        <nav className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <NavLink to="/">
              <span className="text-3xl">N</span>EX
              <span className="text-3xl">O</span>US
              <span className="text-3xl">T</span>ECH
            </NavLink>
          </div>

          {/* Menu Button for Mobile */}
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
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
              className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}
            >
              <li className="hover:text-blue-700 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-blue-700 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
                <NavLink to="/WhyUs">Why Us</NavLink>
              </li>
              <li className="hover:text-blue-700 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
                <NavLink to="/ServicesPage">Services</NavLink>
              </li>
              <li className="hover:text-blue-700 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
                <NavLink to="/overview">Overview</NavLink>
              </li>
              <li className="hover:text-blue-700 hover:border-b-2 hover:border-blue-700 font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105">
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;