import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { ENTRANCE_VARIANTS } from "@/constants/Variants";

export default function BusinessSection() {
  const LinkButton = motion(Button);

  return (
    <section
      id="business"
      className="overflow-x-hidden mt-[300px] flex flex-col lg:flex-row p-4 lg:p-16"
    >
      <motion.div
        initial="hiddenUp"
        whileInView="visible"
        variants={ENTRANCE_VARIANTS}
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <motion.img
          className="w-full lg:w-3/4 bg-white rounded-full border-2 border-orange-500"
          animate={{ y: -5 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
          }}
          src="/ProughWebDesignLLC.png"
          alt="Prough Web Design, LLC"
        />
      </motion.div>
      <motion.div
        initial="hiddenDown"
        whileInView="visible"
        variants={ENTRANCE_VARIANTS}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-8"
      >
        <motion.h2
          variants={ENTRANCE_VARIANTS}
          className="text-white text-3xl lg:text-5xl font-bold text-center mt-8 lg:mt-0"
        >
          <span className="text-orange-500">Pro</span>ugh Web
          <span className="text-orange-500">&nbsp;Design</span>, LLC
        </motion.h2>
        <motion.p
          variants={ENTRANCE_VARIANTS}
          className="text-white text-xl flex items-center"
        >
          Prough Web Design, LLC is a web design company founded by Nicholas and
          Kelsey Prough. Our mission is to craft beautiful and functional
          websites that help small businesses and non-profits thrive.
        </motion.p>
        <motion.p
          variants={ENTRANCE_VARIANTS}
          className="text-white text-xl flex items-center"
        >
          We&apos;ve had the pleasure of working with a diverse range of
          clients, and we&apos;re excited to collaborate with you next! Let us
          help turn your vision into reality.
        </motion.p>
        <motion.p
          variants={ENTRANCE_VARIANTS}
          className="text-white text-xl flex items-center"
        >
          Still unsure? Check out the testimonials below to hear directly from
          our satisfied clients!
        </motion.p>
        <LinkButton
          initial={"hiddenRight"}
          whileInView={"visible"}
          asChild
          className="bg-orange-500 text-black hover:bg-orange-600 text-lg p-5 w-fit"
        >
          <Link href="https://www.facebook.com/proughwebdesign/">
            Connect with us on Facebook
          </Link>
        </LinkButton>
      </motion.div>
    </section>
  );
}
