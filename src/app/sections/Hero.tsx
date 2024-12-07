"use client";

import ArrowRight from "@/assets/icons/arrow-right.svg";
import cogImage from "@/assets/images/cog.png";
import cylinderImage from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/noodle.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl tracking-tighter font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text inline-flex items-center gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              initial={{
                translateY: 0,
              }}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 absolute"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="Noddle image"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
