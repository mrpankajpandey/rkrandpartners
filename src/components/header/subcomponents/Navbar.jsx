"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (route) => pathname === route;
  const Menu = [
    {
      name: "Home",
      path: "/",
    },
    { name: "About Us", path: "/about" },
    { name: "People", path: "/service" },
    { name: "Areas of Practice", path: "#1" },
    { name: "Knowledge Bank", path: "#2" },
    { name: "Contact", path: "#3" },
  ];

  return (
    <div className="hidden md:block lg:block">
      <div className="flex gap-10">
        {Menu.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`relative text-sm captalize p-1 transition-all duration-300 ${
              isActive(link.path)
                ? "text-blue-900 font-bold scale-125"
                : "text-gray-600 font-semibold scale-100"
            } group`}
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
