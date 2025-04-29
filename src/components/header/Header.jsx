import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/header/assets/logo.png"
import Navbar from "./subcomponents/Navbar";
import Hambar from "./subcomponents/Hambar";

export default function Header(){
    return(
        <>
            <div className="bg-white w-full fixed z-50 flex items-center justify-between py-2 px-5 lg:px-20 backdrop-blur-2xl">
                <Link href="/">
                <div className="flex gap-2">
                    <Image className="h-10 w-10" alt="Logo" src={Logo}/>
                    <div className="flex flex-col items-center justify-center mt-1">
                        <h5 className="text-blue-900 text-[20px] leading-5 font-bold">RKR & PARTNERS</h5>
                        <h5 className="text-blue-800 text-[8px] font-medium">INTELLECTUAL PROPERTY  ATTORNEY</h5>
                    </div>
                </div>
                </Link>
                <Navbar/>
                <Hambar/>
            </div>
        </>
    )
}