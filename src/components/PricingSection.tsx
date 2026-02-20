"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
    return (
        <section id="pricing" className="relative z-20 px-6 lg:px-12 py-32 bg-transparent text-center flex flex-col items-center justify-center -mt-20 pb-64 overflow-hidden">
            {/* Ambient Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl lg:max-w-6xl mx-auto space-y-16 relative z-10"
            >
                <div className="space-y-4 text-center">
                    <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase">Estrategia de Pricing</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/90 leading-tight">
                        Pura alineación <br />
                        <span className="italic font-normal">de intereses.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Mode 1: Performance */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="relative group p-8 lg:p-12 border border-white/[0.05] bg-[#030303]/60 rounded-[2.5rem] backdrop-blur-xl flex flex-col items-start text-left overflow-hidden transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] text-white/40 tracking-widest">SUCCESS_MODEL</span>
                        </div>
                        <h3 className="text-xl font-light text-white/70 group-hover:text-white mb-6 tracking-wide transition-colors">Success Fee</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-5xl lg:text-7xl font-light text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-700 origin-left">25</span>
                            <span className="text-2xl text-white/40">%</span>
                        </div>
                        <p className="text-sm lg:text-lg text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                            Sobre la <strong className="text-white/80 font-normal underline decoration-blue-500/30 underline-offset-4">ganancia neta incremental</strong> generada directamente por nuestra implementación.
                        </p>
                    </motion.div>

                    {/* Mode 2: Optimization */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="relative group p-8 lg:p-12 border border-white/[0.05] bg-[#030303]/60 rounded-[2.5rem] backdrop-blur-xl flex flex-col items-start text-left overflow-hidden transition-all duration-500 hover:border-cyan-500/20 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] text-white/40 tracking-widest">EFFICIENCY_MODEL</span>
                        </div>
                        <h3 className="text-xl font-light text-white/70 group-hover:text-white mb-6 tracking-wide transition-colors">Optimization Fee</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-5xl lg:text-7xl font-light text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform duration-700 origin-left">25</span>
                            <span className="text-2xl text-white/40">%</span>
                        </div>
                        <p className="text-sm lg:text-lg text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                            Del <strong className="text-white/80 font-normal underline decoration-cyan-500/30 underline-offset-4">valor operativo liberado</strong>, optimizando la capacidad instalada de la organización.
                        </p>
                    </motion.div>
                </div>

                {/* The Equation */}
                <div className="pt-12 flex flex-col items-center">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex flex-wrap items-center justify-center gap-4 px-10 py-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] group relative overflow-hidden"
                    >
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        <span className="text-white/40 font-mono text-xs uppercase tracking-[0.3em] mr-4">Equation:</span>
                        <span className="text-xl md:text-2xl text-white/80 font-light">VALOR NETO</span>
                        <span className="text-blue-500 text-2xl font-light mx-2">×</span>
                        <span className="text-xl md:text-2xl text-white/80 font-light">0.25</span>
                        <span className="text-white/40 text-2xl font-light mx-2">=</span>
                        <span className="text-2xl md:text-3xl text-white font-medium tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">HIKE FEE</span>
                    </motion.div>
                    <p className="mt-12 text-sm md:text-base text-white/30 font-light tracking-widest uppercase flex items-center gap-4">
                        <span className="w-8 h-px bg-white/10" />
                        Sólo valor capturado
                        <span className="w-8 h-px bg-white/10" />
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

