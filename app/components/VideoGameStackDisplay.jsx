import 'swiper/css';
import { BsGithub, BsTrello } from 'react-icons/bs';
import { CgMonday, CgWebsite } from "react-icons/cg";
import { useState } from 'react';
import Image from 'next/image';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaCuttlefish, FaPython, FaNode, FaBrush, FaChevronUp,
    FaChevronDown,
    FaNetworkWired,
} from "react-icons/fa";
import {
    TbAugmentedReality,
    TbWaveSawTool,
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GiOwl } from "react-icons/gi";
import {
    SiFlutter, SiAstro, SiSupabase, SiNextdotjs, SiDart, SiFirebase,
    SiStripe, SiRapid, SiPostgresql, SiUnity, SiAutodeskmaya,
    SiTailwindcss, SiUnrealengine, SiBlender, SiAdobephotoshop,
    SiAdobeillustrator, SiAdobepremierepro, SiJavascript,
    SiVisualstudio, SiAndroidstudio, SiPycharm, SiHarmonyos,
    SiPushbullet, SiLibrarything, SiOpengl, SiBox, SiMysql, SiGooglegemini,
    SiR, SiTableau, SiExpo, SiPhp, SiDocker, SiGithub, SiStackoverflow, SiGoogleslides, SiMicrosoftexcel, SiC,
    SiGooglemaps,
    SiAdobe,
    SiWwise,
    SiDlib,
} from "react-icons/si";
import { RiSendPlaneFill } from "react-icons/ri";
import { LibraryBig, LibraryIcon } from 'lucide-react';

// Icon map
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
    c: SiC,
    adobe: SiAdobe,
    opengl: SiOpengl,
    wwise: SiWwise,
    unity: SiUnity,
    mixamo: SiAutodeskmaya,
    sdl2: LibraryBig,
    visualstudio: SiVisualstudio,
    mondays: CgMonday,
    trello: BsTrello,
    tcp: FaNetworkWired,
    udp: TbWaveSawTool,
};

const VideoGameStackDisplay = ({ projects }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleInfo = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-12">
      {projects.map((project, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div key={index} className="relative w-full h-[400px] rounded-[20px] overflow-hidden">
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-[20px]"
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
              {/* Top row: title/status + tech stack side-by-side */}
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
        );
      })}
    </div>
  );
};

export default VideoGameStackDisplay;
