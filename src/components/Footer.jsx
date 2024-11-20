import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-700 text-white py-8 px-4 text-center">
      {/* Footer Content Container */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Copyright & Text */}
        <div className="mb-4 sm:mb-0">
          <p>&copy; 2024 My Mobile App. All rights reserved.</p>
          <p className="text-sm">Follow us on social media for updates.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
