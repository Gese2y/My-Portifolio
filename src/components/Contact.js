import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return <div 
  className='py-16 lg:section'
   id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
      <motion.div variants={fadeIn('right',0.5)}
    initial='hidden'
  whileInView={'show'} className='flex-1 justify-start items-center'>
        <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'> Get in touch</h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work<br /> together!</h2>
      </motion.div>
      {/* form */}
      <motion.form variants={fadeIn('left',0.5)}
    initial='hidden'
  whileInView={'show'} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
        <input className='bg-transparent 
        border-b py-3 outline-none w-full placeholder:text-white 
        focus:border-accent transition-all' placeholder='Your Name' type='text'/>
       <input className='bg-transparent 
        border-b py-3 outline-none w-full placeholder:text-white 
        focus:border-accent transition-all' placeholder='Your Email' type='text'/>
        <textarea className='bg-transparent 
        border-b py-12 outline-none w-full placeholder:text-white 
        focus:border-accent transition-all  resize-none mb-12' placeholder='Your Message'></textarea>
        <button className='btn btn-lg'>Send message</button>
      </motion.form>
      </div>
    </div>
   </div>;
};

export default Contact;
