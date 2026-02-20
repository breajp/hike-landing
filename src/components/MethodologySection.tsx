"use client";

import { motion } from "framer-motion";

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
                    {/* Level 4 - Outer Glow */}
                    <div className="absolute w-[95%] h-[95%] rounded-full border border-blue-500/10 bg-gradient-to-tr from-blue-600/5 to-transparent blur-sm shadow-[0_0_50px_rgba(37,99,235,0.05)]" />

                    {/* Level 3 */}
                    <div className="absolute w-[75%] h-[75%] rounded-full border border-blue-400/20 bg-gradient-to-tr from-blue-500/5 to-transparent shadow-[inset_0_0_40px_rgba(59,130,246,0.1)]" />

                    {/* Level 2 */}
                    <div className="absolute w-[55%] h-[55%] rounded-full border border-cyan-400/30 bg-gradient-to-tr from-cyan-500/5 to-transparent shadow-[inset_0_0_30px_rgba(34,211,238,0.1)]" />

                    {/* Level 1 - The Core Torus/Glow */}
                    <div className="absolute w-[35%] h-[35%] rounded-full z-20 overflow-hidden">
                        <div className="absolute inset-0 bg-[#020202] rounded-full z-10" />
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 blur-[20px] opacity-40 animate-pulse" />
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
                    {/* Step 1 - Inner */}
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        className="absolute flex flex-col items-center"
                    >
                        <span className="font-mono text-[10px] text-cyan-400/80 mb-1 tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,1)]">1</span>
                        <span className="font-light tracking-[0.3em] text-lg md:text-2xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">auditar</span>
                    </motion.div>

                    {/* Step 2 */}
                    <div className="absolute top-[28%] md:top-[28%] flex flex-col items-center">
                        <span className="font-mono text-[9px] text-white/30 mb-1 tracking-widest">2</span>
                        <span className="font-extralight tracking-[0.2em] text-sm md:text-lg text-white/60">conectar</span>
                    </div>

                    {/* Step 3 */}
                    <div className="absolute top-[18%] md:top-[18%] flex flex-col items-center">
                        <span className="font-mono text-[9px] text-white/20 mb-1 tracking-widest">3</span>
                        <span className="font-extralight tracking-[0.2em] text-sm md:text-lg text-white/40">automatizar</span>
                    </div>

                    {/* Step 4 */}
                    <div className="absolute top-[8%] md:top-[8%] flex flex-col items-center">
                        <span className="font-mono text-[9px] text-white/10 mb-1 tracking-widest">4</span>
                        <span className="font-extralight tracking-[0.2em] text-sm md:text-lg text-white/20">escalar</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
