import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormStatus('');
    
    // Simulate form submission process (e.g., API request)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      reset(); // Reset form fields after submission
      alert(`Thanks for your message, ${data.name}!`);
    }, 1500); // Simulate a delay for the request

    // In a real-world application, you'd send the data to an API here.
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">Contact Us</h1>

        {/* Display success/error message */}
        {formStatus && (
          <div className={`p-4 mb-4 text-center rounded-lg ${formStatus === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
            {formStatus === 'success' ? 'Message sent successfully!' : 'There was an error sending your message.'}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/, message: 'Invalid email format' },
              })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300">Phone Number (Optional)</label>
            <input
              {...register('phone')}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="tel"
              placeholder="e.g., +1234567890"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Your message here..."
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 text-white rounded-lg ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
