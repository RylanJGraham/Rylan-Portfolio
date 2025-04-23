"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "rauxa-tfg", label: "Rauxa TFG" },
  { id: "featured-projects", label: "Featured" },
  { id: "all-projects", label: "All" },
];

export default function WorkNav() {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-8 top-0 bottom-0 z-50 flex items-center"
    >
      <div className="bg-black/60 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center gap-6">
        {navItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center gap-6">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-xl font-bold transition ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </button>

            {index !== navItems.length - 1 && (
              <div className="flex flex-col gap-6">
                {Array.from({ length: 4 }).map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className="w-2.5 h-2.5 rounded-full bg-accent"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.nav>
  );
}
