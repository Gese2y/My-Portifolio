import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from "../assets/pic1.png";

const About = () => { 
  const [ref,inView]=useInView({
    threshold:0.5 
  })
  return (<section className='section' 
  id='about' ref={ref}>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
    <motion.div variants={fadeIn('right',0.5)}
    initial='hidden'
  whileInView={'show'}
 className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" width={'20000px'} />
          </motion.div>
           <motion.div variants={fadeIn('left',0.5)}
    initial='hidden'
  whileInView={'show'} className='flex-1'>
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>
              I'am Freelance Full stack Developer with +1 year proven exeperience
            </h3>
            <p className='mb-6'>
            I am a dedicated full-stack developer with over six months of
              professional experience in developing and maintaining web
              applications. My expertise includes working with a range of
              technologies such as Content Managment DNN, PHP, AngularJS,
              ReactJS, PostgreSQL, MongoDB, and MSSQL. I have successfully
              contributed to several projects, enhancing their performance and
              scalability. 
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                  inView ? <CountUp start={0} end={13} duration={3} />:null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year Of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                  inView ? <CountUp start={0} end={20} duration={3} />:null
                  }
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Project <br />
                  Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                  inView ? <CountUp start={0} end={12} duration={3} />:null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisified <br />
                  Client
                </div>
              </div>
                         </div>
                         <div className='flex gap-x-8 items-center'>

              <button className='btn btn-lg'> Contact Me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portifolio
              </a>
                         </div>
                 
           </motion.div>

    </div>
  </section>);
};

export default About;
