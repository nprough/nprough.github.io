import { WORKS } from "@/constants/Work";
import { motion } from "framer-motion";
import { ENTRANCE_VARIANTS } from "@/constants/Variants";
import { Button } from "../ui/button";
import Link from "next/link";
const WorkSection = () => {
  const LinkButton = motion(Button);
  return (
    <section
      id="work"
      className="mt-[300px] overflow-x-hidden lg:overflow-visible"
    >
      <h2 className="text-center text-5xl font-bold text-white">
        Recent <span className="text-orange-500">Work</span>
      </h2>
      <div className="lg:sticky top-0 lg:transform-origin-top mx-0 lg:mx-[10%]">
        {WORKS.map((work) => (
          <motion.div
            key={work.title}
            variants={ENTRANCE_VARIANTS}
            className={`justify-center items-center p-4 lg:p-16 m-4 lg:m-16 flex flex-col lg:flex-row text-white lg:sticky bg-black border-2 border-orange-500 h-[700px]`}
            style={{ top: `calc(20% + ${work.id * 25}px)` }}
          >
            <motion.img
              initial={"hiddenLeft"}
              whileInView={"visible"}
              variants={ENTRANCE_VARIANTS}
              className="h-[300px] w-[300px] lg:h-[400px] lg:w-[300px]"
              src={work.image}
              alt={work.title}
            />
            <motion.div
              initial={"hiddenRight"}
              whileInView={"visible"}
              className="flex flex-col gap-4 text-center lg:text-left lg:ml-16 my-8"
              variants={ENTRANCE_VARIANTS}
            >
              <h3 className="text-3xl lg:text-5xl font-bold">{work.title}</h3>

              <p className="">{work.description}</p>
              <LinkButton
                initial={"hiddenRight"}
                whileInView={"visible"}
                asChild
                className="bg-orange-500 text-black hover:bg-orange-600 text-lg p-5 w-fit m-auto lg:ml-0"
              >
                <Link href={work.link}>{work.button}</Link>
              </LinkButton>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
