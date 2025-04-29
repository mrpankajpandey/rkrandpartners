"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

const Works = () => {
    const Items =[
        {
            
            title:"Consultation",
            description:"Write your issue on paper and call us frequently."
        },
        {
           
            title:"Consultation",
            description:"Write your issue on paper and call us frequently."
        }
    ]
  return (
     <motion.div
          className="bg-white flex flex-wrap items-center pt-10 justify-around gap-10  px-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
    <div className="min-h-screen bg-white">
      <motion.h1
        className="text-[#1e1e1e] text-center text-3xl lg:text-5xl font-bold mb-6 tracking-tight"
        custom={0}
        variants={textVariants}
      >
        How It Works
      </motion.h1>
      <motion.p
        className="text-[#1e1e1e] text-center text-xl font-normal mb-6 tracking-tight"
        custom={0}
        variants={textVariants}
      >
        Understand issues & take action for free legal tax consultation.
      </motion.p>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-12">

      <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Items.map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <div className="h-full bg-blue-800 rounded-2xl shadow-sm p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full items-center">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-blue-50 text-blue-700  ">
                   {index+1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white mb-6 text-center">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl font-medium hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg group text-lg"
            >
              <span>Let's Discuss</span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
     </motion.div>
  );
};

export default Works;
