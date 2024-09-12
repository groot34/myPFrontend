// 

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validation
    if (!name || !email || !message) {   
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // const url=import.meta.env.VITE_BACKEND;
     const url = "https://my-pf-backend.vercel.app";
      // Make the request to your Express backend to send the email using Axios
      const response = await axios.post(`/api/send-email`, {
        name: formData.name,  
        email: formData.email,
        message: formData.message,
       } , {    
        headers: {
          'Content-Type': 'application/json',
        },
      });

    
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(response.data.message || "Failed to send message");
        console.error(response.data.error);
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error('Error sending email:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 p-4 md:p-8 bg-gray-700 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-white"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-white"
              placeholder="Your Message"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
   
export default Contact;