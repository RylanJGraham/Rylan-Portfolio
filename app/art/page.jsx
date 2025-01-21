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
        category: "3D Art & Animation",
        title: "Studio Ghibli 3D Environment",
        description: "3D Environment created using the Unity Engine, inspired by the Studio Ghibli film: Spirited Away. Explore the scene, with fbx's created using Maya, and painted with Substance Painter & Z-brush. FBX models created following protocols for tri-management, featuring LOD detailing, & more! Custom Camera optimization and shader rendering through scripting using C++.",
        stack: [{ name: "Maya" }, { name: "Unity" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "C#" }],
        image: "/assets/work/ghibli.gif",
        live: "https://rylangraham02.wixsite.com/website/team-1",
        github: "https://github.com/RylanJGraham/Unity_Scene-Spirited-Away",
    },
    // Add more featured projects if needed
];

const highlight2 = [
    {
        num: "02",
        category: "3D Art & Animation",
        title: "Mummy FBX Animations",
        description: "FBX model animations created in Maya. Completed FBX rigging, using joints & skeletal structuring. Completed animations using fundamentals of animation, all while maintaining model integrity.",
        stack: [{ name: "Maya" }, { name: "Unity" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "C#" }],
        image: "/assets/work/kingtut.gif",
        live: "https://github.com/RylanJGraham/3D_Animations_Unity",
        github: "https://github.com/RylanJGraham/3D_Animations_Unity",
    },
    // Add more featured projects if needed
];

const highlight3 = [
    {
        num: "03",
        category: "Raikou Textured FBX",
        title: "Raikou Textured FBX",
        description: "Low-poly model and high poly modeling on 3DS-Max. Painting on Zbrush, unwrapping and lighting using UVLayout and 3DSMAX. ",
        stack: [{ name: "3DS Max" }, { name: "Substance Painter" }, { name: "Blender" }, { name: "Zbrush" }],
        image: "/assets/work/raikou.jpg",
        live: "https://docs.google.com/document/d/e/2PACX-1vQy6Co0dpBb8juPjImHzrmheLdkyvuH70GU3kPwEp8W2Av3AjBtfxpa6V371ALjzFABdO8j-lW13ixP/pub",
        github: "https://docs.google.com/document/d/e/2PACX-1vQy6Co0dpBb8juPjImHzrmheLdkyvuH70GU3kPwEp8W2Av3AjBtfxpa6V371ALjzFABdO8j-lW13ixP/pub",
    },
    // Add more featured projects if needed
];

const highlight4 = [
    {
        num: "04",
        category: "3D Art & Animation",
        title: "Penguin 2D Animation",
        description: "Collection of Hand-Drawn Animations completed over various timeframes. Work with Frame by Frame, Pegs, and more animation fundamentals.",
        stack: [{ name: "ToonBoom Harmony" }, { name: "Photoshop" }, { name: "Wacom Drawing Pad" }],
        image: "/assets/work/penguin.gif",
        live: "https://rylangraham02.wixsite.com/website/copy-of-lab-work",
        github: "https://rylangraham02.wixsite.com/website/copy-of-lab-work",
    },
    // Add more featured projects if needed
];

const highlight5 = [
    {
        num: "05",
        category: "3D Art & Animation",
        title: "Baker House",
        description: "​Painted Maya 3D model of island home. Project released on sketchfab complete with material maps, UV-layout, and model. Completed in 6 hours of work.",
        stack: [{ name: "Maya" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "Blender" }, { name: "Sketchfab" }],
        image: "/assets/work/bakerhouse.png",
        live: "https://sketchfab.com/3d-models/graham-rylan-diorama-ca883fbcfc714696a1e869d70d7a4a3b?utm_medium=embed&utm_campaign=share-popup&utm_content=ca883fbcfc714696a1e869d70d7a4a3b",
        github: "https://github.com/RylanJGraham/EnvironmentPracticeUnityScene",
    },
    // Add more featured projects if needed
];

const Art = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"} }} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            
            <div className='container mx-auto'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                 3D Art & Animation Projects
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-accent"></div>
                </div>

                <Tabs defaultValue="category-2" className="flex flex-col">
                    <TabsList className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center">
                        <TabsTrigger value="category-1">Studio Ghibli Environment</TabsTrigger>
                        <TabsTrigger value="category-2">Mummy Animations</TabsTrigger>
                        <TabsTrigger value="category-3">Raikou Model</TabsTrigger>
                        <TabsTrigger value="category-4">Penguin 2D Animation</TabsTrigger>
                        <TabsTrigger value="category-5">Baker House 3D Model</TabsTrigger>
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
                            unoptimized="true" // Unoptimized for animated GIFs
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



export default Art;
