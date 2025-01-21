"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CgWebsite } from "react-icons/cg";

const highlight1 = [
    {
        num: "01",
        category: "Video Game Project",
        title: "Alien: Nemesis",
        description: "Alien: Nemesis is a fast paced shooter with exploration, narrative, & fast paced combat. Developed by Shadow Wizard Games Studios, a team of 23 students at CITM-UPC, on their proprietary game engine: TheOneEngine",
        stack: [{ name: "C++" }, { name: "Maya" }, { name: "Adobe Substance" }, { name: "OpenGL" }, { name: "Photoshop" }, { name: "Figma" }, { name: "Wwise" }],
        image: "/assets/work/AlienNemesis.gif",
        live: "https://shadow-wizard-games.github.io/Alien-Nemesis-Website/index.html",
        github: "https://github.com/Shadow-Wizard-Games/TheOneEngine",
    },
    // Add more featured projects if needed
];

const highlight2 = [
    {
        num: "02",
        category: "Video Game Project",
        title: "HyperStrike",
        description: "HyperStrike is a fast-paced 5v5 multiplayer game where the players must score a ball inside the other team's goal while each player has a character with high mobility movement that allows players to run on the walls, obstacles, and much more in the stadium. The game is built using both UDP & TCP Protocols with interpolation, & predictive state synchronization",
        stack: [{ name: "Unity Engine" }, { name: "UD-Protocol" }, { name: "TC-Protocol" }, { name: "Maya" }, { name: "Adobe Substance" }, { name: "Mixamo" },],
        image: "/assets/work/HyperStrikeLogo.png",
        live: "https://github.com/Historn/NetworksProject",
        github: "https://github.com/Historn/NetworksProject",
    },
    // Add more featured projects if needed
];

const highlight3 = [
    {
        num: "03",
        category: "VertX Game Engine",
        title: "VertX Game Engine",
        description: "Fully functional Game Engine developed using OpenGL framework, with additional libraries. Supports FBX rendering, texturing, Game Objects management, camera controls as of latest release.",
        stack: [{ name: "C++" }, { name: "OpenGL" }, { name: "SDL2" }, { name: "GLEW" }, { name: "GLM" }, { name: "Assimp" }, { name: "ImGui" }, { name: "devIL" }, { name: "Visual Studio" }, { name: "Github" }, ],
        image: "/assets/work/VertX.gif",
        live: "https://citm-upc.github.io/VertX-Game-Engine/",
        github: "https://github.com/CITM-UPC/VertX-Game-Engine",
    },
    // Add more featured projects if needed
];

const highlight4 = [
    {
        num: "04",
        category: "Game AI",
        title: "Game AI",
        description: "Exercises in Unity Environments created to highlight usage of Game AI. Behaviors featured include Pathfinding, Random Wandering, Flocking, Behavior Bricks, and Camera Frustrum Detection.",
        stack: [{ name: "C#" }, { name: "Unity" }, { name: "Maya" }, { name: "Python" }, { name: "Github" },],
        image: "/assets/work/gameai.gif",
        live: "https://rylanjgraham.github.io/GameAI_Exercises/",
        github: "https://github.com/RylanJGraham/GameAI_Exercises",
    },
    // Add more featured projects if needed
];

const highlight5 = [
    {
        num: "05",
        category: "Unity Audio Systems Demonstration",
        title: "Unity Audio Systems Demonstration",
        description: "Unity scene demonstrating proper usage of spatial audio, track-blending, atmospheric audio, track-layer, audio-mixing, and region specific filtering.",
        stack: [{ name: "C++" }, { name: "Unity" }, { name: "Github" }, { name: "Visual Studio" }, { name: "C#" }],
        image: "/assets/work/DigitalAudio.gif",
        live: "https://play.unity.com/mg/other/webgl-builds-404826",
        github: "https://github.com/AdriaPm/DigitalAudio_UnityScene",
    },
    // Add more featured projects if needed
];

const highlight6 = [
    {
        num: "06",
        category: "Worms Replica",
        title: "Worms Replica",
        description: "Worms game title replica. Physics Engine was original and created using classroom learnings. Concepts: Drag Force, Projectile Motion, Ballistics, & Gravitational Elements.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }],
        image: "/assets/work/Worms.png",
        live: "https://github.com/Historn/WormsGameProject",
        github: "https://github.com/Historn/WormsGameProject",
    },
    // Add more featured projects if needed
];

const highlight7 = [
    {
        num: "07",
        category: "The ToyBox",
        title: "The ToyBox",
        description: "8 man RPG project, complete with fully operational UI, Combat, Exploration & more. Developed by hand drawn artwork. Expected Launch May 2023. Culminating Year 2 Degree Project.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }, { name: "Figma" }, { name: "Photoshop" }, { name: "Mondays" }, ],
        image: "/assets/work/toyboxgif.gif",
        live: "https://fun-makers-studios.github.io/Project2_TheToyBox/",
        github: "https://github.com/Fun-Makers-Studios/Project2_TheToyBox",
    },
    // Add more featured projects if needed
];

const highlight8 = [
    {
        num: "08",
        category: "Beta Release",
        title: "UDP & TCP Connections",
        description: "Unity scene with UDP & TCP lobby connection for Client-Server. Player is located in server room, wit room creation supporting Room Naming, Usernames, Custom IP Address, User Port Information, & Active Users. Also provides real-time Client to Client Messaging via Server Routing. Able to support multiple client connections to the same server via multithreading based on users.",
        stack: [{ name: "Unity" }, { name: "C++" }, { name: "UDP" }, { name: "TCP" }, ],
        image: "/assets/work/Sockets.png",
        live: "https://github.com/RylanJGraham/Connections_UnityExercise",
        github: "https://github.com/RylanJGraham/Connections_UnityExercise",
    },
    // Add more featured projects if needed
];

const highlight9 = [
    {
        num: "09",
        category: "Retro Pinball",
        title: "Retro Pinball",
        description: "Game created using Box2D Physics Libraries and SDL Libraries on Microsoft Visual Studio. Created to demonstrate collision physics understanding.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }, { name: "Box2D" }, { name: "Photoshop" } ],
        image: "/assets/work/pinballgif.gif",
        live: "https://github.com/AdriaPm/Pinball-Game",
        github: "https://github.com/AdriaPm/Pinball-Game",
    },
    // Add more featured projects if needed
];

const highlight10 = [
    {
        num: "10",
        category: "Snow Race",
        title: "Snow Race",
        description: "Simple 3D racing car game created for Physics II subject at CITM-UPC university. Using Bullet3D collision and aerodynamic forces. OpenGL rendering for game & camera elements. ",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }, { name: "Bullet3D" }, { name: "OpenGL" } ],
        image: "/assets/work/car.png",
        live: "https://github.com/AdriaPm/RaceCarGame3D",
        github: "https://github.com/AdriaPm/RaceCarGame3D",
    },
    // Add more featured projects if needed
];

const highlight11 = [
    {
        num: "11",
        category: "WindJammers Replica",
        title: "WindJammers Replica",
        description: "WindJammers replica game created as first video game project at CITM-UPC university. Created using C++, SDL2, and title original sprites.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" },],
        image: "/assets/work/windjammers.gif",
        live: "https://github.com/AdriaPm/RaceCarGame3D",
        github: "https://github.com/AdriaPm/RaceCarGame3D",
    },
    // Add more featured projects if needed
];



const Videogames = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"} }} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            
            <div className='container mx-auto'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                Videogame Projects
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-accent"></div>
                </div>

                <Tabs defaultValue="category-2" className="flex flex-col">
                    <TabsList className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center">
                        <TabsTrigger value="category-1">Alien: Nemesis</TabsTrigger>
                        <TabsTrigger value="category-2">HyperStrike</TabsTrigger>
                        <TabsTrigger value="category-3">VertX Engine</TabsTrigger>
                        <TabsTrigger value="category-4">Game AI</TabsTrigger>
                        <TabsTrigger value="category-5">Unity Audio</TabsTrigger>
                        <TabsTrigger value="category-6">Worms</TabsTrigger>
                        <TabsTrigger value="category-7">The ToyBox</TabsTrigger>
                        <TabsTrigger value="category-8">UDP-TCP</TabsTrigger>
                        <TabsTrigger value="category-9">8bit Pinball</TabsTrigger>
                        <TabsTrigger value="category-10">Snow Race</TabsTrigger>
                        <TabsTrigger value="category-11">WindJammers</TabsTrigger>
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
                    <TabsContent value="category-7" className="mt-8">
                        <ProjectDisplay projects={highlight7} />
                    </TabsContent>
                    <TabsContent value="category-8" className="mt-8">
                        <ProjectDisplay projects={highlight8} />
                    </TabsContent>
                    <TabsContent value="category-9" className="mt-8">
                        <ProjectDisplay projects={highlight9} />
                    </TabsContent>
                    <TabsContent value="category-10" className="mt-8">
                        <ProjectDisplay projects={highlight10} />
                    </TabsContent>
                    <TabsContent value="category-11" className="mt-8">
                        <ProjectDisplay projects={highlight11} />
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



export default Videogames;
