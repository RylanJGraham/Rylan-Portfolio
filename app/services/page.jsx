"use client";

import {BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Video Game Design & Development',
        description: 'Experience in Video Game Development with AI Logic, Assets, Shaders, Environments, Particles, Game Systems, Game Economies, and Player Functionality.',
        href: "",
    },
    {
        num: '02',
        title: 'Full Stack Mobile/Web Development',
        description: 'Experience creating responsive, clean, and fast web/app software. Front and Back End experience, APIs, Augmented Reality Implementation, Location Services & more!',
        href: "",
    },
    {
        num: '03',
        title: 'UX/UI Design',
        description: 'Development of clean, adaptive, and stylized user experiences in applications, video games, and Automotive displays using industry leading tools & softwares.',
        href: "",
    },
    {
        num: '04',
        title: '3D Art & Animation',
        description: '3D environment work, model animation, texture painting, particle & shader work. Experience with full work flow, Modeling, UVs, Rigging, Textures & Animations',
        href: "",
    }
];

import {motion} from "framer-motion";
import { SectionIcon } from "lucide-react";


const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease:"easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl fontextrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
                            {/* description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services