import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  name: string;
  href: string;
  icon: IconType;
}

export default function Button({ name, icon: Icon,href }: ButtonProps) {
  return (
    <span className="social-item flex items-center gap-2 bg-slate-700 p-1 rounded-2xl pl-2 pr-2 cursor-pointer 
                      select-none border border-solid border-slate-500">
      <a href={href} target="_blank" className="flex items-center gap-2"><Icon /> {name}</a>
    </span>
  );
}
