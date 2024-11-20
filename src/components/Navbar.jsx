import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-700 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center space-x-1">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1">
            <FaEnvelope />
            <span>Contact</span>
          </Link>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-700 rounded-full hover:scale-105 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
