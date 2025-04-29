"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { use } from "react"
const teamMembers = [
    {
      id: "rajendra-kumar",
      name: "Rajendra Kumar",
      role: "Founder & Managing Partner",
      image: "/RajendraKumar.webp",
      description:
        "A fellow member of the Institute of Chartered Accountants of India with over 12+ years of rich industry experience and diverse educational background.",
      fullDescription: [
        "He is a fellow member of the Institute of Chartered Accountants of India with over 12+ years of rich industry experience and diverse educational background.",
        "His areas of expertise include Data Analytics, Fraud and Forensics, Management Consultancy, Internal Financial Controls, Financial Reporting & Analysis, Investments and Treasury, Internal Audit (FP&A), Risk Management, Business Planning, Process Automation, Controllership functions and Strategy Development, etc.",
        "He is passionate about driving financial growth and strategic innovation. His multifaceted background includes leading finance and controllership roles across multiple organisations in various sectors.",
        "In 2018, he founded a personal finance advisory venture dedicated to simplifying financial literacy and helping individuals achieve financial freedom.",
        "He is an avid investor and equity research enthusiast and thrives on collaboration and continuous learning.",
      ],
      expertise: [
        "Data Analytics",
        "Fraud and Forensics",
        "Management Consultancy",
        "Financial Reporting & Analysis",
        "Risk Management",
        "Business Planning",
      ],
      education: [
        "Fellow Chartered Accountant from The Institute of Chartered Accountants of India (ICAI)",
        "Diploma in Information Systems Audit from ICAI - DISA",
        "A Qualified Independent Director from Indian Institute of Corporate Affairs. Reg. No. IDDB-NR-202302-046715",
        "Diploma on Management and Business Finance (DMBF) from ICAI.",
        "Forensic Accounting and Fraud Detection Certification Course (FAFD) from ICAI",
        "Masters in Business Finance (MBFCC) from ICAI",
        "Certified Ethical Hacker (CEH) from EC-Council (US)",
        "Executive Education - Entrepreneurship & Entrepreneurial Studies from IIM Ahmedabad",
        "Executive Education - Masterclass on Leadership from Indian School of Business. Received a certificate of distinction.",
        "Executive Development Programme on Forensics Analytics using CAAT Tools from ICAI.",
        "Executive Development Programme on Data Analytics, Advanced Excel and Data Dashboards from ICAI.",
        "Bachelors in Accounting and Finance B. Com (A&F) from IGNOU",
        "Mutual funds Investment, Equity Research and various other certification from National Institute of Stock Exchange (NISM).",
        "Blockchain Technology for Professional Accountants from ICAI.",
        "Various other courses on Financial Analysis, Internal Financial Controls, effective Negotiations skills etc.",
        "Industry Expert Speaker and Panelist in GST Conclave on topic “Refunds under GST” organized by The Federation of Indian Professionals in 2022.",
        "Awarded as the CFO of the Year Award 2024 by Indian Achievers Forum for his time at Mahajan Imaging Pvt. Ltd. It was a testament to his dedication efforts and contribution to the field of professional services.",
        "Awarded Indian Achievers Award by Indian Achievers Forum for remarkable contribution in his field. He has proved that determination to excel and to deliver quality always results in success.",
        "Featured on BrilliantRead Media as a Seasoned Entrepreneur and Investor.",
        "Featured in the Magazine 'The Achievers World' by Indian Achievers Forum. Transforming Challenges into Opportunities: A Visionary's Journey",
        "The Founders Club Member at TIE Delhi NCR Chapter.",
      ],
    },
  ];
  
export default function TeamMemberPage(props) {
    // const member = teamMembers.find((m) => m.id === props.params.memberId);
    const { memberId } = use(props.params);  // 👈 Unwrap the promise
  const member = teamMembers.find((m) => m.id === memberId);

  
    if (!member) {
      return (
        <div className="bg-white container mx-auto px-4 py-12">
          Member not found
        </div>
      );
    }
  
    return (
      <div className="w-full bg-white">
        <div className="bg-white container mx-auto px-4 py-8 pt-20 max-w-5xl">
          <Link
            href="/about"
            className="inline-flex items-center text-[#67ac4d] hover:text-[#9ac34d] mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Team
          </Link>
  
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl font-bold text-[#38434d] mb-2">
                  {member.name}
                </h1>
                <h2 className="text-lg text-[#67ac4d] mb-3">{member.role}</h2>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="">
            <div className="bg-white rounded-xl shadow-sm px-6 py-2">
              <h3 className="text-lg font-semibold text-[#9ac34d] mb-4 ml-[-10px]">
                Professional Background
              </h3>
              <ul className="list-disc pl-6 space-y-4">
                {member.fullDescription.map((desc, index) => (
                  <li
                    key={index}
                    className="text-gray-700 py-1 pl-2 marker:text-[#67ac4d]"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
  
            {member.education && member.education.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm mt-8 mb-8 px-6 py-2">
                <h3 className="text-lg font-semibold text-[#38434d] mb-4">
                  Education & Industry Experience
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  {member.education.map((edu, index) => (
                    <li
                      key={index}
                      className="text-gray-700 py-1 pl-2 marker:text-[#9ac34d]"
                    >
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }