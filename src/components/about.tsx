import Image, { type StaticImageData } from "next/image";
import cybersec from "@/assets/about/cybersec.svg";
import cloud from "@/assets/about/cloud.svg";
import enterprise from "@/assets/about/enterprise.svg";
import human from "@/assets/about/human.svg";
import { motion, type Variants } from "framer-motion";

export default function About() {
  const leftVariant: Variants = {
    offscreen: {
      x: -400,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };

  const rightVariant: Variants = {
    offscreen: {
      x: 400,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };

  return (
    <div id="about" className="p-[5%]">
      <p className="text-center text-3xl font-bold text-white">ABOUT US</p>
      <div className="flex items-stretch justify-center py-4">
        <motion.div className="flex flex-col py-4 text-white md:w-3/5" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <p className="Montserrat mb-auto text-xl font-semibold">
            Cybersecurity Services and Solutions
          </p>
          <p className="pb-2 pt-4 text-justify text-[#BCCACA]">
            Lorem ipsum is placeholder text commonly used Lorem ipsum is
            placeholder text commonly Lorem ipsum is placeholder text commonly
            used Lorem ipsum is placeholder text commonly Lorem ipsum is
            placeholder text commonly used Lorem ipsum is placeholder text
            commonly Lorem ipsum is placeholder text commonly used Lorem ipsum
            is placeholder text commonly
          </p>
          <button className="mb-0 mt-auto w-fit border p-2 hover:bg-[#BCCACA] hover:text-black">
            Learn More
          </button>
        </motion.div>
        <motion.div className="flex w-1/5 items-center justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <Image
            src={cybersec as StaticImageData}
            alt="cybersec"
            width={500}
            height={500}
            className="hidden h-3/4 w-auto md:block"
          />
        </motion.div>
      </div>
      <div className="flex items-stretch justify-center py-4">
        <motion.div className="flex w-1/5 items-center justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <Image
            src={enterprise as StaticImageData}
            alt="enterprise"
            width={500}
            height={500}
            className="hidden h-3/4 w-auto md:block"
          />
        </motion.div>
        <motion.div className="flex flex-col py-4 text-white md:w-3/5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <p className="Montserrat mb-auto text-xl font-semibold">
            Enterprise Services and Solutions
          </p>
          <p className="pb-2 pt-4 text-justify text-[#BCCACA]">
            Lorem ipsum is placeholder text commonly used Lorem ipsum is
            placeholder text commonly Lorem ipsum is placeholder text commonly
            used Lorem ipsum is placeholder text commonly Lorem ipsum is
            placeholder text commonly used Lorem ipsum is placeholder text
            commonly Lorem ipsum is placeholder text commonly used Lorem ipsum
            is placeholder text commonly
          </p>
          <button className="mb-0 mt-auto w-fit border p-2 hover:bg-[#BCCACA] hover:text-black">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="flex items-stretch justify-center py-4">
        <motion.div className="flex flex-col py-4 text-white md:w-3/5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <p className="Montserrat mb-auto text-xl font-semibold">
            Cloud Services and Solutions
          </p>
          <p className="pb-2 pt-4 text-justify text-[#BCCACA]">
            Lorem ipsum is placeholder text commonly used Lorem ipsum is
            placeholder text commonly Lorem ipsum is placeholder text commonly
            used Lorem ipsum is placeholder text commonly Lorem ipsum is
            placeholder text commonly used Lorem ipsum is placeholder text
            commonly Lorem ipsum is placeholder text commonly used Lorem ipsum
            is placeholder text commonly
          </p>
          <button className="mb-0 mt-auto w-fit border p-2 hover:bg-[#BCCACA] hover:text-black">
            Learn More
          </button>
        </motion.div>
        <motion.div className="flex w-1/5 items-center justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <Image
            src={cloud as StaticImageData}
            alt="cloud"
            width={500}
            height={500}
            className="hidden h-3/4 w-auto md:block"
          />
        </motion.div>
      </div>
      <div className="flex flex-row-reverse items-stretch justify-center py-4">
        <motion.div className="flex flex-col py-4 text-white md:w-3/5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <p className="Montserrat mb-auto text-xl font-semibold">
            Human Capital Development
          </p>
          <p className="pb-2 pt-4 text-justify text-[#BCCACA]">
            Lorem ipsum is placeholder text commonly used Lorem ipsum is
            placeholder text commonly Lorem ipsum is placeholder text commonly
            used Lorem ipsum is placeholder text commonly Lorem ipsum is
            placeholder text commonly used Lorem ipsum is placeholder text
            commonly Lorem ipsum is placeholder text commonly used Lorem ipsum
            is placeholder text commonly
          </p>
          <button className="mb-0 mt-auto w-fit border p-2 hover:bg-[#BCCACA] hover:text-black">
            Learn More
          </button>
        </motion.div>
        <motion.div className="flex w-1/5 items-center justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <Image
            src={human as StaticImageData}
            alt="human"
            width={500}
            height={500}
            className="hidden h-3/4 w-auto md:block"
          />
        </motion.div>
      </div>
    </div>
  );
}
