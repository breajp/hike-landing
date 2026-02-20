"use client";

import { motion } from "framer-motion";
import { CopySlashIcon as Python, CloudCog, Database, Cpu, Bot, Code2, Sparkles, Workflow, BrainCircuit } from "lucide-react";

const technologies = [
    { name: "Vertex AI", icon: BrainCircuit },
    { name: "Kubernetes", icon: CloudCog },
    { name: "Python", icon: Code2 },
    { name: "Go", icon: Cpu },
    { name: "BigQuery", icon: Database },
    { name: "LLMOps", icon: Bot },
    { name: "Terraform", icon: Workflow },
    { name: "LangChain", icon: Sparkles },
];

export default function TechStackSection() {
    return (
        <section id="stack" className="relative z-20 py-24 bg-transparent border-y border-white/[0.02] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="md:w-1/3 space-y-4">
                    <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">El Arsenal Técnico</p>
                    <h3 className="text-2xl md:text-4xl font-light tracking-wide text-white/90">
                        Our Tech Stack.
                    </h3>
                    <p className="text-white/50 font-light text-sm md:text-base leading-relaxed">
                        Desplegamos el verdadero stack de ingeniería utilizado por las top-tier tech companies.
                    </p>
                </div>

                <div className="md:w-2/3 w-full">
                    {/* Infinite Scroll Effect Container */}
                    <div className="relative w-full overflow-hidden mask-image-linear-x">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                            className="flex gap-4 md:gap-8 w-max"
                        >
                            {[...technologies, ...technologies].map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#030303]/80 border border-white/5 backdrop-blur-md shrink-0"
                                >
                                    <tech.icon className="w-5 h-5 text-blue-500/70" strokeWidth={1.5} />
                                    <span className="text-white/70 font-mono text-sm tracking-widest">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Very subtle glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
