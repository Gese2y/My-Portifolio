import React from "react";
import Image from "../assets/pic1.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaTelegramPlane,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Gesese
              <span> Teshome</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[15px] lg:text-[40px]
    font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              I am a dedicated full-stack developer with over six months of
              professional experience in developing and maintaining web
              applications. My expertise includes working with a range of
              technologies such as Content Managment DNN, PHP, AngularJS,
              ReactJS, PostgreSQL, MongoDB, and MSSQL. I have successfully
              contributed to several projects, enhancing their performance and
              scalability. In my previous roles, I have demonstrated a strong
              ability to write clean, efficient code and troubleshoot complex
              issues, ensuring that applications run smoothly and efficiently. I
              am adept at collaborating with cross-functional teams to deliver
              projects on time and within budget. My focus on software
              efficiency and optimization has consistently led to improved
              system performance and user satisfaction.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center  mx-auto "
            >
              <button className="btn btn-lg">Contect Me </button>
              <a href="#" className="text-gradient btn-link">
                My Portifolio
              </a>
            </motion.div>
            <br></br>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto"
            >
              <a href="https://t.me/Gyat728">
                <FaTelegramPlane />
              </a>
              <a href="https://github.com/Gese2y/">
                <FaGithub />
              </a>
              <a href="https://gesese-teshome.vercel.app/">
                <FaDribbble />
              </a>
              <a href="https://www.linkedin.com/in/gesese-teshome-b1a344288">
                <FaLinkedinIn />
              </a>
              {/* <a href="https://gesese-teshome.vercel.app/">
                <FaLinkedin />
              </a> */}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" width={"200000px"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
