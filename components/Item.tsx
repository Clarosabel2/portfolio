import React from 'react'

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
      <img src={icon} alt={`${name} icon`} className="w-4 h-4" />  
      <p className={`${textColor}`}>{name}</p>
    </span>
  );
}
