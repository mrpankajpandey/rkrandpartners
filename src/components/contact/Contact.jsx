'use client'
import React, {useState} from "react";
import Image from "next/image";
import msg from "@/components/contact/assets/message.jpg"
// import { Input } from "@nextui-org/react";
// import { Textarea } from "@nextui-org/react";
// import { Button } from "../ui/button";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    return (
        <>
            <div className="bg-white py-20 px-10 lg:px-72">
                <h1 className="text-[#38434d] text-5xl lg:text-6xl font-extrabold pb-10 uppercase text-center">Get In Touch</h1>
                <div className="flex flex-col-reverse lg:flex-row-reverse  justify-around items-center  md:py-10 lg:py-10 lg:gap-32">
                    <div className="w-full h-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col items-start justify-center gap-5 pt-5">
                        <h1 className="text-[#38434d] text-3xl font-bold text-start bg-white uppercase">Contact us</h1>
                        <input type="text" color="secondary" label="Name" variant="bordered" className="text-[#38434d] border rounded-md" value={name} onChange={(e)=>setName(e.target.value)} />
                        <input type="email" color="secondary" label="Email *" variant="bordered" className="text-[#38434d] border rounded-md" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <textarea type="text" color="secondary" label="Message *" variant="bordered" className="text-[#38434d] border rounded-md" required value={message} onChange={(e)=>setMessage(e.target.value)} />
                        <button size="lg" className="text-white px-4 py-2 bg-[#1c398e] rounded-md text-base active:scale-75 transform duration-400">Send</button>
                    </div>
                    <div className="h-96 w-96 flex items-center justify-center ">
                        <Image className="rounded-full" height={360} width={444} src="/contact-bg.jpg" alt="Image" />
                    </div>
                </div>
            </div>
        </>
    )
}