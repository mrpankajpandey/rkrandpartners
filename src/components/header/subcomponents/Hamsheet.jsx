"use client"

import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
export default function HamSheet() {
    const handleLinkClick = () => {
        document.querySelector('[data-state="open"]').click();
    };
    
    const menu=[
        {
            name: "Home",
            path: "/",
          },
          { name: "About Us", path: "/about" },
          { name: "People", path: "/service" },
          { name: "Areas of Practice", path: "#1" },
          { name: "Knowledge Bank", path: "#2" },
          { name: "Contact", path: "#3" },
    ]

    return (
        <div className="absolute z-[100]">
            <Sheet variant="right">
                <SheetTrigger>
                    <Menu color="#1c398e" size={"40"} />
                </SheetTrigger>
                <SheetContent className="bg-transparent backdrop-blur-[8px]">
                    <SheetHeader>
                   
                        <SheetDescription className="pt-20 px-10 flex flex-col gap-4">

                         {
                            menu.map((links,idx)=>(
                                <Link key={idx} onClick={handleLinkClick} href={links.path}><Button className="w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-blue-900" variant="outline ">{links.name}</Button></Link>
                            ))
                         }
                            
                          
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}