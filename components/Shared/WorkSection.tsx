import { WORKS } from "@/constants/Work";
import { motion } from "framer-motion";
import { ENTRANCE_VARIANTS } from "@/constants/Variants";
import { Button } from "../ui/button";
import Link from "next/link";
const WorkSection = () => {
  const LinkButton = motion(Button);
  return (
    <section className="mt-[200px]">
      <div className="sticky top-0 transform-origin-top">
        {WORKS.map((work) => (
          <motion.div
            key={work.title}
            variants={ENTRANCE_VARIANTS}
            className={`justify-center items-center p-16 m-16 flex flex-col lg:flex-row text-white sticky bg-black border-2 border-orange-500`}
            style={{ top: `calc(5% + ${work.id * 25}px)` }}
          >
            <motion.img
              initial={"hiddenLeft"}
              whileInView={"visible"}
              variants={ENTRANCE_VARIANTS}
              className="h-[500px] w-[400px]"
              src={work.image}
              alt={work.title}
            />
            <motion.div
              initial={"hiddenRight"}
              whileInView={"visible"}
              className="flex flex-col gap-4 text-center lg:text-left lg:ml-16 my-8"
              variants={ENTRANCE_VARIANTS}
            >
              <h3 className="text-5xl font-bold">{work.title}</h3>

              <p className="">{work.description}</p>
              <LinkButton
                initial={"hiddenRight"}
                whileInView={"visible"}
                asChild
                className="bg-orange-500 text-black hover:bg-orange-600 text-lg p-5 w-fit m-auto lg:ml-0"
              >
                <Link href={work.link}>View Project</Link>
              </LinkButton>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
