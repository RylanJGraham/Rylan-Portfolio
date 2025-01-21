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
        category: "Beta Release",
        title: "PokéRest",
        description: "PokéRest is a full-stack web application created in 6 hrs using Next.js, TypeScript, Shadcn-UI, and restAPI calls to PokeAPI. The project features dynamic routing, search filtering, clean UI, and optimized API retrievals to ensure a functional and superb user experience.",
        stack: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Shadcn" }, { name: "restAPI" }, { name: "Tailwind" }],
        image: "/assets/work/poke.png",
        live: "https://pokerest-app.vercel.app/",
        github: "https://github.com/RylanJGraham/pokerest",
    },
    // Add more featured projects if needed
];

const highlight2 = [
    {
        num: "02",
        category: "3D Art & Animation",
        title: "Qatar 2022 Data-Vis",
        description: "The Qatar 2022 Data Visualization is a web application created to demonstrate Argentina's path to victory in the 2022 Fifa World Cup from a data standpoint. Developed using React, in combination with Material UI, X-Charts, and ReCharts, the web app hopes to provide users with a clean and intuitive data journey throughout the tournament. Check it out!",
        stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Material UI" }, { name: "X-Charts" }, { name: "ReCharts" }, { name: "Kaggle" }, { name: "Excel" }, { name: "Figma" },],
        image: "/assets/work/QatarFull.png",
        live: "https://worldcup2022datavisualized.vercel.app",
        github: "https://github.com/RylanJGraham/world_cup_2022_datavisualized",
    },
    // Add more featured projects if needed
];

const highlight3 = [
    {
        num: "03",
        category: "Beta Release",
        title: "CulinARy",
        description: "WeatherTune is a sleek and intuitive weather forecast app developed by a team of four students from CITM-UPC University. Stay ahead of the weather with accurate forecasts and a delightful user experience.",
        stack: [{ name: "Unity" }, { name: "C++" }, { name: "C#" }, { name: "Vuforia AR" }, { name: "Firebase" },],
        image: "/assets/work/culinary.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vR9q7x3w2LP341kqw8nD46yVIxdH2BqrM2SisEVlhsX0PatrdA16s_s5U2EJNFikF_v3SLrOPccUsze/pub?start=true&loop=false&delayms=10000",
        github: "https://github.com/RylanJGraham/CulinARy",
    },
    // Add more featured projects if needed
];

const highlight4 = [
    {
        num: "04",
        category: "Beta Release",
        title: "WeatherTune",
        description: "WeatherTune is a sleek and intuitive weather forecast app developed by a team of four students from CITM-UPC University. Stay ahead of the weather with accurate forecasts and a delightful user experience.",
        stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Figma" }, { name: "Firebase" }, { name: "BLOC" }, { name: "Rapid API" }, { name: "Google API" }],
        image: "/assets/work/WeatherTune2.png",
        live: "https://github.com/RylanJGraham/WeatherTune",
        github: "https://github.com/RylanJGraham/WeatherTune",
    },
    // Add more featured projects if needed
];

const highlight5 = [
    {
        num: "05",
        category: "Beta Release",
        title: "SummAIrize",
        description: "Article Summarizer built using OpenAI GPT model, Takes article url and provides a concise summary.​",
        stack: [{ name: "React" }, { name: "Open-AI" }, { name: "Vite" }, { name: "RTK Query" }, { name: "Tailwind" }, { name: "JavaScript" },],
        image: "/assets/work/summaraize.gif",
        live: "https://iridescent-blancmange-7bcd57.netlify.app/",
        github: "https://github.com/RylanJGraham/AI-ArticleSummarizer",
    },
    // Add more featured projects if needed
];

const highlight6 = [
    {
        num: "06",
        category: "Beta Release",
        title: "AI Voice Assistant (In-Progress)",
        description: "Mobile application integrated with voice recognition & GPT4 and DallE API user prompting. Ask away!",
        stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Rapid API" }, { name: "JavaScript" }, { name: "Dall-E" }, { name: "OpenAI" }, ],
        image: "/assets/work/voice.png",
        live: "https://github.com/RylanJGraham/AI-Assistant",
        github: "https://github.com/RylanJGraham/AI-Assistant",
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
                 Full Stack Dev Projects
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-accent"></div>
                </div>

                <Tabs defaultValue="category-2" className="flex flex-col">
                    <TabsList className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center">
                        <TabsTrigger value="category-1">PokéRest</TabsTrigger>
                        <TabsTrigger value="category-2">World Cup Dashboard</TabsTrigger>
                        <TabsTrigger value="category-3">Culinary</TabsTrigger>
                        <TabsTrigger value="category-4">WeatherTune</TabsTrigger>
                        <TabsTrigger value="category-5">SummAIrize</TabsTrigger>
                        <TabsTrigger value="category-6">AI Assistant</TabsTrigger>
                    </TabsList>

                    <TabsContent value="category-1" className="mt-8">
                        <ProjectDisplay projects={highlight1} />
                    </TabsContent>
                    <TabsContent value="category-2" className="mt-8">
                        <ProjectDisplay projects={highlight2} />
                    </TabsContent>
                    <TabsContent value="category-3" className="mt-8">
                        <ProjectDisplay projects={highlight3} />
                    </TabsContent>
                    <TabsContent value="category-4" className="mt-8">
                        <ProjectDisplay projects={highlight4} />
                    </TabsContent>
                    <TabsContent value="category-5" className="mt-8">
                        <ProjectDisplay projects={highlight5} />
                    </TabsContent>
                    <TabsContent value="category-6" className="mt-8">
                        <ProjectDisplay projects={highlight6} />
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
                        </div>
                        <div className="border border-white/20 my-6 mb-40"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default UI;
