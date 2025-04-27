import 'swiper/css';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from "react-icons/cg";
import { useState } from 'react';
import Image from 'next/image';
import { techIcons } from './Icons'; // Ensure Icons.js/Icons.tsx exports `techIcons`
import { FaChevronDown } from 'react-icons/fa';

const AppStackDisplay = ({ projects }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleInfo = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="flex flex-col gap-12 px-4 sm:px-6 lg:px-12">
            {projects.map((project, index) => {
                const isExpanded = expandedIndex === index;
                return (
                    <div key={index} className="relative w-full h-[400px] sm:h-[500px] rounded-[20px] overflow-hidden">
                        {/* Image */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[20px] w-full h-full"
                            unoptimized
                        />

                        {/* Top Right Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-4 z-30">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-black/70 text-white transition-all duration-300 hover:text-accent"
                                >
                                    <CgWebsite className="text-2xl transition-colors duration-300" />
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-black/70 text-white transition-all duration-300 hover:text-accent"
                                >
                                    <BsGithub className="text-2xl transition-colors duration-300" />
                                </a>
                            )}
                        </div>

                        {/* Info Container: Bottom left stack of Title, Tech, Description */}
                        <div className="absolute bottom-6 left-6 right-6 z-30 flex flex-col gap-4 max-w-full">
                            {/* Title + Tech Stack Row */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 w-full">
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
                                        <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">{project.title}</h2>
                                        {project.status && (
                                            <span className="text-accent italic text-sm mt-1">{project.status}</span>
                                        )}
                                    </div>
                                    <button onClick={() => toggleInfo(index)} className="ml-4 mt-1">
                                        <FaChevronDown className={`transition-transform text-xl ${isExpanded ? "rotate-180" : ""}`} />
                                    </button>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3 bg-black/70 px-4 py-2 rounded-xl shadow-lg justify-start sm:justify-end">
                                    {project.stack.map((item, i) => {
                                        const IconComponent = techIcons[item.name.toLowerCase()];
                                        return (
                                            <div key={i} className="text-white text-2xl sm:text-4xl" title={item.name}>
                                                {IconComponent ? <IconComponent /> : <span className="text-accent">{item.name}</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Description */}
                            {isExpanded && (
                                <div className="bg-black/70 px-6 py-4 rounded-xl shadow-lg text-white backdrop-blur-sm">
                                    <p className="text-white/90 mb-3 text-sm sm:text-base">{project.description}</p>
                                    {project.completion && (
                                        <div className="text-sm text-white/70">
                                            <span className="font-semibold text-white">Work Time:</span> {project.completion}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AppStackDisplay;
