'use client';
import { useEffect } from "react";
import { TiHome } from "react-icons/ti";

export default function Header() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <header className="w-full fixed z-30">
        <nav className="relative flex justify-center items-center z-20 w-auto mx-auto h-8 mt-2">
          <ul className="absolute flex gap-4 w-auto items-center justify-center backdrop-blur-2xl rounded-xl pl-2 pr-2">
              <li><a href="#" className="border-b-2 border-transparent hover:border-slate-300 hover:text-slate-300 duration-500 transition-all ease-in-out flex"><TiHome size={30}/></a></li>
              <li><a href="#" className="border-b-2 border-transparent hover:border-slate-300 hover:text-slate-300 duration-500 transition-all ease-in-out flex">Proyectos</a></li>
              <li><a href="#" className="border-b-2 border-transparent hover:border-slate-300 hover:text-slate-300 duration-500 transition-all ease-in-out flex whitespace-nowrap">Sobre mí</a></li>
              <li><a href="#" className="border-b-2 border-transparent hover:border-slate-300 hover:text-slate-300 duration-500 transition-all ease-in-out flex">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  