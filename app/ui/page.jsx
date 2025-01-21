"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CgWebsite } from "react-icons/cg";

const highlight1 = [
    {
        num: "01",
        category: "Video Game Project",
        title: "Terranex Agriculture Platform",
        description: "Terranex is a cutting-edge farm management platform designed to tackle the challenges small and medium-sized farms face in Catalonia, Spain.",
        stack: [{ name: "Microsoft Excel" }, { name: "Google Slides" }, { name: "Figma" }, { name: "Photoshop" }, { name: "React" },],
        image: "/assets/work/TerranexShort.png",
        live: "https://shadow-wizard-games.github.io/Alien-Nemesis-Website/index.html",
        github: "https://github.com/Shadow-Wizard-Games/TheOneEngine",
    },
    // Add more featured projects if needed
];

const highlight2 = [
    {
        num: "03",
        category: "UI/UX Design Project",
        title: "Minted",
        description: "Minted is an in-production ticket resell application for students available on both IOS & Android devices. The product is an application that allows users to re-sell their ticket entries to clubs, concerts, private events & more, all in an easy to use and intuitive way. ",
        stack: [{ name: "FlutterFlow" }, { name: "Firebase" }, { name: "Stripe" }, { name: "Google API's" }],
        image: "/assets/work/minted.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vTE381nkor09xuH4XrNJQyMgvnPa0dNorb1Lkd6aeM6d2nayW3PBJdV_CPzFFFmdpYtnty-5qO9ZF6W/pub?start=false&loop=false&delayms=10000",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vTE381nkor09xuH4XrNJQyMgvnPa0dNorb1Lkd6aeM6d2nayW3PBJdV_CPzFFFmdpYtnty-5qO9ZF6W/pub?start=false&loop=false&delayms=10000",
    },
    // Add more featured projects if needed
];

const highlight4 = [
    {
        num: "04",
        category: "UI/UX Design Project",
        title: "Edu.Cation",
        description: "Edu.Cation is a learning app that helps to revolutionize the education space. Incorporating fun & practicality to help teachers send their learning home.",
        stack: [{ name: "Figma" }, { name: "Google Slides" }],
        image: "/assets/work/edu.cation2.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vTJUC_VmrFcPBi26BB6Ekuro1cC8ffbbWhU_r6R3gdbUV7gaN4-O11v5V2Rk2JsAF9EY0uyH0iqoWBE/pub?start=false&loop=false&delayms=10000",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vTJUC_VmrFcPBi26BB6Ekuro1cC8ffbbWhU_r6R3gdbUV7gaN4-O11v5V2Rk2JsAF9EY0uyH0iqoWBE/pub?start=false&loop=false&delayms=10000",
    },
    // Add more featured projects if needed
];

const highlight5 = [
    {
        num: "01",
        category: "UI/UX Design Project",
        title: "Primavera Pulse",
        description: "Primavera Pulse serves as a gamified app companion for the global music festival: Primavera Sound. Using gamified mechanics users can explore & enjoy the festival more, with nice rewards! Development is currently in the UI Demo stage, attached below is the figma prototype!",
        stack: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Excel" }, { name: "Google Slides" }],
        image: "/assets/work/PrimaveraShort.png",
        live: "https://www.figma.com/proto/Lw3BcdaDKPdpsI7yrEcaTz/Primavera-Pulse?node-id=2-545&t=TqmqKKVTSYVCKREP-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A545&show-proto-sidebar=1",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vQ4OOGAp8degVyu6s6ZQam5bzvV003IzNlAJzUXgv6xE5x6Fnj0sUQ70bbtuGCEAG_2jJ-cnFsA_DI3/pub?start=false&loop=false&delayms=3000",
        completion: "4 Weeks",
    },
    // Add more featured projects if needed
];



const UI = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"} }} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            
            <div className='container mx-auto'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                UI / UX Projects
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-accent"></div>
                </div>

                <Tabs defaultValue="category-2" className="flex flex-col">
                    <TabsList className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center">
                        <TabsTrigger value="category-1">Primavera Pulse App</TabsTrigger>
                        <TabsTrigger value="category-2">Terranex Platform</TabsTrigger>
                        <TabsTrigger value="category-3">Minted App</TabsTrigger>
                        <TabsTrigger value="category-4">Edu.Cation App</TabsTrigger>
                    </TabsList>

                    <TabsContent value="category-1" className="mt-8">
                        <ProjectDisplay projects={highlight5} />
                    </TabsContent>
                    <TabsContent value="category-2" className="mt-8">
                        <ProjectDisplay projects={highlight1} />
                    </TabsContent>
                    <TabsContent value="category-3" className="mt-8">
                        <ProjectDisplay projects={highlight2} />
                    </TabsContent>
                    <TabsContent value="category-4" className="mt-8">
                        <ProjectDisplay projects={highlight4} />
                    </TabsContent>
                </Tabs>
            </div>
        </motion.section>
    );
}

const ProjectDisplay = ({ projects }) => {
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-6 w-full">
                    {/* Project Image with Overlay Buttons */}
                    <div className="relative w-full h-[300px]">
                        {/* Project Image */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                            priority={index === 0} // Set priority for the first image
                        />
                    </div>

                    {/* Project Info */}
                    <div className="w-full flex flex-col gap-4 text-left">
                        <div className="flex flex-row gap-4 justify-between">
                            <h2 className="text-[42px] font-extrabold text-transparent text-outline font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <div className="flex flex-row gap-8 align-center justify-middle">
                                <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-2">
                                View:
                                </h3>
                                <div className="flex flex-col gap-4 justify-start">
                                    <div className="w-full flex flex-row gap-4 text-left">
                                    <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[50px] h-[50px] rounded-full group flex justify-center items-center bg-white/5 backdrop-blur-md"
                                        >
                                            <CgWebsite className="text-white text-2xl group-hover:text-accent" />
                                            <span className="sr-only">Live Project</span>
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[50px] h-[50px] rounded-full group flex justify-center items-center bg-white/5 backdrop-blur-md"
                                        >
                                            <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                            <span className="sr-only">GitHub Repository</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-accent mt-0 text-[16px]">{project.role}</p>
                        <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-2">
                            Project Overview
                        </h3>
                        <p className="text-white/60">{project.description}</p>
                        <div className="flex flex-row gap-4 justify-between">
                                <div className="flex flex-col gap-4 justify-start">
                                    <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-2">
                                        Tech Stack
                                    </h3>
                                    <ul className="flex flex-wrap gap-4 justify-start">
                                        {project.stack.map((item, index) => (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4 justify-end">
                                    <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                        Work Time
                                    </h3>
                                    <p className="text-white/80 text-[16px]">{project.completion}</p>
                                </div>
                        </div>
                        <div className="border border-white/20 my-6 mb-40"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default UI;
