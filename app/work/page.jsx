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

const projects1 = [
    {
        num: "01",
        category: "Video Game Project",
        title: "Alien: Nemesis",
        description: "Alien: Nemesis is a fast paced shooter with exploration, narrative, & fast paced combat. Developed by Shadow Wizard Games Studios, a team of 23 students at CITM-UPC, on their proprietary game engine: TheOneEngine",
        stack: [{ name: "C++" }, { name: "Maya" }, { name: "Adobe Substance" }, { name: "OpenGL" }, { name: "Photoshop" }, { name: "Figma" }, { name: "Wwise" }],
        image: "/assets/work/AlienNemesis.gif",
        live: "https://shadow-wizard-games.github.io/Alien-Nemesis-Website/index.html",
        github: "https://github.com/Shadow-Wizard-Games/TheOneEngine",
    },
    {
        num: "02",
        category: "Video Game Project",
        title: "HyperStrike",
        description: "HyperStrike is a fast-paced 5v5 multiplayer game where the players must score a ball inside the other team's goal while each player has a character with high mobility movement that allows players to run on the walls, obstacles, and much more in the stadium. The game is built using both UDP & TCP Protocols with interpolation, & predictive state synchronization",
        stack: [{ name: "Unity Engine" }, { name: "UD-Protocol" }, { name: "TC-Protocol" }, { name: "Maya" }, { name: "Adobe Substance" }, { name: "Mixamo" },],
        image: "/assets/work/HyperStrikeLogo.png",
        live: "https://github.com/Historn/NetworksProject",
        github: "https://github.com/Historn/NetworksProject",
    },
    {
        num: "03",
        category: "VertX Game Engine",
        title: "VertX Game Engine",
        description: "Fully functional Game Engine developed using OpenGL framework, with additional libraries. Supports FBX rendering, texturing, Game Objects management, camera controls as of latest release.",
        stack: [{ name: "C++" }, { name: "OpenGL" }, { name: "SDL2" }, { name: "GLEW" }, { name: "GLM" }, { name: "Assimp" }, { name: "ImGui" }, { name: "devIL" }, { name: "Visual Studio" }, { name: "Github" }, ],
        image: "/assets/work/VertX.gif",
        live: "https://citm-upc.github.io/VertX-Game-Engine/",
        github: "https://github.com/CITM-UPC/VertX-Game-Engine",
    },
    {
        num: "04",
        category: "Game AI",
        title: "Game AI",
        description: "Exercises in Unity Environments created to highlight usage of Game AI. Behaviors featured include Pathfinding, Random Wandering, Flocking, Behavior Bricks, and Camera Frustrum Detection.",
        stack: [{ name: "C#" }, { name: "Unity" }, { name: "Maya" }, { name: "Python" }, { name: "Github" },],
        image: "/assets/work/gameai.gif",
        live: "https://rylanjgraham.github.io/GameAI_Exercises/",
        github: "https://github.com/RylanJGraham/GameAI_Exercises",
    },
    {
        num: "05",
        category: "Unity Audio Systems Demonstration",
        title: "Unity Audio Systems Demonstration",
        description: "Unity scene demonstrating proper usage of spatial audio, track-blending, atmospheric audio, track-layer, audio-mixing, and region specific filtering.",
        stack: [{ name: "C++" }, { name: "Unity" }, { name: "Github" }, { name: "Visual Studio" }, { name: "C#" }],
        image: "/assets/work/DigitalAudio.gif",
        live: "https://play.unity.com/mg/other/webgl-builds-404826",
        github: "https://github.com/AdriaPm/DigitalAudio_UnityScene",
    },
    {
        num: "06",
        category: "Worms Replica",
        title: "Worms Replica",
        description: "Worms game title replica. Physics Engine was original and created using classroom learnings. Concepts: Drag Force, Projectile Motion, Ballistics, & Gravitational Elements.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }],
        image: "/assets/work/Worms.png",
        live: "https://github.com/Historn/WormsGameProject",
        github: "https://github.com/Historn/WormsGameProject",
    },
    {
        num: "07",
        category: "The ToyBox",
        title: "The ToyBox",
        description: "8 man RPG project, complete with fully operational UI, Combat, Exploration & more. Developed by hand drawn artwork. Expected Launch May 2023. Culminating Year 2 Degree Project.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }, { name: "Figma" }, { name: "Photoshop" }, { name: "Mondays" }, ],
        image: "/assets/work/toyboxgif.gif",
        live: "https://fun-makers-studios.github.io/Project2_TheToyBox/",
        github: "https://github.com/Fun-Makers-Studios/Project2_TheToyBox",
    },
    {
        num: "08",
        category: "Beta Release",
        title: "UDP & TCP Connections",
        description: "Unity scene with UDP & TCP lobby connection for Client-Server. Player is located in server room, wit room creation supporting Room Naming, Usernames, Custom IP Address, User Port Information, & Active Users. Also provides real-time Client to Client Messaging via Server Routing. Able to support multiple client connections to the same server via multithreading based on users.",
        stack: [{ name: "Unity" }, { name: "C++" }, { name: "UDP" }, { name: "TCP" }, ],
        image: "/assets/work/Sockets.png",
        live: "https://github.com/RylanJGraham/Connections_UnityExercise",
        github: "https://github.com/RylanJGraham/Connections_UnityExercise",
    },
    {
        num: "09",
        category: "Retro Pinball",
        title: "Retro Pinball",
        description: "Game created using Box2D Physics Libraries and SDL Libraries on Microsoft Visual Studio. Created to demonstrate collision physics understanding.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }, { name: "Box2D" }, { name: "Photoshop" } ],
        image: "/assets/work/pinballgif.gif",
        live: "https://github.com/AdriaPm/Pinball-Game",
        github: "https://github.com/AdriaPm/Pinball-Game",
    },
    {
        num: "10",
        category: "Snow Race",
        title: "Snow Race",
        description: "Simple 3D racing car game created for Physics II subject at CITM-UPC university. Using Bullet3D collision and aerodynamic forces. OpenGL rendering for game & camera elements. ",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" }, { name: "Bullet3D" }, { name: "OpenGL" } ],
        image: "/assets/work/car.png",
        live: "https://github.com/AdriaPm/RaceCarGame3D",
        github: "https://github.com/AdriaPm/RaceCarGame3D",
    },
    {
        num: "11",
        category: "WindJammers Replica",
        title: "WindJammers Replica",
        description: "WindJammers replica game created as first video game project at CITM-UPC university. Created using C++, SDL2, and title original sprites.",
        stack: [{ name: "C++" }, { name: "SDL" }, { name: "Github" }, { name: "Visual Studio" },],
        image: "/assets/work/windjammers.gif",
        live: "https://github.com/AdriaPm/RaceCarGame3D",
        github: "https://github.com/AdriaPm/RaceCarGame3D",
    },
    // Add more projects for this category if needed
];

const projects2 = [
    {
        num: "01",
        category: "Beta Release",
        title: "PokéRest",
        description: "PokéRest is a full-stack web application created in 6 hrs using Next.js, TypeScript, Shadcn-UI, and restAPI calls to PokeAPI. The project features dynamic routing, search filtering, clean UI, and optimized API retrievals to ensure a functional and superb user experience.",
        stack: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Shadcn" }, { name: "restAPI" }, { name: "Tailwind" }],
        image: "/assets/work/poke.png",
        live: "https://pokerest-app.vercel.app/",
        github: "https://github.com/RylanJGraham/pokerest",
    },
    {
        num: "02",
        category: "3D Art & Animation",
        title: "Qatar 2022 Data-Vis",
        description: "The Qatar 2022 Data Visualization is a web application created to demonstrate Argentina's path to victory in the 2022 Fifa World Cup from a data standpoint. Developed using React, in combination with Material UI, X-Charts, and ReCharts, the web app hopes to provide users with a clean and intuitive data journey throughout the tournament. Check it out!",
        stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Material UI" }, { name: "X-Charts" }, { name: "ReCharts" }, { name: "Kaggle" }, { name: "Excel" }, { name: "Figma" },],
        image: "/assets/work/QatarFull.png",
        live: "https://worldcup2022datavisualized.vercel.app",
        github: "https://github.com/RylanJGraham/world_cup_2022_datavisualized",
    },
    {
        num: "03",
        category: "Beta Release",
        title: "CulinARy",
        description: "WeatherTune is a sleek and intuitive weather forecast app developed by a team of four students from CITM-UPC University. Stay ahead of the weather with accurate forecasts and a delightful user experience.",
        stack: [{ name: "Unity" }, { name: "C++" }, { name: "C#" }, { name: "Vuforia AR" }, { name: "Firebase" },],
        image: "/assets/work/culinary.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vR9q7x3w2LP341kqw8nD46yVIxdH2BqrM2SisEVlhsX0PatrdA16s_s5U2EJNFikF_v3SLrOPccUsze/pub?start=true&loop=false&delayms=10000",
        github: "https://github.com/RylanJGraham/CulinARy",
    },
    {
        num: "04",
        category: "Beta Release",
        title: "WeatherTune",
        description: "WeatherTune is a sleek and intuitive weather forecast app developed by a team of four students from CITM-UPC University. Stay ahead of the weather with accurate forecasts and a delightful user experience.",
        stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Figma" }, { name: "Firebase" }, { name: "BLOC" }, { name: "Rapid API" }, { name: "Google API" }],
        image: "/assets/work/WeatherTune2.png",
        live: "https://github.com/RylanJGraham/WeatherTune",
        github: "https://github.com/RylanJGraham/WeatherTune",
    },
    {
        num: "05",
        category: "Beta Release",
        title: "SummAIrize",
        description: "Article Summarizer built using OpenAI GPT model, Takes article url and provides a concise summary.​",
        stack: [{ name: "React" }, { name: "Open-AI" }, { name: "Vite" }, { name: "RTK Query" }, { name: "Tailwind" }, { name: "JavaScript" },],
        image: "/assets/work/summaraize.gif",
        live: "https://iridescent-blancmange-7bcd57.netlify.app/",
        github: "https://github.com/RylanJGraham/AI-ArticleSummarizer",
    },
    {
        num: "06",
        category: "Beta Release",
        title: "AI Voice Assistant (In-Progress)",
        description: "Mobile application integrated with voice recognition & GPT4 and DallE API user prompting. Ask away!",
        stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Rapid API" }, { name: "JavaScript" }, { name: "Dall-E" }, { name: "OpenAI" }, ],
        image: "/assets/work/voice.png",
        live: "https://github.com/RylanJGraham/AI-Assistant",
        github: "https://github.com/RylanJGraham/AI-Assistant",
    },
    
    // Add more projects for this category if needed
];

const projects3 = [
    {
        num: "01",
        category: "UI/UX Design Project",
        title: "Primavera Pulse",
        description: "Primavera Pulse serves as a gamified app companion for the global music festival: Primavera Sound. Using gamified mechanics users can explore & enjoy the festival more, with nice rewards! Development is currently in the UI Demo stage, attached below is the figma prototype!",
        stack: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Excel" }, { name: "Google Slides" }],
        image: "/assets/work/PrimaveraShort.png",
        live: "https://www.figma.com/proto/Lw3BcdaDKPdpsI7yrEcaTz/Primavera-Pulse?node-id=2-545&t=TqmqKKVTSYVCKREP-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A545&show-proto-sidebar=1",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vQ4OOGAp8degVyu6s6ZQam5bzvV003IzNlAJzUXgv6xE5x6Fnj0sUQ70bbtuGCEAG_2jJ-cnFsA_DI3/pub?start=false&loop=false&delayms=3000",
    },
    {
        num: "02",
        category: "Video Game Project",
        title: "Terranex Agriculture Platform",
        description: "Terranex is a cutting-edge farm management platform designed to tackle the challenges small and medium-sized farms face in Catalonia, Spain.",
        stack: [{ name: "Microsoft Excel" }, { name: "Google Slides" }, { name: "Figma" }, { name: "Photoshop" }, { name: "React" },],
        image: "/assets/work/TerranexShort.png",
        live: "https://shadow-wizard-games.github.io/Alien-Nemesis-Website/index.html",
        github: "https://github.com/Shadow-Wizard-Games/TheOneEngine",
    },
    {
        num: "03",
        category: "UI/UX Design Project",
        title: "Minted",
        description: "Minted is an in-production ticket resell application for students available on both IOS & Android devices. The product is an application that allows users to re-sell their ticket entries to clubs, concerts, private events & more, all in an easy to use and intuitive way. ",
        stack: [{ name: "FlutterFlow" }, { name: "Firebase" }, { name: "Stripe" }, { name: "Google API's" }],
        image: "/assets/work/minted.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vTE381nkor09xuH4XrNJQyMgvnPa0dNorb1Lkd6aeM6d2nayW3PBJdV_CPzFFFmdpYtnty-5qO9ZF6W/pub?start=false&loop=false&delayms=10000",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vTE381nkor09xuH4XrNJQyMgvnPa0dNorb1Lkd6aeM6d2nayW3PBJdV_CPzFFFmdpYtnty-5qO9ZF6W/pub?start=false&loop=false&delayms=10000",
    },
    {
        num: "04",
        category: "UI/UX Design Project",
        title: "Edu.Cation",
        description: "Edu.Cation is a learning app that helps to revolutionize the education space. Incorporating fun & practicality to help teachers send their learning home.",
        stack: [{ name: "Figma" }, { name: "Google Slides" }],
        image: "/assets/work/edu.cation2.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vTJUC_VmrFcPBi26BB6Ekuro1cC8ffbbWhU_r6R3gdbUV7gaN4-O11v5V2Rk2JsAF9EY0uyH0iqoWBE/pub?start=false&loop=false&delayms=10000",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vTJUC_VmrFcPBi26BB6Ekuro1cC8ffbbWhU_r6R3gdbUV7gaN4-O11v5V2Rk2JsAF9EY0uyH0iqoWBE/pub?start=false&loop=false&delayms=10000",
    },
    // Add more projects for this category if needed
];

const projects4 = [
    {
        num: "01",
        category: "3D Art & Animation",
        title: "Studio Ghibli 3D Environment",
        description: "3D Environment created using the Unity Engine, inspired by the Studio Ghibli film: Spirited Away. Explore the scene, with fbx's created using Maya, and painted with Substance Painter & Z-brush. FBX models created following protocols for tri-management, featuring LOD detailing, & more! Custom Camera optimization and shader rendering through scripting using C++.",
        stack: [{ name: "Maya" }, { name: "Unity" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "C#" }],
        image: "/assets/work/ghibli.gif",
        live: "https://rylangraham02.wixsite.com/website/team-1",
        github: "https://github.com/RylanJGraham/Unity_Scene-Spirited-Away",
    },
    {
        num: "02",
        category: "3D Art & Animation",
        title: "Mummy FBX Animations",
        description: "FBX model animations created in Maya. Completed FBX rigging, using joints & skeletal structuring. Completed animations using fundamentals of animation, all while maintaining model integrity.",
        stack: [{ name: "Maya" }, { name: "Unity" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "C#" }],
        image: "/assets/work/kingtut.gif",
        live: "https://github.com/RylanJGraham/3D_Animations_Unity",
        github: "https://github.com/RylanJGraham/3D_Animations_Unity",
    },
    {
        num: "03",
        category: "Raikou Textured FBX",
        title: "Raikou Textured FBX",
        description: "Low-poly model and high poly modeling on 3DS-Max. Painting on Zbrush, unwrapping and lighting using UVLayout and 3DSMAX. ",
        stack: [{ name: "3DS Max" }, { name: "Substance Painter" }, { name: "Blender" }, { name: "Zbrush" }],
        image: "/assets/work/raikou.jpg",
        live: "https://docs.google.com/document/d/e/2PACX-1vQy6Co0dpBb8juPjImHzrmheLdkyvuH70GU3kPwEp8W2Av3AjBtfxpa6V371ALjzFABdO8j-lW13ixP/pub",
        github: "https://docs.google.com/document/d/e/2PACX-1vQy6Co0dpBb8juPjImHzrmheLdkyvuH70GU3kPwEp8W2Av3AjBtfxpa6V371ALjzFABdO8j-lW13ixP/pub",
    },
    {
        num: "04",
        category: "3D Art & Animation",
        title: "Penguin 2D Animation",
        description: "Collection of Hand-Drawn Animations completed over various timeframes. Work with Frame by Frame, Pegs, and more animation fundamentals.",
        stack: [{ name: "ToonBoom Harmony" }, { name: "Photoshop" }, { name: "Wacom Drawing Pad" }],
        image: "/assets/work/penguin.gif",
        live: "https://rylangraham02.wixsite.com/website/copy-of-lab-work",
        github: "https://rylangraham02.wixsite.com/website/copy-of-lab-work",
    },
    {
        num: "05",
        category: "3D Art & Animation",
        title: "Baker House",
        description: "​Painted Maya 3D model of island home. Project released on sketchfab complete with material maps, UV-layout, and model. Completed in 6 hours of work.",
        stack: [{ name: "Maya" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "Blender" }, { name: "Sketchfab" }],
        image: "/assets/work/bakerhouse.png",
        live: "https://sketchfab.com/3d-models/graham-rylan-diorama-ca883fbcfc714696a1e869d70d7a4a3b?utm_medium=embed&utm_campaign=share-popup&utm_content=ca883fbcfc714696a1e869d70d7a4a3b",
        github: "https://github.com/RylanJGraham/EnvironmentPracticeUnityScene",
    },
    // Add more projects for this category if needed
];

const projects5 = [
    {
        num: "01",
        category: "Full Stack App Project",
        title: "SEAT-Cupra ML Software Developer Intern",
        description: "Working with SEAT-Cupra to develop advanced machine learning solutions for UI/UX. Project was created using QLearning, PyTorch, Unity Engine, and Supabase PostgreSQL",
        stack: [{ name: "PyTorch" }, { name: "Unity Engine" }, { name: "Python" }, { name: "Supabase" }, { name: "C#" } ],
        image: "/assets/work/intern.png",
        live: "https://www.cupraofficial.es/",
        github: "https://www.cupraofficial.es/",
    },
    {
        num: "02",
        category: "Video Game Project",
        title: "SEAT-Cupra UPC Catedra Gamified Car",
        description: "Created a gamified car application to improve the user driving experience. Developed a prototype & presented to SEAT-Cupra & EDAG departments. Worked in a team of 4 people from similar backgrounds.",
        stack: [{ name: "Figma" }, { name: "Unity" }, { name: "C#" }, { name: "Photoshop" }, { name: "Google Slides" }],
        image: "/assets/work/gamified.png",
        live: "https://www.citm.upc.edu/blog/presentacion-de-los-proyectos-cupra-gamified-car/",
        github: "https://www.citm.upc.edu/blog/presentacion-de-los-proyectos-cupra-gamified-car/",
    },
    // Add more featured projects if needed
];

const projects6 = [
    {
        num: "01",
        category: "Beta Release",
        title: "Unity Debug Tool",
        description: "The Unity Debug Tool is a tool to be used by Unity Game Developers to gain real-time insights into player, enemy, or game-state data. The tool utilizes MySQL databases, PHP requests, and in-game events to help developers display live player game data in their scene. Currently featuring heatmap, and prefab generation for player deaths, damage, & enemy states, with customizable coloring, scaling, intensity and more! Check it out!",
        stack: [{ name: "Unity" }, { name: "MySQL" }, { name: "PHP" }, { name: "C++" }, ],
        image: "/assets/work/HeatMap.png",
        live: "https://github.com/JoeyCM/Delivery3",
        github: "https://github.com/JoeyCM/Delivery3",
    },
    {
        num: "02",
        category: "Beta Release",
        title: "A/B Data Testing",
        description: "A/B Testing data was analyzed for popular game title. Tasked with determining boost in level simplicity was good for key game KPI's. Data was process & analyzed using MySQL, R, and Tableau to evaluate key metrics for the game.",
        stack: [{ name: "MySQL" }, { name: "R-Studio" }, { name: "Excel" }, { name: "Tableau" }, { name: "Unity" }, ],
        image: "/assets/work/DataAnalysis.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vS-bU3SGt7YojZd5rxXTxneQj6-zUBOpT1aRxRIzi_nZeYuaxoZHeyGD-3lrtp4RD_IuSuPt30b0Iea/pub?start=false&loop=false&delayms=3000",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vS-bU3SGt7YojZd5rxXTxneQj6-zUBOpT1aRxRIzi_nZeYuaxoZHeyGD-3lrtp4RD_IuSuPt30b0Iea/pub?start=false&loop=false&delayms=3000",
    },
    {
        num: "03",
        category: "Beta Release",
        title: "Game KPI's",
        description: "Responsible for retrieving key game KPI data from a game within the Unity Engine. Utilized MySQL for data storage, phpMyAdmin for PHP Scripting and HTTP Requesting, ending with Microsoft Excel for visualization creation",
        stack: [{ name: "MySQL" }, { name: "phpMyAdmin" }, { name: "Excel" }, { name: "Unity" }, ],
        image: "/assets/work/Deliv1.png",
        live: "https://docs.google.com/presentation/d/e/2PACX-1vTla1oDAGy3HtqNCRpYm2wkQkIlfjQAzaGbJEz8mlrUGdqhwwkh373zkkpvvLRPILeoKmBya__NrfKd/pub?start=false&loop=false&delayms=3000",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vTla1oDAGy3HtqNCRpYm2wkQkIlfjQAzaGbJEz8mlrUGdqhwwkh373zkkpvvLRPILeoKmBya__NrfKd/pub?start=false&loop=false&delayms=3000",
    },
    // Add more featured projects if needed
];

const highlight1 = [
    {
        num: "01",
        category: "Full Stack App Project",
        title: "SEAT-Cupra ML Software Dev Intern",
        description: "Working with SEAT-Cupra to develop advanced machine learning solutions for their infotainment system. Project was created using QLearning, PyTorch, Unity Engine, and Supabase PostgreSQL. Additional information not available under NDA.",
        stack: [{ name: "PyTorch" }, { name: "Unity Engine" }, { name: "Python" }, { name: "Supabase" }, { name: "C#" } ],
        image: "/assets/work/intern.png",
        live: "https://www.cupraofficial.es/",
        github: "https://www.cupraofficial.es/",
        completion: "6 Months",
        role: "Software Intern",
    },
    // Add more featured projects if needed
];

const highlight2 = [
    {
        num: "01",
        category: "Video Game Project",
        title: "Alien: Nemesis",
        description: "Alien: Nemesis is a fast paced shooter with exploration, in a dark environment plagued by aliens that will not hesitate to attack if they need to. Developed by Shadow Wizard Games Studios, it is based on the videogame series Diablo, created by Blizzard, and with its last release being in 2023. The aesthetic of the game is based on the Alien franchise started in 1978. Featuring exploration, narrative, & fast paced combat. Developed by Shadow Wizard Games Studios, a team of 23 students at CITM-UPC, on their proprietary game engine: TheOneEngine",
        stack: [{ name: "C++" }, { name: "Maya" }, { name: "Adobe Substance" }, { name: "OpenGL" }, { name: "Photoshop" }, { name: "Figma" }, { name: "Wwise" }],
        image: "/assets/work/AlienNemesis.gif",
        live: "https://shadow-wizard-games.github.io/Alien-Nemesis-Website/index.html",
        github: "https://github.com/Shadow-Wizard-Games/TheOneEngine",
        completion: "4 Months",
        role: "UI/UX Lead / 3D-Artist / Web Developer",
    },
    // Add more featured projects if needed
];

const highlight4 = [
    {
        num: "02",
        category: "VertX Game Engine",
        title: "VertX Game Engine",
        description: "VertX Game Engine, an innovative creation by three talented students from CITM-UPC University in Barcelona, Spain. Developed during the Game Engines course of the 2023-24 academic year. VertX is the result of four months of dedication, passion, and collaboration. Crafted within the robust framework of C++, this game engine leverages the power of OpenGL for cutting-edge graphics rendering, ensuring a seamless and immersive gaming experience. Our journey has been enriched by the incorporation of various open-source libraries, reflecting our commitment to community-driven development. The engine features Game Objects, Lighting, Transforms, Camera Navigation, Camera Frustrum, Raycasting, Scene Serialization, Pause&Play, UI Systems, FBX Support, Texture Support, Low CPU&GPU overhead, Bounding Box Debug, Dynamic Audio, & more!",
        stack: [{ name: "C++" }, { name: "OpenGL" }, { name: "SDL2" }, { name: "GLEW" }, { name: "GLM" }, { name: "Assimp" }, { name: "ImGui" }, { name: "devIL" }, { name: "Visual Studio" }, { name: "Github" }, ],
        image: "/assets/work/VertX.gif",
        live: "https://citm-upc.github.io/VertX-Game-Engine/",
        github: "https://github.com/CITM-UPC/VertX-Game-Engine",
        completion: "1 Month",
        role: "Engine Systems Engineer / Graphics Engineer",
    },
    // Add more featured projects if needed
];

const highlight5 = [
    {
        num: "01",
        category: "Video Game Project",
        title: "HyperStrike",
        description: "HyperStrike is a fast-paced 5v5 multiplayer game where the players must score a ball inside the other team's goal while each player has a character with high mobility movement that allows players to run on the walls, obstacles, and much more in the stadium. The characters have weapons, abilities, and an ultimate abilities that are used to knock out other players and even hit the ball to score, pass or save a goal. The game is built using both UDP & TCP Protocols with interpolation, & predictive state synchronization",
        stack: [{ name: "Unity Engine" }, { name: "UD-Protocol" }, { name: "TC-Protocol" }, { name: "Maya" }, { name: "Adobe Substance" }, { name: "Mixamo" },],
        image: "/assets/work/HyperStrikeLogo.png",
        live: "https://github.com/Historn/NetworksProject",
        github: "https://github.com/Historn/NetworksProject",
        completion: "3 Months",
    },
    // Add more featured projects if needed
];

const highlight6 = [
    {
        num: "01",
        category: "Beta Release",
        title: "PokéRest",
        description: "PokéRest is a full-stack web application created in 6 hrs using Next.js, TypeScript, Shadcn-UI, and restAPI calls to PokeAPI. The project features dynamic routing, search filtering, clean UI, and optimized API retrievals to ensure a functional and superb user experience.",
        stack: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Shadcn" }, { name: "restAPI" }, { name: "Tailwind" }],
        image: "/assets/work/poke.png",
        live: "https://pokerest-app.vercel.app/",
        github: "https://github.com/RylanJGraham/pokerest",
        completion: "6 Hours",
        role: "Lead Software Developer",
    },
    // Add more featured projects if needed
];

const highlight7 = [
    {
        num: "01",
        category: "Beta Release",
        title: "Unity Debug Tool",
        description: "The Unity Debug Tool is a tool to be used by Unity Game Developers to gain real-time insights into player, enemy, or game-state data. The tool utilizes MySQL databases, PHP requests, and in-game events to help developers display live player game data in their scene. Currently featuring heatmap, and prefab generation for player deaths, damage, & enemy states, with customizable coloring, scaling, intensity and more! Check it out!",
        stack: [{ name: "Unity" }, { name: "MySQL" }, { name: "PHP" }, { name: "C++" }, ],
        image: "/assets/work/HeatMap.png",
        live: "https://github.com/JoeyCM/Delivery3",
        github: "https://github.com/JoeyCM/Delivery3",
        completion: "4 Days",
        role: "Data & UI Systems Engineer",
    },
    // Add more featured projects if needed
];

const highlight8 = [
    {
        num: "01",
        category: "3D Art & Animation",
        title: "Studio Ghibli 3D Environment",
        description: "3D Environment created using the Unity Engine, inspired by the Studio Ghibli film: Spirited Away. Explore the scene, with fbx's created using Maya, and painted with Substance Painter & Z-brush. FBX models created following protocols for tri-management, featuring LOD detailing, & more! Custom Camera optimization and shader rendering through scripting using C++.",
        stack: [{ name: "Maya" }, { name: "Unity" }, { name: "Substance Painter" }, { name: "Photoshop" }, { name: "C#" }],
        image: "/assets/work/ghibli.gif",
        live: "https://rylangraham02.wixsite.com/website/team-1",
        github: "https://github.com/RylanJGraham/Unity_Scene-Spirited-Away",
        completion: "2 Weeks",
    },
    // Add more featured projects if needed
];

const highlight9 = [
    {
        num: "01",
        category: "3D Art & Animation",
        title: "Qatar 2022 Data-Vis App",
        description: "The Qatar 2022 Data Visualization is a web application created to demonstrate Argentina's path to victory in the 2022 Fifa World Cup from a data standpoint. Developed using React, in combination with Material UI, X-Charts, and ReCharts, the web app hopes to provide users with a clean and intuitive data journey throughout the tournament. Featuring team overviews, match analysis, and more, the website hopes to back-up Argentinas victory with solid and interactable data graphics. Check it out!",
        stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Material UI" }, { name: "X-Charts" }, { name: "ReCharts" }, { name: "Kaggle" }, { name: "Excel" }, { name: "Figma" },],
        image: "/assets/work/Qatar.png",
        live: "https://worldcup2022datavisualized.vercel.app",
        github: "https://github.com/RylanJGraham/world_cup_2022_datavisualized",
        completion: "2 Weeks",
    },
    // Add more featured projects if needed
];

const highlight10 = [
    {
        num: "01",
        category: "UI/UX Design Project",
        title: "Primavera Pulse",
        description: "Primavera Pulse serves as a gamified app companion for the global music festival: Primavera Sound. Using gamified mechanics users can explore & enjoy the festival more, with nice rewards! Development is currently in the UI Demo stage, attached below is the figma prototype!",
        stack: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Excel" }, { name: "Google Slides" }],
        image: "/assets/work/PrimaveraShort.png",
        live: "https://www.figma.com/proto/Lw3BcdaDKPdpsI7yrEcaTz/Primavera-Pulse?node-id=2-545&t=TqmqKKVTSYVCKREP-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A545&show-proto-sidebar=1",
        github: "https://docs.google.com/presentation/d/e/2PACX-1vQ4OOGAp8degVyu6s6ZQam5bzvV003IzNlAJzUXgv6xE5x6Fnj0sUQ70bbtuGCEAG_2jJ-cnFsA_DI3/pub?start=false&loop=false&delayms=3000",
        completion: "4 Weeks",
    },
    // Add more featured projects if needed
];



const Work = () => {

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"} }} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            
            <div id="featured-projects" className='container mx-auto'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                Featured Projects
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-accent"></div>
                </div>

                <Tabs defaultValue="category-2" className="flex flex-col">
                    <TabsList className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center">
                        <TabsTrigger value="category-2">Alien: Nemesis</TabsTrigger>
                        <TabsTrigger value="category-4">VertX Engine</TabsTrigger>
                        <TabsTrigger value="category-10">Primavera Pulse</TabsTrigger>
                        <TabsTrigger value="category-5">HyperStrike</TabsTrigger>
                        <TabsTrigger value="category-1">Cupra-ML</TabsTrigger>
                        <TabsTrigger value="category-6">PokéRest</TabsTrigger>
                        <TabsTrigger value="category-7">Unity Data</TabsTrigger>
                        <TabsTrigger value="category-8">Ghibli-Environment</TabsTrigger>
                        <TabsTrigger value="category-9">Qatar 2022</TabsTrigger>
                    </TabsList>

                    <TabsContent value="category-1" className="mt-8">
                        <ProjectDisplay projects={highlight1} />
                    </TabsContent>
                    <TabsContent value="category-2" className="mt-8">
                        <ProjectDisplay projects={highlight2} />
                    </TabsContent>
                    <TabsContent value="category-4" className="mt-8">
                        <ProjectDisplay projects={highlight4} />
                    </TabsContent>
                    <TabsContent value="category-5" className="mt-8">
                        <ProjectDisplay projects={highlight5} />
                    </TabsContent>
                    <TabsContent value="category-6" className="mt-8">
                        <ProjectDisplay projects={highlight6} />
                    </TabsContent>
                    <TabsContent value="category-7" className="mt-8">
                        <ProjectDisplay projects={highlight7} />
                    </TabsContent>
                    <TabsContent value="category-8" className="mt-8">
                        <ProjectDisplay projects={highlight8} />
                    </TabsContent>
                    <TabsContent value="category-9" className="mt-8">
                        <ProjectDisplay projects={highlight9} />
                    </TabsContent>
                    <TabsContent value="category-10" className="mt-8">
                        <ProjectDisplay projects={highlight10} />
                    </TabsContent>
                </Tabs>
            </div>
            <div id="all-projects" className='container mx-auto'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                All Projects
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-accent"></div>
                </div>

                <Tabs defaultValue="category-2" className="flex flex-col">
                    <TabsList className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center">
                        <TabsTrigger value="category-2">Video Games</TabsTrigger>
                        <TabsTrigger value="category-3">Web/App</TabsTrigger>
                        <TabsTrigger value="category-4">UI/UX</TabsTrigger>
                        <TabsTrigger value="category-5">3D Art & Animation</TabsTrigger>
                        <TabsTrigger value="category-1">Professional</TabsTrigger>
                        <TabsTrigger value="category-6">Data Engineering</TabsTrigger>
                    </TabsList>

                    <TabsContent value="category-1" className="mt-8">
                        <ProjectSlideshow projects={projects5} />
                    </TabsContent>
                    <TabsContent value="category-2" className="mt-8">
                        <ProjectSlideshow projects={projects1} />
                    </TabsContent>
                    <TabsContent value="category-3" className="mt-8">
                        <ProjectSlideshow projects={projects2} />
                    </TabsContent>
                    <TabsContent value="category-4" className="mt-8">
                        <ProjectSlideshow projects={projects3} />
                    </TabsContent>
                    <TabsContent value="category-5" className="mt-8">
                        <ProjectSlideshow projects={projects4} />
                    </TabsContent>
                    <TabsContent value="category-6" className="mt-8">
                        <ProjectSlideshow projects={projects6} />
                    </TabsContent>
                </Tabs>
            </div>
        </motion.section>
    );
}

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

const ProjectDisplay = ({ projects }) => {
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-6 w-full">
                    {/* Project Image with Overlay Buttons */}
                    <div className="relative w-full h-[300px]">
                        {/* Project Image */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                            unoptimized
                        />
                    </div>

                    {/* Project Info */}
                    <div className="w-full flex flex-col gap-4 text-left">
                        <div className="flex flex-row gap-4 justify-between">
                            <h2 className="text-[42px] font-extrabold text-transparent text-outline font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <div className="flex flex-row gap-8 align-center justify-middle">
                                <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-2">
                                View:
                                </h3>
                                <div className="flex flex-col gap-4 justify-start">
                                    <div className="w-full flex flex-row gap-4 text-left">
                                    <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[50px] h-[50px] rounded-full group flex justify-center items-center bg-white/5 backdrop-blur-md"
                                        >
                                            <CgWebsite className="text-white text-2xl group-hover:text-accent" />
                                            <span className="sr-only">Live Project</span>
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[50px] h-[50px] rounded-full group flex justify-center items-center bg-white/5 backdrop-blur-md"
                                        >
                                            <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                            <span className="sr-only">GitHub Repository</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-accent mt-0 text-[16px]">{project.role}</p>
                        <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-2">
                            Project Overview
                        </h3>
                        <p className="text-white/60">{project.description}</p>
                        <div className="flex flex-row gap-4 justify-between">
                                <div className="flex flex-col gap-4 justify-start">
                                    <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-2">
                                        Tech Stack
                                    </h3>
                                    <ul className="flex flex-wrap gap-4 justify-start">
                                        {project.stack.map((item, index) => (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4 justify-end">
                                    <h3 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                        Work Time
                                    </h3>
                                    <p className="text-white/80 text-[16px]">{project.completion}</p>
                                </div>
                        </div>
                        <div className="border border-white/20 my-6 mb-40"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default Work;
