"use client"
import { IconLocationShare } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

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

const Location = () => {
    const Offices =[
        {
            
            city:"Gurugram, Haryana",
            address:"Ivory 178, Ground Fl; Emerald Hills Select, Sector 65, Gurugram, Haryana 122018, INDIA.",
            phone:"+911244291547",
            email:"info@rkrandpartners.com",
            icon: IconLocationShare,
        },

        
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
        Office Locations
      </motion.h1>
    
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-12">

      <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Offices.map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <div className="h-full bg-white rounded-2xl shadow-sm px-8 py-2 border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-blue-50 text-blue-700  ">
                  <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{item.city}</h3>
                  <p className="text-gray-600 mb-4 ">{item.address}</p>
                  <p className="text-gray-600 mb-4 ">{item.email}</p>
                  <p className="text-gray-600 mb-4 ">{item.phone}</p>
                  
                  <Button href="#"  className="text-white bg-blue-800 w-30">  Get derection</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </div>
     </motion.div>
  );
};

export default Location;
