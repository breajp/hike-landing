"use client";

import { motion } from "framer-motion";

export default function ManifestoSection() {
    return (
        <section className="relative z-20 py-32 lg:py-48 px-6 lg:px-12 bg-transparent flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-white/60 text-xs font-mono tracking-widest uppercase">El Desafío</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 leading-tight">
                        El <span className="text-white font-medium italic">90%</span> de la IA corporativa hoy son juguetes frágiles.
                    </h2>

                    <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed tracking-wide max-w-4xl mx-auto mt-8">
                        No somos una agencia de wrappers. Construimos <strong className="font-normal text-white/90">infraestructura cognitiva pesada</strong> de grado producción. Pasamos de las pruebas de concepto a sistemas autónomos que redefinen tus márgenes operativos.
                    </p>
                </motion.div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-[100%] mix-blend-screen" />
            </div>
        </section>
    );
}
