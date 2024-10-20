import React from 'react'
import Image from 'next/image';

interface ItemProps{
  name:string,
  color: string,
  icon:string
}

export default function Item({ name, color,icon }: ItemProps) {

  const textColor = (color === "#fff" || color === "#ffffff") ? "text-black" : "text-white";

  return (
    <span
      className="rounded-2xl pl-2 pr-2 flex gap-1 w-auto text-sm items-center justify-center select-none"
      style={{ backgroundColor: color }}
    >
      <Image src={icon} alt={`${name} icon`} className="w-4 h-4" width={100} height={100}/>  
      <p className={`${textColor}`}>{name}</p>
    </span>
  );
}
