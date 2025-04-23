import 'swiper/css';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from "react-icons/cg";
import Image from 'next/image';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaCuttlefish, FaPython, FaNode, FaBrush,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GiOwl } from "react-icons/gi";
import {
    SiFlutter, SiAstro, SiSupabase, SiNextdotjs, SiDart, SiFirebase,
    SiStripe, SiRapid, SiPostgresql, SiUnity, SiAutodeskmaya,
    SiTailwindcss, SiUnrealengine, SiBlender, SiAdobephotoshop,
    SiAdobeillustrator, SiAdobepremierepro, SiJavascript,
    SiVisualstudio, SiAndroidstudio, SiPycharm, SiHarmonyos,
    SiPushbullet, SiLibrarything, SiOpengl, SiBox, SiMysql,
    SiR, SiTableau, SiExpo, SiPhp, SiDocker, SiGithub, SiStackoverflow, SiGoogleslides, SiMicrosoftexcel,
} from "react-icons/si";

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
};

const ProjectStackDisplay = ({ projects }) => {
    return (
        <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
                <div key={index} className="relative w-full h-[400px] rounded-[20px] overflow-hidden group">
                    {/* Image */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-[20px] transition-all duration-500"
                        unoptimized
                    />

                    {/* Top Right Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-4 z-20">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-accent text-white transition-all hover:bg-white hover:text-accent active:scale-95"
                            >
                                <CgWebsite className="text-2xl" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-accent text-white transition-all hover:bg-white hover:text-accent active:scale-95"
                            >
                                <BsGithub className="text-2xl" />
                            </a>
                        )}
                    </div>

                    {/* Title (always visible, independent slide up) */}
                    <h2 className="absolute bottom-6 left-6 text-3xl font-extrabold text-transparent text-outline z-30 transition-all duration-500 group-hover:bottom-[180px]">
                        {project.title}
                    </h2>

                    {/* Slide-up Content Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white pt-[220px] px-6 pb-6 z-20">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <p className="text-accent text-sm font-medium mb-2">{project.role}</p>
                            <p className="text-white/80 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-8 text-sm">
                                <div>
                                    <h4 className="font-semibold uppercase text-white mb-1">Tech Stack</h4>
                                    <ul className="flex flex-wrap gap-4 text-white">
                                        {project.stack.map((item, index) => {
                                            const IconComponent = techIcons[item.name.toLowerCase()];
                                            return (
                                                <li key={index} className="flex items-center gap-2">
                                                    {IconComponent ? (
                                                        <span
                                                            className="text-white text-4xl"
                                                            title={item.name} // Tooltip on hover
                                                        >
                                                            <IconComponent />
                                                        </span>
                                                    ) : (
                                                        <span className="text-accent font-medium">{item.name}</span>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold uppercase text-white mb-1">Work Time</h4>
                                    <p>{project.completion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectStackDisplay;
