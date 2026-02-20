"use client";

import { motion } from "framer-motion";

export default function MethodologySection() {
    return (
        <section className="relative z-20 py-32 lg:py-48 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 md:mb-32 flex justify-center flex-col items-center gap-4 px-6 relative z-30"
            >
                <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase max-w-lg">Metodología Elevada</p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-white/90">
                    De la auditoría a la autonomía.
                </h2>
                <p className="text-white/40 text-sm md:text-base font-light max-w-lg mt-4">
                    Un proceso sistemático de cuatro capas diseñado para penetrar en tu estructura,
                    entender sus ineficiencias y automatizarlas.
                </p>
            </motion.div>

            <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex items-center justify-center mt-10 md:mt-0">
                {/* Ambient Glows simulating photo 2 */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600/30 via-pink-600/20 to-emerald-600/10 blur-[60px] md:blur-[100px] mix-blend-screen" />
                <div className="absolute inset-4 md:inset-8 rounded-full bg-[#080808] z-10 shadow-[inset_-20px_-20px_80px_rgba(255,255,255,0.03)]" />

                {/* SVG Rings Desktop */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden md:block" viewBox="0 0 600 600">
                    {/* Outer dotted */}
                    <circle cx="300" cy="300" r="280" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                    {/* Ring 1 - inner */}
                    <circle cx="300" cy="210" r="140" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    {/* Ring 2 */}
                    <circle cx="300" cy="245" r="190" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    {/* Ring 3 */}
                    <circle cx="300" cy="275" r="230" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </svg>

                {/* SVG Rings Mobile */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none md:hidden" viewBox="0 0 320 320">
                    <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="160" cy="115" r="75" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <circle cx="160" cy="135" r="105" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    <circle cx="160" cy="148" r="125" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </svg>

                {/* Text Items Desktop */}
                <div className="z-30 absolute inset-0 hidden md:flex flex-col items-center text-white/80 pointer-events-none pt-[10px]">
                    <div className="absolute top-[280px] flex flex-col items-center group">
                        <span className="font-mono text-[10px] text-white/40 mb-1 tracking-widest">1</span>
                        <span className="font-light tracking-widest text-xl transition-all">auditar</span>
                    </div>
                    <div className="absolute top-[385px] flex flex-col items-center">
                        <span className="font-mono text-[10px] text-white/40 mb-1 tracking-widest">2</span>
                        <span className="font-light tracking-widest text-xl transition-all">conectar</span>
                    </div>
                    <div className="absolute top-[465px] flex flex-col items-center">
                        <span className="font-mono text-[10px] text-white/40 mb-1 tracking-widest">3</span>
                        <span className="font-light tracking-widest text-xl transition-all">automatizar</span>
                    </div>
                    <div className="absolute top-[545px] flex flex-col items-center">
                        <span className="font-mono text-[10px] text-white/40 mb-1 tracking-widest">4</span>
                        <span className="font-light tracking-widest text-xl text-white/60 transition-all">escalar</span>
                    </div>
                </div>

                {/* Text Items Mobile */}
                <div className="z-30 absolute inset-0 flex md:hidden flex-col items-center text-white/80 pointer-events-none">
                    <div className="absolute top-[160px] flex flex-col items-center">
                        <span className="font-mono text-[8px] text-white/40 mb-0.5">1</span>
                        <span className="font-light tracking-wider text-sm">auditar</span>
                    </div>
                    <div className="absolute top-[215px] flex flex-col items-center">
                        <span className="font-mono text-[8px] text-white/40 mb-0.5">2</span>
                        <span className="font-light tracking-wider text-sm">conectar</span>
                    </div>
                    <div className="absolute top-[252px] flex flex-col items-center">
                        <span className="font-mono text-[8px] text-white/40 mb-0.5">3</span>
                        <span className="font-light tracking-wider text-sm">automatizar</span>
                    </div>
                    <div className="absolute top-[285px] flex flex-col items-center">
                        <span className="font-mono text-[8px] text-white/40 mb-0.5">4</span>
                        <span className="font-light tracking-wider text-sm text-white/60">escalar</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
