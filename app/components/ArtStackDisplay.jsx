"use client";

import { useState } from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { techIcons } from './Icons'; // Make sure Icons.js/Icons.tsx exports `techIcons`

const ArtStackDisplay = ({ projects }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleInfo = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {projects.map((project, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div key={index} className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg group">
            {/* Image */}
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={800}
                unoptimized
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Hover Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black/70 text-white flex items-center justify-center rounded-full hover:text-accent"
                >
                  <CgWebsite className="text-2xl" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black/70 text-white flex items-center justify-center rounded-full hover:text-accent"
                >
                  <BsGithub className="text-2xl" />
                </a>
              )}
            </div>

            {/* Info container */}
            <div className="p-4 bg-black/60 rounded-b-2xl text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <button onClick={() => toggleInfo(index)} className="text-accent text-sm hover:underline">
                  {isExpanded ? "Hide Info" : "Show Info"}
                </button>
              </div>

              {isExpanded && (
                <div className="mt-3 text-sm text-white/80 space-y-4">
                  {/* Description */}
                  <p>{project.description}</p>

                  {/* Tech Stack */}
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

                  {/* Completion Time */}
                  {project.completion && (
                    <div className="text-xs text-white/60 mt-2">
                      Work Time: {project.completion}
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

export default ArtStackDisplay;
