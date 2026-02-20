"use client";

import { motion } from "framer-motion";
import { CopySlashIcon as Python, CloudCog, Database, Cpu, Bot, Code2, Sparkles, Workflow, BrainCircuit } from "lucide-react";

const technologies = [
    { name: "Vertex AI", icon: BrainCircuit, color: "text-cyan-400" },
    { name: "Kubernetes", icon: CloudCog, color: "text-blue-400" },
    { name: "Python", icon: Code2, color: "text-blue-500" },
    { name: "Go", icon: Cpu, color: "text-cyan-500" },
    { name: "BigQuery", icon: Database, color: "text-indigo-400" },
    { name: "LLMOps", icon: Bot, color: "text-blue-600" },
    { name: "Terraform", icon: Workflow, color: "text-indigo-500" },
    { name: "LangChain", icon: Sparkles, color: "text-cyan-300" },
];

export default function TechStackSection() {
    return (
        <section id="stack" className="relative z-20 py-32 bg-transparent overflow-hidden">
            {/* Ambient Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.05)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 max-w-2xl"
                >
                    <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">El Arsenal Técnico</p>
                    <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white/90">
                        Ingeniería de Clase Mundial.
                    </h3>
                    <p className="text-white/40 font-light text-sm md:text-base leading-relaxed">
                        Desplegamos el verdadero stack de ingeniería utilizado por las top-tier tech companies para garantizar robustez y escalabilidad infinita.
                    </p>
                </motion.div>

                <div className="w-full">
                    {/* Infinite Scroll Effect Container */}
                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                            className="flex gap-4 md:gap-6 w-max py-4"
                        >
                            {[...technologies, ...technologies].map((tech, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center gap-4 px-8 py-5 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shrink-0 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:scale-105"
                                >
                                    <tech.icon className={`w-6 h-6 ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity`} strokeWidth={1} />
                                    <span className="text-white/60 group-hover:text-white font-light text-sm tracking-[0.2em] transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
