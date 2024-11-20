import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Thanks for your message, ${data.name}!`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block">Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/, message: 'Invalid email' },
              })}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full p-2 border rounded"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
