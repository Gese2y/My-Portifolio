import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image1 from "../assets/portfolio-img1.png";
import Image2 from "../assets/portfolio-img2.png";
import Image3 from "../assets/portfolio-img3.png";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn('right',0.5)}
    initial='hidden'
  whileInView={'show'}
            className="flex-1 flex flex-col gap-y-12 mb-10
      lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                I am a dedicated full-stack developer with over six months of
                professional experience in developing and maintaining web
                applications.
              </p>
              <button className="btn btn-sm">View all project</button>
            </div>
            <div
              className="group relative overflow-hidden border-2 border-white/50
rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Image1}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
    transition-all duration-500 z-50 "
                >
                  <span className="text-gradient">UX/UI Design</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
    transition-all duration-700 z-50 "
                >
                  <span className="text-3xl text-white">project Title</span>
                </div>
              </div>
            </div>
          </motion.div>,
          <motion.div variants={fadeIn('left',0.5)}
    initial='hidden'
  whileInView={'show'}  className="flex-1  flex flex-col gap-y-10">
            ,
            <div
              className="group relative overflow-hidden border-2 border-white/50
rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Image2}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
    transition-all duration-500 z-50 "
                >
                  <span className="text-gradient">UX/UI Design</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
    transition-all duration-700 z-50 "
                >
                  <span className="text-3xl text-white">project Title</span>
                </div>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2 border-white/50
rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Image3}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
    transition-all duration-500 z-50 "
                >
                  <span className="text-gradient">UX/UI Design</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
    transition-all duration-700 z-50 "
                >
                  <span className="text-3xl text-white">project Title</span>
                </div>
              </div>
            </div>
          </motion.div>,
        </div>
      </div>
    </section>
  );
};

export default Work;
