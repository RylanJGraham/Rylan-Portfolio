"use client";

import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { CgWebsite } from "react-icons/cg";


const tfg = [
    {
        num: "01",
        category: "Rauxa App",
        title: "Rauxa - Full Stack App",
        description: "The Tinder for Spontaneous Meetups! Rauxa is an innovative mobile app that helps users find events and connect with people based on their preferences and location. Built with a focus on real-time social interactions, event-based matchmaking, and user-friendly experiences, Rauxa aims to simplify event discovery and enhance social engagement. Built with a robust back-end, secure user authentification system, and ML matching algorithms, Rauxa aims to be Barcelona's student, tourist, and local's choice in social apps",
        stack: [{ name: "Expo" }, { name: "Firebase" }, { name: "Github" }, { name: "React Native" }, { name: "Figma" }, { name: "Mixamo" },],
        image: "/assets/work/TFG.png",
        live: "https://github.com/Historn/NetworksProject",
        github: "https://github.com/Historn/NetworksProject",
        completion: "6 Months",
    },
    // Add more featured projects if needed
];


const TFGDisplay = ({ projects }) => {
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-8 w-full items-start">
                    {/* Project Image as App Icon Style */}
                    <div className="w-[350px] h-[350px] relative flex-shrink-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="rounded-[100px] object-cover"
                            unoptimized
                        />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col gap-4 text-left w-full">
                        <div className="flex flex-row justify-between items-start gap-4">
                            <h2 className="text-[32px] lg:text-[42px] font-extrabold text-transparent text-outline leading-none group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <div className="flex gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white/5 backdrop-blur-md"
                                >
                                    <CgWebsite className="text-white text-2xl group-hover:text-accent" />
                                    <span className="sr-only">Live Project</span>
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white/5 backdrop-blur-md"
                                >
                                    <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                    <span className="sr-only">GitHub Repository</span>
                                </a>
                            </div>
                        </div>

                        <p className="text-accent text-[16px]">{project.role}</p>

                        <div>
                            <h3 className="text-[18px] font-bold text-white capitalize">Project Overview</h3>
                            <p className="text-white/60">{project.description}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between gap-6">
                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-[18px] font-bold text-white capitalize">Tech Stack</h3>
                                <ul className="flex flex-wrap gap-2">
                                    {project.stack.map((item, index) => (
                                        <li key={index} className="text-accent text-[16px]">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Work Time */}
                            <div>
                                <h3 className="text-[18px] font-bold text-white capitalize">Work Time</h3>
                                <p className="text-white/80 text-[16px]">{project.completion}</p>
                            </div>
                        </div>

                        <div className="border border-white/20 my-6"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TFGDisplay;
