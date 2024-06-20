"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 3,
        text: "Years of Experience",
    },
    {
        num: 32,
        text: "Projects Completed",
    },
    {
        num: 36,
        text: "Softwares & Libraries",
    },
    {
        num: 875,
        text: "Total Code Contributions",
    },
]

const Stats = () => {
    return (
        <section className="mt-10">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                        <div 
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start" 
                        key={index}>
                             <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>   
                             <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80`}>
                                {item.text}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
);
};

export default Stats;