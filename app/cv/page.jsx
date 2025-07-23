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
    FaPaintBrush,
    FaNetworkWired,
} from "react-icons/fa";

import {
    VscVscode,
} from "react-icons/vsc";

import {
    GiOwl,
} from "react-icons/gi";

import {
    SiFlutter,
    SiAstro,
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
    SiExpo,
    SiPhp,
    SiDocker,
    SiGithub,
    SiStackoverflow,
    SiReactquery,
    SiVite,
    SiShadcnui,
    SiMaterialdesign,
    SiVercel,
    SiSketchfab,
    SiWacom,
    SiAutodesk,
    SiTypescript,
    SiC,
    SiApifox,
    SiMicrosoftexcel,
    SiGoogleslides,
    SiKaggle,
    SiAdobe,
    SiAseprite,
    SiWwise,
    SiGooglegemini,
    SiPytorch,
    SiTrello,
    SiGooglemaps,
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
        fieldValue: "4+ Years"
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
        fieldValue: "Open to Full/Part Time"
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
            imgSrc: '/assets/work/VRAIn_Main_Logo.png',
            company: "VRAIn Medical",
            position: "Software Developer & UI/UX Designer",
            duration: "2025-present",
        },
        {
            imgSrc: '/assets/work/Cupra-SEAT.png',
            company: "SEAT-Cupra",
            position: "ML Software Developer Intern",
            duration: "2024-2025",
        },
        {
            imgSrc: '/assets/work/ctedraupc.png',
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
    description: "I am currently studying Software Development & Architecture at La Salle, building on a foundation of Videogame Design & Development at the Polytechnic University of Catalonia, Mechanical Engineering at University of Alberta. This diverse academic background equips me with a unique blend of technical and creative skills.",
    items: [
        {
            imgSrc: '/assets/work/LaSalle.png',
            institution: "La Salle - Ramon Llull University",
            degree: "Masters: Software Development & Architecture",
            duration: "2025-2026",
        },
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
    description: "Experience in software, languages, extensions, and libraries across the tech space. Work in Full Stack Development, UI/UX Design, Video Games, & 3D Art!",
    categories: {
        "Coding": [
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3 />, name: "CSS" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaCuttlefish />, name: "C++" },
            { icon: <SiR />, name: "R" },
            { icon: <SiDart />, name: "Dart" },
        ],
        "Frontend": [
            { icon: <FaReact />, name: "React" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiAstro />, name: "Astro" },
            { icon: <SiVercel />, name: "Vercel" },
            { icon: <SiExpo />, name: "Expo" },
            { icon: <SiFlutter />, name: "Flutter" },
            { icon: <SiReactquery />, name: "RTK Query" },
            { icon: <SiVite />, name: "Vite" },
            { icon: <SiShadcnui />, name: "Shadcn/UI" },
            { icon: <SiMaterialdesign />, name: "Material UI" },
            { icon: <TbAugmentedReality />, name: "Augmented Reality (AR)" },
        ],
        "Backend": [
            { icon: <FaNode />, name: "Node.js" },
            { icon: <SiPhp />, name: "PHP" },
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <SiSupabase />, name: "Supabase" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiDocker />, name: "Docker" },
        ],
        "API": [
            { icon: <SiStripe />, name: "Stripe" },
            { icon: <SiRapid />, name: "Rapid API" },
            { icon: <SiApifox />, name: "REST API" },
            { icon: <SiGooglemaps />, name: "Google Maps" },
        ],
        "Tools": [
            { icon: <VscVscode />, name: "VS Code" },
            { icon: <SiVisualstudio />, name: "Visual Studio" },
            { icon: <SiAndroidstudio />, name: "Android Studio" },
            { icon: <SiPycharm />, name: "PyCharm" },
            { icon: <SiGithub />, name: "GitHub" },
            { icon: <SiStackoverflow />, name: "StackOverflow" },
            { icon: <SiMicrosoftexcel />, name: "Excel" },
            { icon: <SiGoogleslides />, name: "Google Slides" },
            { icon: <SiKaggle/>, name: "Kaggle" },
            { icon: <BsMicrosoft />, name: "Windows" },
            { icon: <CgMonday />, name: "Monday.com" },
            { icon: <SiTrello />, name: "Trello" },
        ],
        "Design/Art/Audio": [
            { icon: <SiAutodeskmaya />, name: "Maya" },
            { icon: <SiAutodesk />, name: "3ds Max" },
            { icon: <SiBlender />, name: "Blender" },
            { icon: <SiAdobe />, name: "Substance" },
            { icon: <FaPaintBrush />, name: "ZBrush" },
            { icon: <SiAseprite />, name: "Aseprite" },
            { icon: <SiWwise />, name: "Wwise" },
            { icon: <SiSketchfab />, name: "Sketchfab" },
            { icon: <FaFigma />, name: "Figma" },
            { icon: <SiAdobephotoshop />, name: "Photoshop" },
            { icon: <SiAdobeillustrator />, name: "Illustrator" },
            { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
            { icon: <SiWacom />, name: "Wacom" },
        ],
        "AI & ML": [
            { icon: <SiGooglegemini/>, name: "Google Gemini" },
            { icon: <PiOpenAiLogo />, name: "OpenAI" },
            { icon: <SiPytorch />, name: "PyTorch" },
        ],
        "Video Games": [
            { icon: <SiUnity />, name: "Unity" },
            { icon: <SiUnrealengine />, name: "Unreal Engine" },
            { icon: <SiOpengl />, name: "OpenGL" },
            { icon: <FaNetworkWired />, name: "TCP" },
            { icon: <TbWaveSawTool />, name: "UDP" },
            { icon: <SiLibrarything />, name: "GLM" },
            { icon: <SiLibrarything />, name: "ImGUI" },
            { icon: <SiLibrarything />, name: "Assimp" },
            { icon: <SiLibrarything />, name: "GLEW" },
            { icon: <SiLibrarything />, name: "SDL1&2" },
            { icon: <GiOwl />, name: "Eigen" },
            { icon: <SiPushbullet />, name: "Bullet3D Physics" },
            { icon: <SiBox />, name: "Box2D Physics" },
            { icon: <SiLibrarything />, name: "devIL" },
        ],
    },
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { BsFileExcel, BsMicrosoft } from 'react-icons/bs';
import { PiMicrosoftExcelLogo, PiOpenAiLogo } from 'react-icons/pi';
import { CgMonday, CgVercel } from 'react-icons/cg';
import { TbAugmentedReality, TbWaveSawTool } from 'react-icons/tb';

const Resume = () => {
    return (
        <motion.div  
        initial={{opacity: 0}}
        animate={{
            opacity:1,
            transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-0 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[160px] mx-auto xl:mx-0 gap-6">
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
                                <p className=" text-white/60 mx-auto xl:mx-0">
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
                            <p className=" text-white/60 mx-auto xl:mx-0">
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
                                    <p className=" text-white/60 mx-auto xl:mx-0">{skills.description}</p>
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
