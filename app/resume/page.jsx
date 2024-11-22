"use client";

import Image from 'next/image';

import {
    FaHtml5,
    FaCss3,
    FaJs, 
    FaReact,
    FaFigma,
    FaCuttlefish, // Assuming this for C++
    FaPython, // For Python
    FaNode, // For Node.js
    FaBrush,
} from "react-icons/fa";

import {
    VscVscode,
} from "react-icons/vsc";

import {
    GiOwl,
} from "react-icons/gi";

import {
    SiFlutter,
    SiSupabase,
    SiNextdotjs,
    SiDart,
    SiFirebase,
    SiStripe,
    SiRapid,
    SiPostgresql,
    SiUnity,
    SiAutodeskmaya,
    SiTailwindcss,
    SiUnrealengine,
    SiBlender,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobepremierepro,
    SiJavascript,
    SiVisualstudio,
    SiAndroidstudio,
    SiPycharm,
    SiHarmonyos,
    SiPushbullet,
    SiLibrarything,
    SiOpengl,
    SiBox,
    SiMysql,
    SiR,
    SiTableau,
} from "react-icons/si";

// About data
const about = {
    title: "About me",
    description: "I am a Canadian citizen, who has lived his life abroad, living in Canada, Poland, the USA, and now Spain! I am a motivated and talented student with experience in C++ computer programming, 3D design, game engines, application development, and agile project management. A friendly and confident individual, looking to break into the professional space and learn from the best.",
    info: [
        {
        fieldName: "Name",
        fieldValue: "Rylan Graham"
        },
        {
        fieldName: "Phone",
        fieldValue: "+34 635 967 609"
        },
        {
        fieldName: "Experience",
        fieldValue: "3+ Years"
        },
        {
        fieldName: "Email",
        fieldValue: "Rylangraham02@gmail.com"
        },
        {
        fieldName: "Nationality",
        fieldValue: "Canadian"
        },
        {
        fieldName: "Availability",
        fieldValue: "intern at SEAT-CUPRA"
        },
        {
        fieldName: "Languages",
        fieldValue: "English, Spanish, Polish"
        },
        
        
    ]
};

// Experience data
const experience = {
    icon: '',
    title: 'My Experience',
    description: "I bring a blend of technical expertise and customer-focused skills, excelling in software development & team-work. My unique perspective allows me to create intuitive, user-friendly solutions.",
    items: [
        {
            imgSrc: '/assets/work/Cupra-SEAT.png',
            company: "SEAT-Cupra",
            position: "ML UI/UX Developer Intern",
            duration: "2024-present",
        },
        {
            imgSrc: '/assets/work/Cupra-SEAT.png',
            company: "SEAT-Cupra UPC Catedra",
            position: "Gamified Car CO-OP Student Developer",
            duration: "2023-2024",
        },
        {
            imgSrc: '/assets/work/Bestbuy.jpg',
            company: "Best Buy",
            position: "Computer/Home Theater Sales Associate",
            duration: "2020-2021",
        },
    ],
};

// Educational data
const education = {
    icon: '',
    title: 'My Education',
    description: "I am currently studying Video Game Design, building on a foundation of Mechanical Engineering. This diverse academic background equips me with a unique blend of technical and creative skills.",
    items: [
        {
            imgSrc: '/assets/work/UPC.png',
            institution: "Polytechnic University of Catalonia",
            degree: "Bachelors: Videogame Design & Development",
            duration: "2021-Present",
        },
        {
            imgSrc: '/assets/work/UofA2.png',
            institution: "University of Alberta",
            degree: "Bachelors: Mechanical Engineering",
            duration: "2020-2021",
        },
        {
            imgSrc: '/assets/work/IB.png',
            institution: "American School of Warsaw",
            degree: "International Baccalaureate Diploma",
            duration: "2019-2020",
        },
    ],
};

// Skills data categorized into tabs
const skills = {
    title: "My Skills",
    description: "Experience in softwares, languages, extensions, and libraries from all corners of the tech space. Work in Full Stack Development, UI/UX Design, Video Games, & 3D Art means I bring a lot to the table!",
    categories: {
        "Front-End": [
            {
                icon: <FaHtml5 />,
                name: "HTML 5",
            },
            {
                icon: <FaCss3 />,
                name: "CSS 3",
            },
            {
                icon: <FaJs />,
                name: "JavaScript",
            },
            {
                icon: <FaReact />,
                name: "React",
            },
            {
                icon: <SiNextdotjs />,
                name: "Next.js",
            },
            {
                icon: <SiFlutter />,
                name: "Flutter",
            },
            {
                icon: <SiDart />,
                name: "Dart",
            },
            {
                icon: <SiTailwindcss />,
                name: "Tailwind CSS",
            },
        ],
        "Back-End": [
            {
                icon: <FaNode />,
                name: "Node.js",
            },
            {
                icon: <SiSupabase />,
                name: "Supabase",
            },
            {
                icon: <SiFirebase />,
                name: "Firebase",
            },
            {
                icon: <SiPostgresql />,
                name: "PostgreSQL",
            },
            {
                icon: <SiStripe />,
                name: "Stripe",
            },
            {
                icon: <SiRapid />,
                name: "RapidAPI",
            },
        ],
        "Languages": [
            {
                icon: <FaPython />,
                name: "Python",
            },
            {
                icon: <FaCuttlefish />,
                name: "C++",
            },
            {
                icon: <SiJavascript />,
                name: "JavaScript",
            },
        ],
        "Game-Dev": [
            {
                icon: <SiUnity />,
                name: "Unity",
            },
            {
                icon: <SiUnrealengine />,
                name: "Unreal Engine",
            },
        ],
        "Art": [
            {
                icon: <FaFigma />,
                name: "Figma",
            },
            {
                icon: <SiAdobephotoshop />,
                name: "Photoshop",
            },
            {
                icon: <SiAutodeskmaya />,
                name: "Maya",
            },
            {
                icon: <SiBlender />,
                name: "Blender",
            },
            {
                icon: <SiAdobeillustrator />,
                name: "Illustrator",
            },
            {
                icon: <SiAdobepremierepro />,
                name: "Premier Pro",
            },
            {
                icon: <FaBrush />,
                name: "Z-Brush",
            },
            {
                icon: <SiHarmonyos />,
                name: "ToonBoom Harmony",
            },
        ],
        "Data": [
            {
                icon: <SiMysql />,
                name: "MySQL",
            },
            {
                icon: <SiR />,
                name: "R",
            },
            {
                icon: <PiMicrosoftExcelLogo />,
                name: "Excel",
            },
            {
                icon: <SiTableau />,
                name: "Tableau",
            },
        ],
        "Libraries": [
            {
                icon: <SiOpengl />,
                name: "OpenGL",
            },
            {
                icon: <SiPushbullet />,
                name: "Bullet3D Physics",
            },
            {
                icon: <GiOwl />,
                name: "Eigen",
            },
            {
                icon: <SiBox />,
                name: "Box2D Physics",
            },
            {
                icon: <SiLibrarything />,
                name: "SDL1&2",
            },
            {
                icon: <SiLibrarything />,
                name: "GLM",
            },
            {
                icon: <SiLibrarything />,
                name: "ImGUI",
            },
            {
                icon: <SiLibrarything />,
                name: "Assimp",
            },
            {
                icon: <SiLibrarything />,
                name: "GLEW",
            },
            {
                icon: <SiLibrarything />,
                name: "devIL",
            },
        ],
        "IDE's": [
            {
                icon: <VscVscode />,
                name: "VS Code",
            },
            {
                icon: <SiVisualstudio />,
                name: "Visual Studio",
            },
            {
                icon: <SiAndroidstudio />,
                name: "Android Studio",
            },
            {
                icon: <SiPycharm />,
                name: "Pycharm",
            },
        ],
    },
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { BsFileExcel } from 'react-icons/bs';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';

const Resume = () => {
    return (
        <motion.div  
        initial={{opacity: 0}}
        animate={{
            opacity:1,
            transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[240px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <Image
                                        src={item.imgSrc}
                                        width={100}
                                        height={100}
                                        alt={item.degree}
                                        className="object-fit rounded-2xl mb-2"
                                        />
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index)=> (
                                        <li key={index} className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative">
                                            {/* Next.js Image component */}
                                            <span className="text-accent">{item.duration}</span>
                                            <Image
                                        src={item.imgSrc}
                                        width={60}
                                        height={100}
                                        alt={item.degree}
                                        className="object-fit rounded-2xl mb-2"
                                        />
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left z-10 relative">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <Tabs defaultValue="Front-End">
                                <   TabsList className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:justify-center mb-4"> 
                                        {Object.keys(skills.categories).map((category, index) => (
                                            <TabsTrigger key={index} value={category}>
                                                {category}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                    {Object.entries(skills.categories).map(([category, skillList], index) => (
                                        <TabsContent key={index} value={category}>
                                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                                {skillList.map((skill, index) => (
                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] flex justify-center rounded-xl items-center group">
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                ))}
                                            </ul>
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index)=>{
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl text-accent">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
