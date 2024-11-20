import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaMoon, FaSun, FaBars, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // to track the current route

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the mobile menu after navigating
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-purple-600'} text-white shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white">My</span><span className="text-yellow-400">App</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`flex items-center space-x-1 hover:text-yellow-300 transition ${location.pathname === '/' ? 'text-yellow-300' : ''}`}
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center space-x-1 hover:text-yellow-300 transition ${location.pathname === '/about' ? 'text-yellow-300' : ''}`}
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className={`flex items-center space-x-1 hover:text-yellow-300 transition ${location.pathname === '/contact' ? 'text-yellow-300' : ''}`}
          >
            <FaEnvelope />
            <span>Contact</span>
          </Link>

          {/* Dropdown for User */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaUserCircle />
              <span>Profile</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700 transition">View Profile</Link>
                <Link to="/settings" className="block py-2 px-4 hover:bg-gray-700 transition">Settings</Link>
              </div>
            )}
          </div>
        </div>

        {/* Dark Mode / Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-700 rounded-full hover:scale-110 transition transform"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <Link
            to="/"
            className={`block px-6 py-2 hover:bg-gray-700 transition ${location.pathname === '/' ? 'text-yellow-300' : ''}`}
            onClick={() => handleScrollToSection('home')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-6 py-2 hover:bg-gray-700 transition ${location.pathname === '/about' ? 'text-yellow-300' : ''}`}
            onClick={() => handleScrollToSection('about')}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block px-6 py-2 hover:bg-gray-700 transition ${location.pathname === '/contact' ? 'text-yellow-300' : ''}`}
            onClick={() => handleScrollToSection('contact')}
          >
            Contact
          </Link>

          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full text-center py-2 mt-4 bg-gray-700 rounded-full"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
