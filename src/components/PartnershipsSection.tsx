"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export default function PartnershipsSection() {
    return (
        <section className="relative z-20 px-6 lg:px-12 py-32 bg-transparent overflow-hidden">
            {/* Background Aurora Blob similar to foto 2 on the sides */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#cc0000]/10 via-[#ff4500]/5 to-[#ffb703]/5 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
            </div>

            <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 flex justify-center flex-col items-center gap-6"
                >
                    <div className="pwa-pill bg-white/[0.05] border-[#ffb703]/30 text-[#ffb703]">MÚSCULO Y ALIANZAS</div>
                    <h2 className="pwa-title !text-4xl md:!text-6xl text-white block text-center">
                        POTENCIA TÉCNICA.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#ffb703]">ALCANCE GLOBAL.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="pwa-card flex flex-col items-center text-center p-10 lg:p-14"
                    >
                        <h3 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">{'>'}95<span className="text-3xl lg:text-4xl text-white/40">%</span></h3>
                        <h4 className="text-xl lg:text-2xl font-black italic tracking-wide text-white/90 mb-4 uppercase">Ingenieros Puros</h4>
                        <p className="text-white/60 font-medium text-sm lg:text-base leading-relaxed tracking-wide">
                            Nuestro equipo está compuesto casi en su totalidad por ingenieros de software, data scientists y arquitectos cloud. Cero ruido burocrático, 100% makers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pwa-card flex flex-col items-center text-center p-10 lg:p-14 relative"
                    >
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#cc0000]/20 rounded-full blur-[60px] pointer-events-none mix-blend-screen" />
                        <div className="h-20 mb-6 flex items-center justify-center">
                            {/* McKinsey Typography Logo approximation */}
                            <span className="font-serif font-black tracking-tight text-4xl lg:text-5xl text-white opacity-90">McKinsey</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-black italic tracking-wide text-[#ff4500] mb-4 uppercase">Designated Partners</h4>
                        <p className="text-white/60 font-medium text-sm lg:text-base leading-relaxed tracking-wide">
                            Operamos como el brazo técnico y de ingeniería para McKinsey & Company en la franja americana. Ya ejecutamos juntos más de 30 proyectos corporativos de máximo nivel.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="pwa-card flex flex-col items-center text-center p-10 lg:p-14 relative"
                    >
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#ffb703]/20 rounded-full blur-[60px] pointer-events-none mix-blend-screen" />
                        <div className="h-20 mb-6 flex items-center justify-center gap-3">
                            <Cloud className="w-8 h-8 text-[#ffb703]" strokeWidth={3} />
                            <span className="font-sans font-medium tracking-tight text-2xl lg:text-3xl text-white opacity-90">Google Cloud</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-black italic tracking-wide text-[#ffb703] mb-4 uppercase">Official Partners</h4>
                        <p className="text-white/60 font-medium text-sm lg:text-base leading-relaxed tracking-wide">
                            Socios oficiales certificados. Desplegamos infraestructura de élite apalancados en el gigante de internet, garantizando estabilidad y rendimiento a magnitudes infinitas.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
