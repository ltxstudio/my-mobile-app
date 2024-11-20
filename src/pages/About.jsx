import { FaReact, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container mx-auto p-4 lg:px-16">
      {/* About Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Us</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          This application demonstrates a modern mobile-first website using React, TailwindCSS, and Vite.
        </p>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
          We strive to build high-quality, user-friendly applications that make a positive impact in the world. Our focus is on
          creating seamless digital experiences that are fast, responsive, and easy to use.
        </p>
      </motion.div>

      {/* Technology Stack Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
            <FaReact className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">React</h3>
            <p className="text-gray-600 dark:text-gray-300">A JavaScript library for building user interfaces.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
            <FaCss3Alt className="text-5xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">TailwindCSS</h3>
            <p className="text-gray-600 dark:text-gray-300">A utility-first CSS framework for creating modern designs.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
            <FaNodeJs className="text-5xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Node.js</h3>
            <p className="text-gray-600 dark:text-gray-300">JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
            <FaGithub className="text-5xl text-gray-800 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300">A platform for version control and collaborative software development.</p>
          </div>
        </div>
      </motion.div>

      {/* Our Team Section */}
      <motion.div
        className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-8 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-40 transform hover:scale-105 transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full rounded-full mb-4 h-40 object-cover mx-auto"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-300">Frontend Developer</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-40 transform hover:scale-105 transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full rounded-full mb-4 h-40 object-cover mx-auto"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Jane Smith</h3>
            <p className="text-gray-600 dark:text-gray-300">Backend Developer</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-40 transform hover:scale-105 transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full rounded-full mb-4 h-40 object-cover mx-auto"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Mike Lee</h3>
            <p className="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <div className="text-center mb-12">
        <motion.button
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Get In Touch
        </motion.button>
      </div>
    </div>
  );
}

export default About;
