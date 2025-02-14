import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ContactSection() {
  const LinkButton = motion(Button);

  return (
    <section id="contact" className="my-[300px]">
      <div className="flex flex-col items-center justify-center gap-8 border-2 border-orange-500 p-8 m-[5%] lg:m-[15%]">
        <h2 className="text-center text-5xl font-bold text-white">
          Contact <span className="text-orange-500">Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <LinkButton
            initial={"hiddenRight"}
            whileInView={"visible"}
            asChild
            className="bg-orange-500 text-black hover:bg-orange-600 text-lg p-5 w-fit"
          >
            <Link href="https://www.linkedin.com/in/nicholas-prough/">
              Connect with Me on LinkedIn
            </Link>
          </LinkButton>
          <LinkButton
            initial={"hiddenRight"}
            whileInView={"visible"}
            asChild
            className="bg-orange-500 text-black hover:bg-orange-600 text-lg p-5 w-fit"
          >
            <Link href="https://www.facebook.com/proughwebdesign/">
              Contact Prough Web Design, LLC
            </Link>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
