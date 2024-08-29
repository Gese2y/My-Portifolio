import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiQgis } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/mssql.png";
import geoserver from "../assets/geoserver.png";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skill = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="skill"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] text-center font-bold leading-[0.8] lg:text-[110px]"
            >
              Skills
            </motion.h1>
            <br />
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {/* React Icon with Tooltip */}
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="ReactJS"
              >
                <RiReactjsLine className="text-5xl text-cyan-400" />
              </motion.div>

              {/* MongoDB Icon with Tooltip */}
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="MongoDB"
              >
                <SiMongodb className="text-5xl text-green-500" />
              </motion.div>

              {/* Node.js Icon with Tooltip */}
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="Node.js"
              >
                <FaNode className="text-5xl text-green-400" />
              </motion.div>

              {/* PostgreSQL Icon with Tooltip */}
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="PostgreSQL"
              >
                <BiLogoPostgresql className="text-5xl text-sky-700" />
              </motion.div>

              {/* Angular Icon with Tooltip */}
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="Angular"
              >
                <FaAngular className="text-5xl text-red-500" />
              </motion.div>

              {/* Microsoft SQL Server Icon with Tooltip */}
              <motion.div
  variants={iconVariants(4)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4"
  title="Microsoft SQL Server"
>
  <img src={Image} alt="Microsoft SQL Server Logo" className="w-16 h-16" />
</motion.div>
<motion.div
  variants={iconVariants(3)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4"
  title="Microsoft SQL Server"
>
  <img src={geoserver} alt="Microsoft SQL Server Logo" className="w-16 h-16" />
</motion.div>

              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="Qgis"
              >
                <SiQgis className="text-5xl text-emerald-600" />
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="mysql"
              >
                <SiMysql className="text-5xl text-blue-400" />
              </motion.div>
              <motion.div
                variants={iconVariants(8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="Dot Net"
              >
                <SiDotnet className="text-5xl text-violet-600" />
               
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title="Dot Net"
              >
                <SiTailwindcss className="text-5xl text-sky-400" />
               
              </motion.div>
            </motion.div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
