'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { techIcons } from './Icons';

const SoftwareStackDisplay = ({ projects }) => {
  return (
    <div className="flex flex-col gap-20">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col xl:flex-row items-stretch gap-10 ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}`}
        >
          {/* Image Section with Overlay Buttons */}
          <div className="relative w-full xl:w-1/2 h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
              {/* Overlay Buttons */}
              <div className="absolute inset-0 flex justify-center items-center gap-6 opacity-0 hover:opacity-100 bg-black/40 transition-all duration-300">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full group justify-center items-center bg-white/10 hover:bg-white/20 flex">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full group justify-center items-center bg-white/10 hover:bg-white/20 flex">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="w-full xl:w-1/2 flex flex-col justify-center gap-6">
            <h2 className="text-[42px] font-bold leading-none text-white capitalize">
              {project.title}
            </h2>
            <p className="text-white/60">{project.description}</p>

            {project.stack && (
              <div className="flex flex-wrap gap-3 items-center">
                {project.stack.map((item, i) => {
                  const IconComponent = techIcons[item.name.toLowerCase()];
                  return (
                    <div key={i} className="text-white text-3xl" title={item.name}>
                      {IconComponent ? (
                        <IconComponent />
                      ) : (
                        <span className="text-accent text-sm">{item.name}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareStackDisplay;
