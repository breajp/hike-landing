"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
    return (
        <section id="pricing" className="relative z-20 px-6 lg:px-12 py-32 bg-transparent text-center flex flex-col items-center justify-center -mt-20 pb-64">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl lg:max-w-6xl mx-auto space-y-16"
            >
                <div className="space-y-4 text-center">
                    <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase">Estrategia de Pricing</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/90 leading-tight">
                        Pura alineación de intereses.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Mode 1: Performance */}
                    <div className="relative group p-8 lg:p-12 border border-white/[0.05] bg-[#030303]/60 rounded-[2.5rem] backdrop-blur-xl flex flex-col items-start text-left overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-xs text-white/40">MODE_01</span>
                        </div>
                        <h3 className="text-xl font-light text-white mb-6 tracking-wide">Success Fee</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-4xl lg:text-5xl font-light text-blue-500">25</span>
                            <span className="text-2xl text-white/40">%</span>
                        </div>
                        <p className="text-sm lg:text-base text-white/50 font-light leading-relaxed">
                            Sobre la <strong className="text-white/80 font-normal underline decoration-blue-500/30 underline-offset-4">ganancia neta incremental</strong> generada directamente por la automatización e inteligencia.
                        </p>
                    </div>

                    {/* Mode 2: Optimization */}
                    <div className="relative group p-8 lg:p-12 border border-white/[0.05] bg-[#030303]/60 rounded-[2.5rem] backdrop-blur-xl flex flex-col items-start text-left overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-xs text-white/40">MODE_02</span>
                        </div>
                        <h3 className="text-xl font-light text-white mb-6 tracking-wide">Optimization Fee</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-4xl lg:text-5xl font-light text-cyan-500">25</span>
                            <span className="text-2xl text-white/40">%</span>
                        </div>
                        <p className="text-sm lg:text-base text-white/50 font-light leading-relaxed">
                            Del <strong className="text-white/80 font-normal underline decoration-cyan-500/30 underline-offset-4">tiempo anual ahorrado</strong>, valuado según el costo operativo vigente de la organización.
                        </p>
                    </div>
                </div>

                {/* The Equation */}
                <div className="pt-8 flex flex-col items-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                        <span className="text-white/40 font-mono text-sm uppercase tracking-widest mr-4">Equation:</span>
                        <span className="text-lg md:text-xl text-white/80">Net Value</span>
                        <span className="text-blue-500 text-xl font-light">×</span>
                        <span className="text-lg md:text-xl text-white/80">0.25</span>
                        <span className="text-white/40 text-xl font-light mx-2">=</span>
                        <span className="text-xl md:text-2xl text-white font-medium tracking-tight">Hike Fee</span>
                    </div>
                    <p className="mt-8 text-xs md:text-sm text-white/30 font-light tracking-wide italic">
                        Sin retainers inflexibles. Sin facturación por "horas-hombre". Solo valor capturado.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

