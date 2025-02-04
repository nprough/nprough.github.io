import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <ParticlesBackground />
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <Navbar />
        <motion.div
          animate={{ y: -5 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
          }}
          className="h-screen w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-white text-9xl font-bold mt-[-100px]">
            Nicholas
            <br />
            <span className="primary-text ml-[250px]">Pro</span>
            ugh
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
