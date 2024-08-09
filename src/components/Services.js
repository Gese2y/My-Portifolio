import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const services=[
  {
  name:'UI/UX Design',
  description:`I am a dedicated full-stack developer with over six months of     professional experience in developing and maintaining web
              applications. My expertise includes working with a range of
              technologies.`,
              link:'Learn More'
},
{
  name:'Development',
  description:`I am a dedicated full-stack developer with over six months of     professional experience in developing and maintaining web
              applications. My expertise includes working with a range of
              technologies.`,
              link:'Learn More'
},
{
  name:'Digital Marketing',
  description:`I am a dedicated full-stack developer with over six months of     professional experience in developing and maintaining web
              applications. My expertise includes working with a range of
              technologies .`,
              link:'Learn More'
},
]
const Services = () => {
  return (<section className='section' id='services'>
    <div className='container mx-auto'>
<div  className='flex flex-col lg:flex-row'>
  <motion.div variants={fadeIn('right',0.5)}
    initial='hidden'
  whileInView={'show'} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
    <h2 className='h2 text-accent mb-6'> What I Do.</h2>
    <h3 className='h3 max-w-[455px] mb-16'>
              I'am Freelance Full stack Developer with +1 year proven exeperience
            </h3>
            <button className='btn btn-lg'>See My Work</button>
  </motion.div>
  <motion.div variants={fadeIn('left',0.5)}
    initial='hidden'
  whileInView={'show'}  className='flex-1'>
    {services.map((service,index)=>{
      const {name,description,link}=service
      return <div className='border-b border-white/20 ' key={index}>
        <div className='max-w-[476px]'>
          <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6' >{name}</h4>
        <p className='font-secondary leading-tight'>{description}</p>
        </div>
      <div className='flex flex-col fle-1 items-end'>
        <a href='#' className='btn w-9 h-9 mb-[42px] 
        flex justify-center items-center'>
          <BsArrowUpRight />
        </a>
        <a href='#' className='text-gradient text-sm'>{link}</a>
      </div>
      </div>
    })}
  </motion.div>

</div>
    </div>
   </section>);
};

export default Services;
