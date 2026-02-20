"use client";

import { motion } from "framer-motion";

export default function MetricsSection() {
    return (
        <section id="impact" className="relative z-20 py-32 px-6 lg:px-12 bg-transparent overflow-hidden">
            <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 flex justify-center flex-col items-center gap-4"
                >
                    <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Impacto Operativo</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90">
                        Resultados directos en el P&L.
                    </h2>
                    <p className="text-white/40 text-sm md:text-base font-light max-w-xl">
                        No vendemos implementaciones aisladas. Instalamos infraestructura que expande tus márgenes operativos.
                    </p>
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
                        <h3 className="text-6xl lg:text-7xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">-80<span className="text-3xl text-blue-500">%</span></h3>
                        <h4 className="text-lg lg:text-xl font-light tracking-wide text-white/90 mb-2">Latencia de Ejecución</h4>
                        <p className="text-white/50 text-sm font-light">Transformamos procesos manuales de semanas en flujos autónomos de segundos.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors flex flex-col justify-center items-center text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-cyan-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                        <h3 className="text-6xl lg:text-7xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">100<span className="text-3xl text-cyan-500">%</span></h3>
                        <h4 className="text-lg lg:text-xl font-light tracking-wide text-white/90 mb-2">Activos de Proceso</h4>
                        <p className="text-white/50 text-sm font-light">Eliminamos la dependencia del talento individual convirtiéndolo en propiedad intelectual colectiva.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors flex flex-col justify-center items-center text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-indigo-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                        <h3 className="text-6xl lg:text-7xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">25<span className="text-3xl text-indigo-500">%</span></h3>
                        <h4 className="text-lg lg:text-xl font-light tracking-wide text-white/90 mb-2">Value Capture</h4>
                        <p className="text-white/50 text-sm font-light">Nuestro modelo es performance-based. Ganamos solo una fracción del valor neto que logramos ahorrar.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
