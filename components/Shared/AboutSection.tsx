"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center  text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-6xl font-bold text-center mb-8">
          Hi, I&apos;m <span className="primary-text">Nick.</span>
        </h2>
        <h3 className="text-4xl font-bold text-center mb-8">
          I&apos;m a{" "}
          <TypeAnimation
            className="primary-text font-bold py-7"
            sequence={[
              "Software Engineer.", // Types 'One'
              1000, // Waits 1s
              "React Developer.", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "Full-Stack Developer.", // Types 'Three' without deleting 'Two'
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
        </h3>
        <p className="text-xl px-16">
          Nicholas Prough is a skilled software engineer with a specialization
          in Front-End development. His most recent project, a website for the
          Mifflin County School District, boasts over 2.9 million page views in
          2024 and is actively used by students and staff on a daily basis.
          Nicholas excels in creating intuitive and user-friendly interfaces
          that enhance the overall user experience.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center p-16">
        <div className="w-1/2 lg:w-full">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
