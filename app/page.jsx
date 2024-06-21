import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

// Replace 'cv.pdf' with the actual filename of your CV
const cvFileUrl = '/assets/pdf/RylanJamesGrahamResume.pdf';

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 x;:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Video Game Designer/Developer, Full Stack Developer, <br/> UI/UX Designer, & 3D Artist & Animator</span>
            <h1 className="h1 mb-6">Hello I'm <br/> <span className="text-accent">Rylan Graham</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at creating engaging Videogames, elegant Mobile/Web software experiences, beautiful 3D digital artistry, and I am proficient in various programming languages & softwares</p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={cvFileUrl} download="Rylan_Graham_CV.pdf" className="uppercase flex items-center gap-2">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
