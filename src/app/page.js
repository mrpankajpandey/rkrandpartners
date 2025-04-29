import About from "@/components/about/About";
import ChooseUs from "@/components/chooseUs/ChooseUs";
import Hero from "@/components/hero/Hero";
import Location from "@/components/Locations/Location";
import Member from '@/components/memberships/Member'
import Works from "@/components/works/Works";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div className="overflow-hidden"> */}
      <Hero />
      <About />
      <Member/>
      <ChooseUs/>
      <Works/>
      <Location/>
     
      
      {/* </div> */}
    </>
  );
}
