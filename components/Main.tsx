import Image from 'next/image';
import Button from './Button';
import { FaGithub,FaLinkedin, FaInstagram} from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import Card from './Card';
import { proyects } from "../data"

export default function Main(){
    return(
        <main className="w-full h-auto relative flex justify-center items-center flex-col">
            <section className="w-[70%] flex flex-col md:flex-row justify-center items-center gap-10 h-screen bg-red-300">
                <article className='lg:size-1/2 flex items-center'>
                    <Image src="/dev-fullstack.png" alt='dev' width={400} height={500} className='object-cover w-[400px] h-auto' layout='resposive'/>
                </article>
                <article className='flex flex-col'>
                    <h1 className='text-6xl'>Abel Claros</h1>
                    <p className='pt-10 text-2xl text-center mb-7'>Desarrollador Full Stack</p>
                    <article className='w-full flex gap-2 mt-2 justify-between'>
                        <Button name='Linkedin' icon={FaLinkedin} href='https://www.linkedin.com/in/abel-claros'/>
                        <Button name='Github' icon={FaGithub} href='https://github.com/Clarosabel2'/>
                        <Button name='Instagram' icon={FaInstagram} href='https://www.instagram.com/clarosabel_/'/>
                    </article>
                </article>
            </section>
            <section className='w-[95%] lg:w-[70%] h-auto'>
                <h1 className='text-4xl pb-6 flex gap-2'><HiCode/>Proyectos</h1>
                <article className='w-full h-auto gap-10 flex flex-col items-center'>
                    {proyects.map((p) => (
                        <Card key={p.name} proyect={p}/>
                    ))}
                </article>
            </section>
        </main>
    )
}