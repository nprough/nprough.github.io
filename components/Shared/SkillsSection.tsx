import { ENTRANCE_VARIANTS } from "@/constants/Variants";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const containerStyles =
    "w-auto lg:w-1/4 text-center list-none border-x-2 border-x-orange-500 p-4 content-center mx-4 my-4 font-bold";
  const headerStyles = "text-3xl font-bold mb-4 text-orange-500";
  const listStyles = "flex flex-col gap-4";

  return (
    <section className="overflow-x-hidden">
      <motion.div
        initial={"hiddenUp"}
        whileInView={"visible"}
        variants={ENTRANCE_VARIANTS}
        className="flex flex-col lg:flex-row w-full gap-4 text-white"
      >
        <motion.div variants={ENTRANCE_VARIANTS} className={containerStyles}>
          <h3 className={headerStyles}>Languages</h3>
          <ul className={listStyles}>
            <li>HTML</li>
            <li>CSS, SCSS, SASS</li>
            <li>JavaScript, TypeScript</li>
            <li>SQL</li>
          </ul>
        </motion.div>
        <motion.div variants={ENTRANCE_VARIANTS} className={containerStyles}>
          <h3 className={headerStyles}>Frameworks</h3>
          <ul className={listStyles}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
        </motion.div>
        <motion.div variants={ENTRANCE_VARIANTS} className={containerStyles}>
          <h3 className={headerStyles}>Technologies</h3>

          <ul className={listStyles}>
            <li>MySQL</li>
            <li>Rest APIs</li>
            <li>SEO</li>
            <li>WordPress</li>
            <li>WCAG</li>
          </ul>
        </motion.div>
        <motion.div variants={ENTRANCE_VARIANTS} className={containerStyles}>
          <h3 className={headerStyles}>Other Skills</h3>
          <ul className={listStyles}>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Oral Communication</li>
            <li>Writing Technical Documentation</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
