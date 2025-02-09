import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { ENTRANCE_VARIANTS } from "@/constants/Variants";

const HeroSection = () => {
  return (
    <section className="mb-16 overflow-x-hidden">
      <ParticlesBackground />
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <Navbar />
        <motion.div
          initial="hidden"
          animate={{ y: -5, scale: 1.01 }}
          whileInView="visible"
          variants={ENTRANCE_VARIANTS}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
          }}
          className="h-screen w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-white text-7xl lg:text-9xl font-bold mt-[-100px]">
            Nicholas
            <br />
            <span className="primary-text ml-20 lg:ml-[250px]">Pro</span>
            ugh
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
