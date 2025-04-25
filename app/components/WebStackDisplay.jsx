import 'swiper/css';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from "react-icons/cg";
import { useState } from 'react';
import Image from 'next/image';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaCuttlefish, FaPython, FaNode, FaBrush, FaChevronDown,
    FaChartBar,
} from "react-icons/fa";
import {
    SiFlutter, SiNextdotjs, SiTailwindcss, SiSupabase, SiFirebase, SiPostgresql, SiMysql, SiGithub,
    SiDocker, SiPhp, SiJavascript, SiVisualstudio, SiAdobephotoshop, SiGooglegemini, SiTypescript, SiMaterialdesign,
    SiMicrosoftexcel,
    SiKaggle,
    SiShadcnui,
    SiApifox,
    SiVercel,
    SiVite,
    SiReactquery,
} from "react-icons/si";
import { PiOpenAiLogo } from 'react-icons/pi';

// Icon map
const techIcons = {
    figma: FaFigma,
    html: FaHtml5,
    css: FaCss3,
    javascript: SiJavascript,
    react: FaReact,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    firebase: SiFirebase,
    supabase: SiSupabase,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    docker: SiDocker,
    php: SiPhp,
    github: SiGithub,
    photoshop: SiAdobephotoshop,
    gemini: SiGooglegemini,
    typescript: SiTypescript,
    material: SiMaterialdesign,
    excel: SiMicrosoftexcel,
    kaggle: SiKaggle,
    xcharts: FaChartBar,
    nextjs: SiNextdotjs,
    shadcn: SiShadcnui,
    restapi: SiApifox,
    vercel: SiVercel,
    vite: SiVite,
    rtkquery: SiReactquery,
    openai: PiOpenAiLogo,
};

const WebStackDisplay = ({ projects }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleInfo = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="flex flex-col gap-12">
            {projects.map((project, index) => {
                const isExpanded = expandedIndex === index;
                return (
                    <div key={index} className="relative w-full rounded-[20px] overflow-hidden">
                        
                        {/* Mock Browser Frame */}
                        <div className="relative w-full mx-auto shadow-lg rounded-xl">
                            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-2 bg-black/70 rounded-t-xl">
                                {/* GitHub Icon and URL */}
                                <div className="flex items-center gap-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-xl font-semibold hover:text-accent"
                                    >
                                        <BsGithub size={24} />
                                    </a>
                                    <span className="text-white text-xs">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-accent"
                                        >
                                            {project.live}
                                        </a>
                                    </span>
                                </div>
                                {/* Browser buttons in the top-right corner */}
                                <div className="flex gap-2">
                                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                            
                            {/* Image */}
                            <div className="relative w-full h-[660px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-fit rounded-b-xl"
                                    unoptimized
                                />
                            </div>

                            {/* Info Container: Bottom left stack of Title, Tech, Description */}
                            <div className="absolute bottom-6 left-6 right-6 z-30 flex flex-col gap-4 max-w-full">
                                {/* Title + Status + Tech Stack */}
                                <div className="flex justify-between items-end gap-6 w-full">
                                    {/* Title + Status + Icon */}
                                    <div className="flex items-center gap-4 bg-black/70 px-4 py-2 rounded-xl shadow-lg">
                                        {project.icon && (
                                            <Image
                                                src={project.icon}
                                                alt={`${project.title} icon`}
                                                width={80}
                                                height={80}
                                                className="rounded-md"
                                            />
                                        )}
                                        <div className="flex flex-col">
                                            <h2 className="text-white text-3xl font-bold leading-tight">{project.title}</h2>
                                            {project.status && (
                                                <span className="text-accent italic text-sm mt-1">{project.status}</span>
                                            )}
                                        </div>
                                        <button onClick={() => toggleInfo(index)} className="ml-4 mt-1">
                                            <FaChevronDown className={`transition-transform text-xl ${isExpanded ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex items-center flex-wrap gap-3 bg-black/70 px-4 py-2 rounded-xl shadow-lg justify-end">
                                        {project.stack.map((item, i) => {
                                            const IconComponent = techIcons[item.name.toLowerCase()];
                                            return (
                                                <div key={i} className="text-white text-4xl" title={item.name}>
                                                    {IconComponent ? <IconComponent /> : <span className="text-accent">{item.name}</span>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Description */}
                                {isExpanded && (
                                    <div className="bg-black/70 px-6 py-4 rounded-xl shadow-lg text-white backdrop-blur-sm">
                                        <p className="text-white/90 mb-3">{project.description}</p>
                                        {project.completion && (
                                            <div className="text-sm text-white/70">
                                                <span className="font-semibold text-white">Work Time:</span> {project.completion}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default WebStackDisplay;
