import About from "@/components/about-hero/About";
import ChooseUs from "@/components/chooseUs/ChooseUs";
import Hero from "@/components/hero/Hero";
import Location from "@/components/Locations/Location";
import Member from '@/components/memberships/Member'
import Works from "@/components/works/Works";


export default function Home() {
  return (
    <>
    <div className="font-sans overflow-hidden">
      <Hero />
      <About />
      <Member/>
      <ChooseUs/>
      <Works/>
      <Location/>
      </div>
    </>
  );
}
