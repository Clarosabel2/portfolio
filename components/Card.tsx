"use client";
import Image from "next/image"
import React from "react";
import Button from "./Button"
import { useSpring, animated } from '@react-spring/web';
import { FiGithub } from "react-icons/fi";
import { MdOutlineWebAsset } from "react-icons/md";
import { useInView } from 'react-intersection-observer';
import Item from "./Item";
import { Project} from "@/data";

interface CardProps{
    proyect:Project;
}

export default function Card({proyect}:CardProps){

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5,
    });

    const styles = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(100px)',
        config: { tension: 300, friction: 20 },
    });

    const imageStyles = useSpring({
        filter: inView ? 'blur(0px)' : 'blur(1.5px)',
        config: { tension: 300, friction: 20 },
    });

    return(
        <animated.div 
            ref={ref}
            style={styles}
            className="w-[90vw]lg:w-[55vw] flex flex-col lg:flex-row relative overflow-auto gap-2 lg:gap-7 items-center"
        >
            <section className="lg:w-2/4 flex items-center justify-center overflow-hidden relative ">
                <animated.div style={imageStyles} className="w-[90vw] max-w-[38rem] h-[18rem]">
                    <Image src={proyect.src} alt='Image Project' layout="fill" className="object-cover w-full h-full rounded-xl shadow-lg"/>
                </animated.div>
            </section>
            <section className="lg:w-2/4 flex gap-2 flex-col lg:p-2 max-w-[38rem]">
                <h1 className="text-3xl"><strong>{proyect.name}</strong></h1>
                <div className="flex gap-2">
                    {proyect.technologies.map((i)=>(
                        <Item key={i.name} name={i.name} color={i.color} icon={i.icon}/>
                    ))}
                </div>
                <p>{proyect.description}</p>
                <div className="flex gap-2">
                    <Button name='Code' icon={FiGithub} href={proyect.href}/>
                    {proyect.demo !== "" ? (
                        <Button name='Preview' icon={MdOutlineWebAsset} href={proyect.demo} />
                    ) : null}
                </div>
            </section>
        </animated.div>
    )
}