import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaPaintBrush, FaMobileAlt, FaCog, FaCloud } from 'react-icons/fa';

function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <motion.div
        className="text-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl text-blue-500 dark:text-blue-300 mb-2">Welcome to My App</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A modern, responsive mobile-first website with amazing features.
        </p>
        <motion.button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Featured Section */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500 dark:text-blue-300">
        Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature Cards */}
        {[
          { title: 'Rocket Launch', icon: <FaRocket className="text-blue-600 dark:text-blue-300" /> },
          { title: 'Code Efficiently', icon: <FaCode className="text-green-600 dark:text-green-300" /> },
          { title: 'Design Your Ideas', icon: <FaPaintBrush className="text-purple-600 dark:text-purple-300" /> },
          { title: 'Mobile Responsive', icon: <FaMobileAlt className="text-yellow-600 dark:text-yellow-300" /> },
          { title: 'Easy Configuration', icon: <FaCog className="text-red-600 dark:text-red-300" /> },
          { title: 'Cloud Integration', icon: <FaCloud className="text-gray-600 dark:text-gray-300" /> },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              A brief description of the feature to highlight its importance.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <motion.h3
          className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ready to take your project to the next level?
        </motion.h3>
        <motion.button
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Join Now
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
