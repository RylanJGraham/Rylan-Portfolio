"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { techIcons } from './Icons'; // Make sure Icons.js/Icons.tsx exports `techIcons`

const IndustryStackDisplay = ({ projects }) => {
    return (
        <div className="flex flex-col gap-16">
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={`flex flex-col xl:flex-row items-center gap-12 ${isEven ? "" : "xl:flex-row-reverse"}`}
                    >
                        {/* Image Section */}
                        <div className="w-full xl:w-1/2 h-full flex">
                            <div className="relative w-full h-full min-h-[400px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    unoptimized
                                    className="object-fit rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="w-full xl:w-1/2 flex flex-col justify-between gap-6 h-full">
                            {/* Company, Logo and Button Row */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {project.logo && (
                                        <Image
                                            src={project.logo}
                                            alt={`${project.company} logo`}
                                            width={50}
                                            height={50}
                                            className="rounded-xl"
                                        />
                                    )}
                                    <span className="text-white/70 text-2xl font-medium">{project.company}</span>
                                </div>
                                {project.live && (
                                    <Link href={project.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Website</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl font-bold leading-tight text-white capitalize hover:text-accent transition-all duration-300">
                                {project.title}
                            </h2>

                            {/* Description */}
                            <p className="text-white/60">{project.description}</p>

                            {project.stack && (
                    <div className="flex flex-wrap gap-3 items-center">
                      {project.stack.map((item, i) => {
                        const IconComponent = techIcons[item.name.toLowerCase()];
                        return (
                          <div key={i} className="text-white text-3xl" title={item.name}>
                            {IconComponent ? <IconComponent /> : <span className="text-accent text-sm">{item.name}</span>}
                          </div>
                        );
                      })}
                    </div>
                  )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default IndustryStackDisplay;
