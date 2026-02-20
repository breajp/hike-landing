"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, label: "auditar", color: "text-cyan-400", glow: "shadow-[0_0_20px_rgba(34,211,238,0.5)]", pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { id: 2, label: "conectar", color: "text-blue-400", glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]", pos: "top-[28%]" },
    { id: 3, label: "automatizar", color: "text-blue-300", glow: "shadow-[0_0_20px_rgba(147,197,253,0.2)]", pos: "top-[18%]" },
    { id: 4, label: "escalar", color: "text-white/40", glow: "shadow-[0_0_20px_rgba(255,255,255,0.1)]", pos: "top-[8%]" }
];

export default function MethodologySection() {
    return (
        <section className="relative z-20 py-32 lg:py-64 bg-[#020202] flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient Background Glows - Volumetric Blue */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-blue-600/20 blur-[160px] rounded-full mix-blend-screen opacity-60" />
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 md:mb-32 flex justify-center flex-col items-center gap-4 px-6 relative z-30"
            >
                <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase max-w-lg">Metodología Elevada</p>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-white/95">
                    De la auditoría a la autonomía.
                </h2>
                <p className="text-white/40 text-sm md:text-base font-light max-w-lg mt-6">
                    Un proceso sistemático de cuatro capas diseñado para rediseñar el <strong className="text-white/80 font-normal">core</strong> de tu operación,
                    no su periferia. De la auditoría profunda a la autonomía total.
                </p>
            </motion.div>

            <div className="relative w-[340px] h-[340px] md:w-[700px] md:h-[700px] flex items-center justify-center mt-10 md:mt-0 z-10">

                {/* Volumetric Glowing Rings (Inspired by Foto 2) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Level 4 - Outer Glow (Sync with Step 4) */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.8, 0.1],
                            borderColor: ["rgba(59,130,246,0.1)", "rgba(59,130,246,0.5)", "rgba(59,130,246,0.1)"]
                        }}
                        transition={{ repeat: Infinity, duration: 4, delay: 3, ease: "easeInOut" }}
                        className="absolute w-[95%] h-[95%] rounded-full border bg-gradient-to-tr from-blue-600/5 to-transparent blur-sm shadow-[0_0_50px_rgba(37,99,235,0.05)]"
                    />

                    {/* Level 3 (Sync with Step 3) */}
                    <motion.div
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            borderColor: ["rgba(59,130,246,0.2)", "rgba(59,130,246,0.6)", "rgba(59,130,246,0.2)"]
                        }}
                        transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
                        className="absolute w-[75%] h-[75%] rounded-full border bg-gradient-to-tr from-blue-500/5 to-transparent shadow-[inset_0_0_40px_rgba(59,130,246,0.1)]"
                    />

                    {/* Level 2 (Sync with Step 2) */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            borderColor: ["rgba(34,211,238,0.3)", "rgba(34,211,238,0.8)", "rgba(34,211,238,0.3)"]
                        }}
                        transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                        className="absolute w-[55%] h-[55%] rounded-full border bg-gradient-to-tr from-cyan-500/5 to-transparent shadow-[inset_0_0_30px_rgba(34,211,238,0.1)]"
                    />

                    {/* Level 1 - The Core Torus/Glow (Sync with Step 1) */}
                    <div className="absolute w-[35%] h-[35%] rounded-full z-20 overflow-hidden">
                        <div className="absolute inset-0 bg-[#020202] rounded-full z-10" />
                        <motion.div
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ repeat: Infinity, duration: 4, delay: 0, ease: "easeInOut" }}
                            className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 blur-[20px]"
                        />
                    </div>
                </div>

                {/* SVG Detail Lines Desktop */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden md:block" viewBox="0 0 700 700">
                    <circle cx="350" cy="350" r="330" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="5 5" />
                    <circle cx="350" cy="350" r="260" fill="none" stroke="blue" className="opacity-20" strokeWidth="1.5" />
                    <circle cx="350" cy="350" r="190" fill="none" stroke="cyan" className="opacity-30" strokeWidth="1.5" />
                    <circle cx="350" cy="350" r="120" fill="none" stroke="white" className="opacity-40" strokeWidth="2" />
                </svg>

                {/* Text Levels with high-contrast shadows */}
                <div className="z-40 absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            animate={{
                                opacity: [0.1, 1, 0.1],
                                scale: [0.95, 1.05, 0.95],
                                filter: ["brightness(0.5) blur(1px)", "brightness(1.5) blur(0px)", "brightness(0.5) blur(1px)"]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                delay: i * 1,
                                ease: "easeInOut"
                            }}
                            className={cn("absolute flex flex-col items-center", step.pos)}
                        >
                            <span className="font-mono text-[10px] opacity-40 mb-1 tracking-widest">{step.id}</span>
                            <span className={cn(
                                "font-light tracking-[0.3em] text-lg md:text-2xl transition-all duration-500",
                                i === 0 ? "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" : "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                            )}>
                                {step.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
