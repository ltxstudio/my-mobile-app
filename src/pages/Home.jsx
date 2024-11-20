import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaPaintBrush, FaMobileAlt, FaCog, FaCloud, FaStar, FaPhone, FaDollarSign, FaApple, FaGooglePlay } from 'react-icons/fa';

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

      {/* Features Section */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500 dark:text-blue-300">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Testimonial Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <FaStar className="text-yellow-500 text-3xl mb-2" />
                <p className="text-gray-600 dark:text-gray-300">
                  "This app has transformed the way I work, it's super easy to use and efficient!"
                </p>
                <p className="font-bold text-blue-600 dark:text-blue-300 mt-2">John Doe</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* App Screenshots Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">Screenshots</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.img
            src="/screenshots/screen1.png"
            alt="App Screenshot 1"
            className="w-full sm:w-80 lg:w-96 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="/screenshots/screen2.png"
            alt="App Screenshot 2"
            className="w-full sm:w-80 lg:w-96 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Basic', price: '$19/month', icon: <FaDollarSign className="text-green-500" /> },
            { title: 'Pro', price: '$39/month', icon: <FaDollarSign className="text-blue-500" /> },
            { title: 'Enterprise', price: '$99/month', icon: <FaDollarSign className="text-red-500" /> },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl">{plan.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300">{plan.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.price}</p>
              <motion.button
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                whileHover={{ scale: 1.1 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* App Download Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">Download the App</h2>
        <div className="flex justify-center gap-6">
          <motion.button
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaApple className="mr-2 text-xl" /> App Store
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaGooglePlay className="mr-2 text-xl" /> Google Play
          </motion.button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-xl mx-auto">
          {[
            { question: 'How do I download the app?', answer: 'You can download it from the App Store or Google Play.' },
            { question: 'Is the app free to use?', answer: 'The app offers both free and paid versions.' },
            { question: 'What devices is the app compatible with?', answer: 'The app is available on iOS and Android.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-600 dark:text-blue-300">{item.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">Contact Us</h2>
        <form className="space-y-4 max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded mb-4"
            />
          </div>
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Home;
