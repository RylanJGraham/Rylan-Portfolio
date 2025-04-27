"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaCuttlefish, FaPython, FaNode,
  TbAugmentedReality,
  VscVscode,
  GiOwl,
  SiFlutter, SiAstro, SiSupabase, SiNextdotjs, SiDart, SiFirebase,
  SiStripe, SiRapid, SiPostgresql, SiUnity, SiAutodeskmaya,
  SiTailwindcss, SiUnrealengine, SiBlender, SiAdobephotoshop,
  SiAdobeillustrator, SiAdobepremierepro, SiJavascript,
  SiVisualstudio, SiAndroidstudio, SiPycharm, SiHarmonyos,
  SiPushbullet, SiLibrarything, SiOpengl, SiBox, SiMysql, SiGooglegemini,
  SiR, SiTableau, SiExpo, SiPhp, SiDocker, SiGithub, SiStackoverflow, SiGoogleslides, SiMicrosoftexcel, SiC,
  SiGooglemaps,
  SiAdobe,
  SiMax,
  SiAutodesk,
  SiWacom,
  SiSketchfab,
  SiPytorch,
  SiPython,
} from "react-icons/si";
import { FaPaintBrush } from 'react-icons/fa';
import { FiFigma } from "react-icons/fi";

const techIcons = {
  figma: FaFigma,
  photoshop: SiAdobephotoshop,
  illustrator: SiAdobeillustrator,
  premiere: SiAdobepremierepro,
  html: FaHtml5,
  excel: SiMicrosoftexcel,
  css: FaCss3,
  javascript: SiJavascript,
  js: FaJs,
  googleslides: SiGoogleslides,
  react: FaReact,
  nextjs: SiNextdotjs,
  flutter: SiFlutter,
  dart: SiDart,
  python: FaPython,
  cpp: FaCuttlefish,
  node: FaNode,
  supabase: SiSupabase,
  firebase: SiFirebase,
  stripe: SiStripe,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  unity: SiUnity,
  unreal: SiUnrealengine,
  maya: SiAutodeskmaya,
  blender: SiBlender,
  vscode: VscVscode,
  visualstudio: SiVisualstudio,
  androidstudio: SiAndroidstudio,
  pycharm: SiPycharm,
  r: SiR,
  tableau: SiTableau,
  expo: SiExpo,
  php: SiPhp,
  docker: SiDocker,
  github: SiGithub,
  stackoverflow: SiStackoverflow,
  gemini: SiGooglegemini,
  c: SiC,
  ar: TbAugmentedReality,
  flutterflow: SiFlutter,
  maps: SiGooglemaps,
  rapid: SiRapid,
  substance: SiAdobe,
  dsmax: SiAutodesk,
  zbrush: FaPaintBrush,
  toonboom: SiHarmonyos,
  wacom: SiWacom,
  sketchfab: SiSketchfab,
  pytorch: SiPytorch,
  unity: SiUnity,
  figma: FiFigma,
  astro: SiAstro,
  python: SiPython,
  slides: SiGoogleslides,
};

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
