import type { Metadata } from "next";
import {Urbanist} from "next/font/google"
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css"

const urbanist = Urbanist({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Landing page made by Abel"
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="relative h-full w-full bg-slate-950">
      <body className={urbanist.className}>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] pointer-events-none"/>
        <Header/>
        <Main/>
        <Footer/>
        {children}
      </body>
    </html>
    
  );
}
