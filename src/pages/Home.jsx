import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <motion.div
        className="text-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl text-blue-500 dark:text-blue-300 mb-2">Welcome to My App</h1>
        <p className="text-gray-700 dark:text-gray-300">
          A modern, responsive mobile-first website.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-300">Feature {i + 1}</h2>
            <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
