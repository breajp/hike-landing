"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnershipsSection() {
    return (
        <section id="partnerships" className="relative z-20 px-6 lg:px-12 py-32 bg-transparent overflow-hidden">
            {/* Background Aurora Blob similar to foto 2 on the sides */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <div className="w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 via-cyan-600/5 to-indigo-600/5 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="group relative flex flex-col items-center text-center p-8 lg:p-12 border border-white/[0.04] bg-[#030303]/60 rounded-[2rem] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.02] hover:border-white/[0.08] overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-blue-500/50 transition-all duration-700" />
                        <div className="absolute w-[200px] h-[200px] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-all duration-1000 mix-blend-screen pointer-events-none bg-blue-500/40 -top-20 -left-20" />

                        <div className="flex-1 flex flex-col items-center justify-center w-full h-64 mb-8 relative transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="https://campusitba.s3.us-east-1.amazonaws.com/campusitba/wp-content/uploads/2023/11/Marca-ITBA-Color-Blanco-ALTA.png"
                                alt="ITBA Logo"
                                fill
                                className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                        <h4 className="text-xl font-light tracking-wide text-white/90 mb-3 mt-auto">Academic Pipeline</h4>
                        <p className="text-white/50 font-light text-sm leading-relaxed tracking-wide">
                            Somos profesores en ITBA y Universidad Austral. Hunteamos el talento más brillante directamente desde las aulas antes de que lleguen al mercado.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative flex flex-col items-center text-center p-8 lg:p-12 border border-white/[0.04] bg-[#030303]/60 rounded-[2rem] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.02] hover:border-white/[0.08] overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-cyan-500/50 transition-all duration-700" />
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen opacity-50 group-hover:opacity-100 transition-all duration-1000" />

                        <div className="flex-1 flex flex-col justify-center items-center h-64 mb-8 w-full relative transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/McKinsey_Logo.svg"
                                alt="McKinsey Logo"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                        <h4 className="text-xl font-light tracking-wide text-white/90 mb-3 mt-auto">Designated Partners</h4>
                        <p className="text-white/50 font-light text-sm leading-relaxed tracking-wide">
                            Operamos como el brazo técnico y de ingeniería para McKinsey & Company en la franja americana. Ejecutamos proyectos corporativos del máximo nivel y exigencia técnica.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="group relative flex flex-col items-center text-center p-8 lg:p-12 border border-white/[0.04] bg-[#030303]/60 rounded-[2rem] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.02] hover:border-white/[0.08] overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-indigo-500/50 transition-all duration-700" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen opacity-50 group-hover:opacity-100 transition-all duration-1000" />

                        <div className="flex-1 flex items-center justify-center h-64 mb-8 w-full relative transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="https://lovelytics.com/wp-content/uploads/2025/08/Google-Cloud-Logo-1024x267-1.webp"
                                alt="Google Cloud Logo"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                        <h4 className="text-xl font-light tracking-wide text-white/90 mb-3 mt-auto">Official Partners</h4>
                        <p className="text-white/50 font-light text-sm leading-relaxed tracking-wide">
                            Socios oficiales certificados. Desplegamos infraestructura de élite apalancados en el gigante de internet, garantizando estabilidad y rendimiento a magnitudes infinitas.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
