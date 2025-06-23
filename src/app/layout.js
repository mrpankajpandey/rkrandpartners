import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RKR & Partners",
  description: "RKR & Partners is a leading law firm in India, specializing in corporate law, litigation, and intellectual property rights. Our team of experienced lawyers provides comprehensive legal services to clients across various sectors.",

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>

     
        {children}
        <div className="fixed bottom-12 left-12 cursor-pointer z-50 flex justify-center items-center">
        <Link href="#">
      <img className="block h-20 w-20" title="WhatsApp us" id="style-99" src="https://vakeelsahabup.com/wp-content/uploads/2021/12/372108180_WHATSAPP_ICON_400.gif" alt="WhatsApp us"/>
        </Link>
      </div>

      
        <Footer/>
      </body>
    </html>
  );
}
