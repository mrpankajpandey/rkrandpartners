"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const teamMembers = [
  {
    id: "rajendra-kumar",
    name: "Rajendra Kumar",
    role: "Founder & CEO",
    email:"rajendra@rkrandpartners.com",
    image: "./Partners/RajendraKumar.webp",
    description:
      "Rajendra Kumar is founder of the IP law firm, RKR & Partners. He has been practicing intellectual property laws for the past almost 40 years, of which the last 29 years as a co-founding member of the IP law firm,",
    fullDescription: [
      "Rajendra Kumar is founder of the IP law firm, RKR & Partners. He has been practicing intellectual property laws for the past almost 40 years, of which the last 29 years as a co-founding member of the IP law firm, K&S Partners where he chaired the litigation practice of the firm relating to trademarks, copyrights and geographical indication disputes. He holds a PG diploma in the UK, US and European Law of Copyrights and Related Rights from King’s College, London, United Kingdom. He has a wide-ranging extensive experience in handling all aspects of prosecution and enforcement of trade marks, copyright and geographical indications. His expertise extends to the handling of TRIPS related issues, protection of copyright in the digital context, domain name disputes and intellectual property aspects of the entertainment industry and the Internet. He assisted the Government of India in preparing the first draft of the Geographical Indication of Goods (Registration and Protection) Act, 1999 in consultation with the World Intellectual Property Organization (WIPO). In 2005, Rajendra Kumar, co-authored a seminal work on geographical indications titled, “Geographical Indications: A Search for Identity”, published by Lexis Nexis Butterworths. Rajendra regularly appears before the IP Offices, various District and High Courts as well as the Supreme Court of India. He successfully argued before the High Court of Delhi in two of India’s land-mark cases, Microfibres v Girdhar on the overlap between designs and copyright and Super Cassettes v Myspace on the availability of safe-harbour provisions to an intermediary in a claim for copyright infringement.",
    ],
  },
  {
    id: "ashish-rai",
    name: "Ashish Rai",
    role: "Managing Associate",
    email:"ashish@rkrandpartners.com",
    image: "./Partners/ashish-rai.jpeg",
    description:
      "Ashish is a registered Patent Agent with a graduate degree in Bachelor of Engineering (B.Eng) in Mechanical Engineering, University of Leicester, UK and a post-graduate degree in Master of Science (M.S.) in Mechanical Engineering, Newcastle University, UK. He has a Law Degree and is enrolled as an Advocate with the Bar Council of Delhi.,",
    fullDescription: [
      "Ashish has prior extensive experience in handling all aspects of drafting, filing and prosecuting patent applications in the field of mechanical and automobile engineering, electro-mechanical equipment, electrical engineering, electrical vehicles, battery technology, vehicle structures, hybrid drive technology, IC engine, automotive components such as vehicle locks, fuel tank, piston designs etc. Besides his core technology area, he has experience in filing and prosecuting applications relating to computer related inventions, pharmaceuticals, bio-pharmaceuticals, medical diagnostics, therapeutics and bio-chemistry.As an integral part of his patent prosecution practice, Ashish regularly provides opinions on prior art searches, freedom-to-operate analysis, patentability and related issues. Besides the patent prosecution experience, Ashish also handles all aspects of drafting, filing and prosecuting industrial design applications before the Indian Patents Office including opinions on novelty and registrability of design subject matter. Ashish regularly appears before the Indian Patent Office in connection with patent and design show-cause hearings.",
    ],
  },
  {
    id: "pragya",
    name: "Pragya",
    role: "Patent Consultant",
    email:"pragya@rkrandpartners.com",
    image: "./Partners/prayga-thakur-jpg.webp",
    description:
      "Pragya Thakur is a registered patent agent having a Master’s Degree in Pharmaceutical Sciences. She also has a law degree and is enrolled as an Advocate with the Bar Council of Delhi. Prior to her current practice as a patent associate, she worked for 8 years as a research scientist and handled regulatory affairs with the Central Drug Regulatory Authority of India. ",
    fullDescription: [
      "Pragya has extensive experience in contentious and non-contentious aspects of patent prosecution and enforcement including: conducting and analysing patent searches, providing opinions on non-infringement, patentability, invalidity, freedom-to-operate etc. drafting patent specifications, filing and prosecuting national and international (PCT) applications in diverse fields of technology including pharmaceuticals, new molecule synthesis, process chemistry, zeolites, medical devices, polymer technology, locomotive communication, braking systems and automated vehicle systems. She regularly appears before the Indian Patent Office for oral hearings in connection with patent prosecution and other related matters. conducting opposition proceedings and attending hearings before the Indian Patent Office. drafting and filing patent infringement suits, statements of defence, counter-claims, revocation etc. She often works with subject matter experts in various fields in order to prepare expert affidavits and testimony. Pragya also has substantial expertise in obtaining industrial design registrations and handling cancellation proceedings in respect thereof before the Indian Patent Office.",
    ],
  },
 

];

export default function AboutFounder() {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust the width here based on your needs
    };

    handleResize(); // Run once on mount to check initial size
    window.addEventListener("resize", handleResize); // Update size on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  

  return (
    <div className="relative py-16 bg-white rounded-xl">
      <div className="text-center pb-16">
        <h1 className="text-4xl font-bold mb-6 text-[#38434d]">Our Expert Team</h1>
        <p className="text-xl max-w-3xl mx-auto px-4 text-gray-600">
          Meet the dedicated professionals who drive our company&apos;s success with
          their expertise, passion, and commitment to excellence.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col space-y-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white"
            >
              <div className="flex flex-col md:flex-row items-start p-8 md:p-12 gap-8">
                {/* Left Section: Image, Name, Role */}
                <div className="md:w-1/3 flex flex-col items-center md:items-start space-y-6">
                  <div className="relative w-56 h-56">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute w-full h-full object-cover rounded-full"
                      loading="lazy" 
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-[#38434d] mb-3">
                      {member.name}
                    </h3>
                    <p className="text-lg text-[#67ac4d] font-semibold">
                      {member.role}
                    </p>
                    <p className="text-lg text-[#1c398e] font-semibold flex gap-2">
                      
                        <Mail/> 
                      {member.email}
                    
                    </p>
                  </div>
                </div>

                {/* Right Section: Description */}
                <div className="md:w-2/3 md:pl-8 border-l-2 border-gray-100">
                  <div className="space-y-4">
                    {/* Conditionally render shortened or full description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {isMobile
                        ? member.description
                        : member.fullDescription.map((paragraph, index) => (
                            <span key={index}>{paragraph} </span>
                          ))}
                    </p>
                  </div>

                  <Link
                    href={`/people/${member.id}`}
                    className="inline-flex items-center mt-6 px-6 py-3 bg-[#1c398e] text-white rounded-lg hover:bg-[#1c398e] transition-colors duration-300 space-x-2 group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}