"use client";
import React from "react";
import Image from "next/image";
import about from "@/components/about/assets/founder.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function About() {
  const imageVariants = {
    hidden: { scale: 0, x: -100, y: -100, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white flex flex-wrap items-center pt-10 justify-around gap-10  px-10 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-end"
        variants={imageVariants}
      >
        <Image
          className="h-72 w-72 lg:h-96 lg:w-96 rounded-full "
          src={about}
          alt="About Us"
        />
      </motion.div>
      
      <div className="flex flex-col items-start justify-start lg:w-[50%] px-4 lg:px-0">
        <motion.h1
          className="text-[#1e1e1e] text-3xl lg:text-5xl font-bold mb-6 tracking-tight"
          custom={0}
          variants={textVariants}
        >
          ABOUT US
        </motion.h1>

        <motion.p
          className="text-[#4b5563] text-sm lg:text-lg font-medium leading-relaxed mb-4"
          custom={1}
          variants={textVariants}
        >
          Best legal work completion
          <span className="font-semibold"> Cost Free Legal Opinion</span> Our tax professionals will provide legal opinion on your each & every tax-related points.
        </motion.p>

        <motion.p
          className="text-[#4b5563] text-sm lg:text-lg font-normal leading-relaxed mb-4"
          custom={2}
          variants={textVariants}
        >
          We are regularly practicing in the field of taxation legal matters previous 20 years. Our aim is to provide the best legal consultancy without receiving any charges (taxation matter) on each facing step. Our vision is to resolve each query (online-offline) of taxpayers through guidance as per act.
        </motion.p>

        <motion.p
          className="text-[#4b5563] text-sm lg:text-lg font-normal leading-relaxed mb-4"
          custom={3}
          variants={textVariants}
        >
           <span className="font-semibold"> Best Legal Services</span> 
        </motion.p>

        {/* <motion.p
          className="text-[#4b5563] text-sm lg:text-lg font-normal leading-relaxed mb-4"
          custom={4}
          variants={textVariants}
        >
          Our scalable AI solutions are built for growing startups and future
          unicorns— ensuring your books, metrics, and reports grow with you.
        </motion.p> */}

        {/* <motion.p
          className="text-[#4b5563] text-sm lg:text-lg font-medium italic leading-relaxed"
          custom={5}
          variants={textVariants}
        >
          At Astron, we don’t just love numbers—we love what they can do for
          your vision.
        </motion.p> */}
      </div>

    </motion.div>
  );
}
