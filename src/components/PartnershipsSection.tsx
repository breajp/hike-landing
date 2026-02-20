"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export default function PartnershipsSection() {
    return (
        <section className="relative z-20 px-6 lg:px-12 py-32 bg-transparent overflow-hidden">
            {/* Background Aurora Blob similar to foto 2 on the sides */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <div className="w-[800px] h-[800px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/5 to-purple-600/5 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
            </div>

            <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 flex justify-center flex-col items-center gap-4"
                >
                    <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Músculo y Alianzas</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90">
                        Potencia técnica. Alcance global.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-col items-center text-center p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors"
                    >
                        <h3 className="text-5xl lg:text-7xl font-light text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{'>'}95<span className="text-3xl lg:text-4xl text-white/50">%</span></h3>
                        <h4 className="text-xl lg:text-2xl font-light tracking-wide text-white/90 mb-4">Ingenieros Puros</h4>
                        <p className="text-white/50 font-light text-sm lg:text-base leading-relaxed tracking-wide">
                            Nuestro equipo está compuesto casi en su totalidad por ingenieros de software, data scientists y arquitectos cloud. Cero ruido burocrático, 100% makers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center text-center p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none mix-blend-screen" />
                        <div className="h-20 mb-6 flex items-center justify-center">
                            {/* McKinsey Typography Logo approximation */}
                            <span className="font-serif font-black tracking-tight text-4xl lg:text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-90">McKinsey</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-light tracking-wide text-white/90 mb-4">Designated Partners</h4>
                        <p className="text-white/50 font-light text-sm lg:text-base leading-relaxed tracking-wide">
                            Operamos como el brazo técnico y de ingeniería para McKinsey & Company en la franja americana. Ya ejecutamos juntos más de 30 proyecyos corporativos de máximo nivel.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col items-center text-center p-10 lg:p-14 border border-white/[0.05] bg-[#020202]/40 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.03] transition-colors relative overflow-hidden"
                    >
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen" />
                        <div className="h-20 mb-6 flex items-center justify-center gap-3">
                            <Cloud className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-90" strokeWidth={2} />
                            <span className="font-sans font-medium tracking-tight text-2xl lg:text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-90">Google Cloud</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-light tracking-wide text-white/90 mb-4">Official Partners</h4>
                        <p className="text-white/50 font-light text-sm lg:text-base leading-relaxed tracking-wide">
                            Socios oficiales certificados. Desplegamos infraestructura de élite apalancados en el gigante de internet, garantizando estabilidad y rendimiento a magnitudes infinitas.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
