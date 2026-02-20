"use client";

import { motion } from "framer-motion";

export default function MetricsSection() {
    return (
        <section className="relative z-20 py-32 px-6 lg:px-12 bg-transparent overflow-hidden">
            <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 flex justify-center flex-col items-center gap-4"
                >
                    <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Impacto Asimétrico</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90">
                        El ROI no es incremental. Es exponencial.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative group p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors flex flex-col justify-center items-center text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-blue-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                        <h3 className="text-6xl lg:text-8xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">10<span className="text-4xl text-blue-500">x</span></h3>
                        <h4 className="text-lg lg:text-xl font-light tracking-wide text-white/90 mb-2">Escalabilidad</h4>
                        <p className="text-white/50 text-sm font-light">Procesos que demoraban semanas ahora corren en segundos.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors flex flex-col justify-center items-center text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-cyan-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                        <h3 className="text-6xl lg:text-8xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">24<span className="text-4xl text-cyan-500">/</span>7</h3>
                        <h4 className="text-lg lg:text-xl font-light tracking-wide text-white/90 mb-2">Autonomía</h4>
                        <p className="text-white/50 text-sm font-light">Agentes operando, corrigiendo y escalando sin intervención.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors flex flex-col justify-center items-center text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-indigo-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                        <h3 className="text-6xl lg:text-8xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"><span className="text-4xl text-indigo-500 mr-2">Cero</span></h3>
                        <h4 className="text-lg lg:text-xl font-light tracking-wide text-white/90 mb-2">Fricción Humana</h4>
                        <p className="text-white/50 text-sm font-light">Eliminamos el error humano y la burocracia de los procesos core.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
