import Link from "next/link";
import { motion } from "framer-motion";
import { ENTRANCE_VARIANTS } from "@/constants/Variants";

export default function TestimonialSection() {
  const testimonialStyles =
    "w-full lg:w-1/3 border-x-2 border-x-orange-500 p-4 lg:p-8 lg:m-2 flex flex-col gap-8 lg:gap-4 justify-center items-center";
  const quoteStyles = "text-white text-lg";
  const authorStyles = "text-white text-lg";
  const quotationStyles = "text-orange-500 p-2";
  const authorNameStyles = "text-orange-500 font-bold block text-2xl";
  const linkStyles = "text-orange-500 underline";
  return (
    <section id="testimonials">
      <motion.div
        initial="hiddenDown"
        whileInView="visible"
        variants={ENTRANCE_VARIANTS}
        className="flex flex-col lg:flex-row gap-4 p-4"
      >
        <motion.div variants={ENTRANCE_VARIANTS} className={testimonialStyles}>
          <p className={quoteStyles}>
            <span className={quotationStyles}>&#34;</span>
            We reached out to Nick to help build the Mifflin County Youth Fair
            Website. We met with Nick and gave him a list of our wants/needs and
            he made our vision come to life! He was so easy to work with,
            answering all the questions we had and making all the small and
            large changes we requested in a timely manner. In a matter of a few
            weeks we went from no website to of a few weeks we went from no
            website to a fully functional and user friendly website. We
            appreciate all that Nick has done for us and will continue to
            recommend him.
            <span className={quotationStyles}>&#34;</span>
          </p>
          <p className={authorStyles}>
            <span className={authorNameStyles}>Bobbie Sheaffer</span> Mifflin
            County Youth Fair
            <br />
            <Link className={linkStyles} href="https://www.mcyouthfair.org">
              www.mcyouthfair.org
            </Link>
          </p>
        </motion.div>
        <motion.div variants={ENTRANCE_VARIANTS} className={testimonialStyles}>
          <p className={quoteStyles}>
            <span className={quotationStyles}>&#34;</span>I worked with Nick
            Prough from Prough Web Design, LLC to get [the] Woody&apos;s Beef
            Jerky website created. He was great to work with and did an
            incredible created.
            <span className={quotationStyles}>&#34;</span>
          </p>
          <p className={authorStyles}>
            <span className={authorNameStyles}>Chris Woodward</span>
            Woody&apos;s Beef Jerky
            <br />
            <Link className={linkStyles} href="https://www.woodysbeefjerky.com">
              www.woodysbeefjerky.com
            </Link>
          </p>
        </motion.div>
        <motion.div variants={ENTRANCE_VARIANTS} className={testimonialStyles}>
          <p className={quoteStyles}>
            <span className={quotationStyles}>&#34;</span>
            We would like to thank Prough Web Design, LLC for their excellent
            service on helping us design and create the website for us! Nick was
            so very easy to work with and extremely helpful throughout the
            process! Thanks Prough Web Design, LLC!
            <span className={quotationStyles}>&#34;</span>
          </p>
          <p className={authorStyles}>
            <span className={authorNameStyles}>
              Elyse Worthy
              <br />
              Kristy Thomas
            </span>
            Orbisonia United Methodist Church
            <br />
            <Link className={linkStyles} href="https://www.orbyumc.com">
              www.orbyumc.com
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
