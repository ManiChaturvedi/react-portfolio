import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_9tpdh39',
      'template_t27acie',
      form.current,
      'ZPPVhqmWIjc0tcD_2'
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
      });
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>
        Get in Touch
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='mx-auto max-w-md space-y-4 p-4'>
        
        <div>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-neutral-800 bg-transparent p-3 outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg border border-neutral-800 bg-transparent p-3 outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full rounded-lg border border-neutral-800 bg-transparent p-3 outline-none focus:border-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-purple-500 p-3 text-white transition-colors hover:bg-purple-600 disabled:bg-neutral-500"
          disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-center text-green-500">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-500">Failed to send message. Please try again.</p>
        )}
      </motion.form>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 text-neutral-400 hover:text-purple-500"
        >
          <FaPhone className="text-2xl" />
          <span>+91 9653084514</span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 text-neutral-400 hover:text-purple-500"
        >
          <FaEnvelope className="text-2xl" />
          <span>manichaturvedi17@gmail.com</span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-3 text-neutral-400 hover:text-purple-500"
        >
          <FaMapMarkerAlt className="text-2xl" />
          <span>Manit, Bhopal, India</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
