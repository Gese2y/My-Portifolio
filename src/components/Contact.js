import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form Ref:', form.current);

    emailjs
      .sendForm(
        'service_nm3xrvt',
        'template_rusrfej',
        form.current,
        '4gExwW6lebeQVRlJU' // Public Key, placed outside of the object
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 justify-start items-center'
          >
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work<br /> together!
            </h2>
          </motion.div>
          {/* Form */}
          <motion.form
            ref={form} // Attach the ref to the form
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your Name'
              type='text'
              name='user_name'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your Email'
              type='email'
              name='user_email'
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              name='message'
              required
            ></textarea>
            <button type='submit' className='btn btn-lg'>
              Send message
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
    
  );
};

export default Contact;
