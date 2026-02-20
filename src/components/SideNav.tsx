"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "home", label: "Inicio" },
    { id: "philosophy", label: "Misión" },
    { id: "clients", label: "Clientes" },
    { id: "story", label: "Historia" },
    { id: "units", label: "Unidades" },
    { id: "pricing", label: "Pricing" }
];

export default function SideNav() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-start gap-6">
            <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-white/10" />
            <motion.div
                className="absolute left-[3px] w-[1px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-500 ease-out"
                style={{
                    top: `${Math.max(0, sections.findIndex(s => s.id === activeSection)) * (100 / (sections.length - 1))}%`,
                    height: "1px" // The dot height
                }}
            />

            {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                    <button
                        key={section.id}
                        onClick={() => scrollTo(section.id)}
                        className="group flex items-center gap-4 relative"
                    >
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] scale-110' : 'bg-white/20 group-hover:bg-cyan-400/50'}`} />
                        <span className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-white font-bold tracking-[0.25em]' : 'text-white/30 font-medium group-hover:text-white/60'}`}>
                            {section.label}
                        </span>
                    </button>
                );
            })}
        </div >
    );
}
