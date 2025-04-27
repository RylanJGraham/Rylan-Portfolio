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
import AppStackDisplay from "../components/AppStackDisplay"; // adjust path as needed
import WebStackDisplay from "../components/WebStackDisplay"; // adjust path as needed
import VideoGameStackDisplay from "../components/VideoGameStackDisplay"; // adjust path as needed
import {
    FaBook,
    FaMobileAlt,
    FaGlobe,
    FaGamepad,
    FaBuilding,
    FaCode,
    FaBrush,
  } from 'react-icons/fa';
import IndustryStackDisplay from '../components/IndustryStackDisplay';
import ArtStackDisplay from '../components/ArtStackDisplay';
import {projects1, projects2, projects3, projects4, projects5, projects6} from '../components/Projects'
import SoftwareStackDisplay from '../components/SoftwareStackDisplay';



const Work = () => {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-0 xl:px-0"
      >
        <div className="container mx-auto mb-2">
        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                Projects
        </div>
        <div className="flex-grow h-px mt-4 mb-2 bg-accent"></div>
        </div>
        
  
        <Tabs defaultValue="apps" className="container mx-auto mb-2">
          {/* Top-Level Tab Buttons in a Row */}
          <TabsList className="flex flex-col mx-auto sm:flex-row justify-center items-center sm:items-stretch flex-nowrap gap-4 mb-2">
            <TabsTrigger className="h-12 text-center flex items-center justify-center gap-2 text-xl" value="apps">
                <FaMobileAlt className="text-lg" /> Apps
            </TabsTrigger>
            <TabsTrigger className="h-12 text-center flex items-center justify-center gap-2 text-xl" value="web">
                <FaGlobe className="text-lg" /> Web
            </TabsTrigger>
            <TabsTrigger className="h-12 text-center flex items-center justify-center gap-2 text-xl" value="games">
                <FaGamepad className="text-lg" /> Video Games
            </TabsTrigger>
            <TabsTrigger className="h-12 text-center flex items-center justify-center gap-2 text-xl" value="professional">
                <FaBuilding className="text-lg" /> Professional
            </TabsTrigger>
            <TabsTrigger className="h-12 text-center flex items-center justify-center gap-2 text-xl" value="art">
                <FaBrush className="text-lg" /> Art
            </TabsTrigger>
            <TabsTrigger className="h-12 text-center flex items-center justify-center gap-2 text-xl" value="data">
                <FaCode className="text-lg" /> Engineering
            </TabsTrigger>
            </TabsList>
  
          <TabsContent value="apps">
            <div className="container w-full">
                <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-accent"></div>
                </div>
                <AppStackDisplay projects={projects3} />
            </div>
            </TabsContent>

            <TabsContent value="art">
            <div className="container w-full">
                <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-accent"></div>
                </div>
                <ArtStackDisplay projects={projects4} />
            </div>
            </TabsContent>

            <TabsContent value="web">
            <div className="container mx-auto">
                <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-accent"></div>
                </div>
                <WebStackDisplay projects={projects2} />
            </div>
            </TabsContent>

{/* ...repeat for other categories: games, professional, data */}
  
          {/* Video Games */}
          <TabsContent value="games">
            <div className="container mx-auto">
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-accent"></div>
              </div>
              <VideoGameStackDisplay projects={projects1} />
            </div>
          </TabsContent>
  
          {/* Professional */}
          <TabsContent value="professional">
            <div className="container mx-auto">
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-accent"></div>
              </div>
              <IndustryStackDisplay projects={projects5} />
            </div>
          </TabsContent>
  
          {/* Data Engineering */}
          <TabsContent value="data">
            <div className="container mx-auto">
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-accent"></div>
              </div>
              <SoftwareStackDisplay projects={projects6} />
            </div>
          </TabsContent>
        </Tabs>
      </motion.section>
    );
  };
  

const ProjectSlideshow = ({ projects }) => {
    const [projectIndex, setProjectIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.realIndex;
            setProjectIndex(currentIndex);
        }
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.realIndex !== undefined) {
            setProjectIndex(swiperRef.current.realIndex);
        }
    }, []);

    return (
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                <div className='flex flex-col gap-[30px]'>
                    {projects[projectIndex] ? (
                        <>
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {projects[projectIndex].num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {projects[projectIndex].title}
                            </h2>
                            <p className='text-white/60'>{projects[projectIndex].description}</p>
                            <ul className="flex flex-wrap gap-4">
                                {projects[projectIndex].stack.map((item, index) => (
                                    <li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {index !== projects[projectIndex].stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className='border border-white/20 mb-8'></div>
                        </>
                    ) : (
                        <div className='text-white'>No project data available.</div>
                    )}
                </div>
                {projects[projectIndex] && (
                    <div className='flex gap-6 items-center'>
                        <Link href={projects[projectIndex].live} target="_blank">
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full group justify-center items-center bg-white/5 flex'>
                                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live Project</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href={projects[projectIndex].github} target="_blank">
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full group justify-center items-center bg-white/5 flex'>
                                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github Repository</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                )}
            </div>
            <div className='w-full xl:max-w-[50%] order-1 xl:order-none'>
                <Swiper
                    slidesPerView={1}
                    onSlideChange={handleSlideChange}
                    loop={true}
                    className='w-full h-[460px]'
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setProjectIndex(swiper.realIndex);
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <Image src={project.image} alt={project.title} width={500} height={400} unoptimized className='w-full h-full object-fit rounded-2xl' />
                        </SwiperSlide>
                    ))}
                    <WorkSliderBtns
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                    />
                </Swiper>
            </div>
        </div>
    );
};



export default Work;
