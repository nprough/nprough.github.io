"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ENTRANCE_VARIANTS } from "@/constants/Variants";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center text-white overflow-x-hidden"
    >
      <motion.div
        initial="hiddenLeft"
        whileInView="visible"
        variants={ENTRANCE_VARIANTS}
        className="container mx-auto px-4 py-16 order-2 lg:order-1"
      >
        <motion.h2
          variants={ENTRANCE_VARIANTS}
          className="text-6xl font-bold text-center mb-8"
        >
          Hi, I&apos;m <span className="primary-text">Nick.</span>
        </motion.h2>

        <motion.h3
          variants={ENTRANCE_VARIANTS}
          className="text-2xl lg:text-4xl font-bold text-center mb-8"
        >
          I&apos;m a{" "}
          <TypeAnimation
            className="primary-text font-bold py-7"
            sequence={[
              "Software Engineer.",
              1000,
              "React Developer.",
              1000,
              "Next.js Developer.",
              1000,
              "Full-Stack Developer.",
              1000,
              "Web Designer.",
              1000,
              "Business Owner.",
              1000,
              () => {},
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "inherit", display: "inline-block" }}
          />
        </motion.h3>
        <motion.p
          variants={ENTRANCE_VARIANTS}
          className="text-xl px-4 lg:px-16"
        >
          Nicholas Prough is a skilled software engineer with a specialization
          in Front-End development. His most recent professional project, a
          website for the Mifflin County School District, boasts over 2.9
          million page views in 2024 and is actively used by students and staff
          on a daily basis. Nicholas excels in creating intuitive and
          user-friendly interfaces that enhance the overall user experience.
        </motion.p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 lg:p-16 order-1 lg:order-2  overflow-x-hidden">
        <motion.div
          initial="hiddenRight"
          whileInView="visible"
          variants={ENTRANCE_VARIANTS}
          className="w-3/4 lg:w-full"
        >
          <motion.img
            src="/profile.jpg"
            alt="About"
            className="w-full h-auto rounded-full border-2 border-orange-500 "
            animate={{ y: -5 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
