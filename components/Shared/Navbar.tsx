import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const MotionLink = motion(Link);

  const hoverVariants = {
    initial: {
      color: "white",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hover: {
      color: "orange",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="flex bg-transparent">
      <ul className="flex gap-4 lg:gap-10 justify-center items-center w-full h-[100px] text-white">
        <li>
          <MotionLink
            initial={"initial"}
            whileHover={"hover"}
            variants={hoverVariants}
            href="#about"
          >
            About
          </MotionLink>
        </li>
        <li>
          <MotionLink
            initial={"initial"}
            whileHover={"hover"}
            variants={hoverVariants}
            href="#work"
          >
            Work
          </MotionLink>
        </li>
        <li>
          <MotionLink
            initial={"initial"}
            whileHover={"hover"}
            variants={hoverVariants}
            href="#business"
          >
            Business
          </MotionLink>
        </li>
        <li>
          <MotionLink
            initial={"initial"}
            whileHover={"hover"}
            variants={hoverVariants}
            href="#contact"
          >
            Contact
          </MotionLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
