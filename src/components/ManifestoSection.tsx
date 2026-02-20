"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ManifestoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.6", "end 0.4"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [0.15, 1, 0.15]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5], [0.15, 1, 0.15]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 1], [0.15, 1, 1]);

    return (
        <section ref={containerRef} className="relative z-20 bg-transparent overflow-hidden h-[130vh]">
            <div className="max-w-5xl mx-auto text-center sticky top-0 h-screen flex flex-col items-center justify-center px-6 lg:px-12 z-10 w-full">
                <div className="space-y-6 w-full">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-white/60 text-xs font-mono tracking-widest uppercase">El Desafío</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white/90 leading-tight">
                        Solo el <span className="text-white font-medium italic">10%</span> logra escalar con Agentes IA.
                    </h2>

                    {/* McKinsey Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                            target="_blank"
                            className="inline-block mt-4 text-white/40 hover:text-white/80 transition-colors text-[10px] sm:text-xs font-mono tracking-widest uppercase border-b border-white/20 pb-1"
                        >
                            ↘ Fuente: McKinsey & Company
                        </Link>
                    </motion.div>

                    <div className="text-lg md:text-3xl lg:text-4xl text-white font-light leading-relaxed tracking-wide max-w-4xl mx-auto mt-16 space-y-6 md:space-y-8">
                        <motion.p style={{ opacity: opacity1 }} className="transition-opacity duration-300">
                            La barrera no es la tecnología, es la <strong className="font-normal text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">adopción</strong>.
                        </motion.p>
                        <motion.p style={{ opacity: opacity2 }} className="transition-opacity duration-300">
                            El fracaso ocurre al depender del talento individual en lugar de instalar un proceso colectivo.
                        </motion.p>
                        <motion.p style={{ opacity: opacity3 }} className="transition-opacity duration-300">
                            Nosotros intervenimos ahí: construimos la infraestructura para que la IA penetre y escale en toda la organización.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center h-screen sticky top-0">
                <div className="w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-[100%] mix-blend-screen" />
            </div>
        </section>
    );
}
