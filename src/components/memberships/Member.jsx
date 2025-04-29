"use client"
import Image from "next/image";
import Link from 'next/link';

export default function Partners() {
  const channels = [
    { name: "Internationa Trademark Association", logo: "/inta.jpeg", link: "https://www.vaakassociates.com/" },
    { name: "oraganization for an International Geographical Indications Network", logo: "/Origin.png", link: "https://hotelmoksha.in/" },
    { name: "ASSIAN PATENT ATTORNEYS ASSOCIATION", logo: "/logo2.png", link: "https://thelegalone.in/" },
   
  ];

  return (
    <section className="py-16 px-4 md:px-6 overflow-hidden bg-white">
    <div className="max-w-full mx-auto">
    <h2 className="md:text-3xl text-center text-3xl font-bold text-black mb-16">
    Memberships
        </h2>

      <div className="relative w-full space-y-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...channels, ...channels].map((channel, index) => (
            <div
              key={`${channel.name}-${index}`}
              className="mx-8 flex items-center justify-center min-w-[140px] relative"
            >
              <Link href={channel.link} target="_blank">
                <Image
                  src={channel.logo}
                  alt={`${channel.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
                <div className="absolute bottom-8 left-0 right-0 text-white opacity-0 text-center py-1 hover:opacity-50 hover:bg-slate-700 ">
                  {channel.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .marquee-track {
        animation: marquee 20s linear infinite alternate;
        min-width: fit-content;
      }
    `}</style>
  </section>
  );
}