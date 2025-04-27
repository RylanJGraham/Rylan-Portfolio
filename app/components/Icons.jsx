import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaCuttlefish, FaPython, FaNode, FaBrush, FaChevronUp,
    FaChevronDown, FaChartBar, FaPaintBrush,
    FaNetworkWired,
  } from "react-icons/fa";
  import { TbAugmentedReality, TbWaveSawTool } from "react-icons/tb";
  import { VscVscode } from "react-icons/vsc";
  import { GiOwl } from "react-icons/gi";
  import { RiSendPlaneFill } from "react-icons/ri";
  import { PiOpenAiLogo } from 'react-icons/pi';
  import { LibraryBig, LibraryIcon } from 'lucide-react';
  import { FiFigma } from "react-icons/fi";
  import {
    SiFlutter, SiAstro, SiSupabase, SiNextdotjs, SiDart, SiFirebase,
    SiStripe, SiRapid, SiPostgresql, SiUnity, SiAutodeskmaya, SiTailwindcss,
    SiUnrealengine, SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro,
    SiJavascript, SiVisualstudio, SiAndroidstudio, SiPycharm, SiHarmonyos,
    SiPushbullet, SiLibrarything, SiOpengl, SiBox, SiMysql, SiGooglegemini,
    SiR, SiTableau, SiExpo, SiPhp, SiDocker, SiGithub, SiStackoverflow,
    SiGoogleslides, SiMicrosoftexcel, SiC, SiGooglemaps, SiAdobe, SiMax,
    SiAutodesk, SiWacom, SiSketchfab, SiPytorch, SiTypescript, SiMaterialdesign,
    SiKaggle, SiShadcnui, SiApifox, SiVercel, SiVite, SiReactquery, SiPython, SiWwise, SiDlib,
    SiTrello,
    SiAseprite,
  } from "react-icons/si";
import { CgMonday } from "react-icons/cg";
  

// Icon map
export const techIcons = {
    // Design
    figma: FaFigma,
    photoshop: SiAdobephotoshop,
    illustrator: SiAdobeillustrator,
    premiere: SiAdobepremierepro,
    material: SiMaterialdesign,
    shadcn: SiShadcnui,
  
    // Programming
    html: FaHtml5,
    css: FaCss3,
    javascript: SiJavascript,
    js: FaJs,
    typescript: SiTypescript,
    python: FaPython,
    cpp: FaCuttlefish,
    node: FaNode,
    php: SiPhp,
    c: SiC,
    r: SiR,
    
    // Frameworks / Libraries
    react: FaReact,
    expo: SiExpo,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    flutter: SiFlutter,
    flutterflow: SiFlutter,
    dart: SiDart,
    astro: SiAstro,
    rtkquery: SiReactquery,
    vite: SiVite,
  
    // Backend / Databases
    supabase: SiSupabase,
    firebase: SiFirebase,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    docker: SiDocker,
  
    // Cloud / APIs
    vercel: SiVercel,
    restapi: SiApifox,
    rapid: SiRapid,
    stripe: SiStripe,
    ar: TbAugmentedReality,
  
    // Tools
    vscode: VscVscode,
    visualstudio: SiVisualstudio,
    androidstudio: SiAndroidstudio,
    pycharm: SiPycharm,
    github: SiGithub,
    stackoverflow: SiStackoverflow,
    excel: SiMicrosoftexcel,
    googleslides: SiGoogleslides,
    slides: SiGoogleslides,
    kaggle: SiKaggle,
    opengl: SiOpengl,
    adobe: SiAdobe,
    sdl2: LibraryBig,
  
    // 3D / Animation
    unity: SiUnity,
    unreal: SiUnrealengine,
    maya: SiAutodeskmaya,
    mixamo: SiAutodeskmaya,
    blender: SiBlender,
    sketchfab: SiSketchfab,
    substance: SiAdobe,
    dsmax: SiAutodesk,
    zbrush: FaPaintBrush,
    wacom: SiWacom,
    wwise: SiWwise,
    aseprite: SiAseprite,
  
    // AI / ML
    gemini: SiGooglegemini,
    openai: PiOpenAiLogo,
    pytorch: SiPytorch,
  
    // Visualization
    tableau: SiTableau,
    xcharts: FaChartBar,
  
    // Project Management
    mondays: CgMonday, // Assuming you meant 'LibraryBig' for Monday.com - minor issue
    trello: SiTrello, // 'BsTrello' not imported earlier, so corrected
  
    // Networking
    tcp: FaNetworkWired,
    udp: TbWaveSawTool,
  
    // Maps
    maps: SiGooglemaps,
  
    // Animation Software
    toonboom: SiHarmonyos,
  };
  