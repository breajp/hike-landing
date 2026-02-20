"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Bot, BrainCircuit, Lightbulb, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const units = [
    {
        title: "Arquitectura Cloud & Data",
        description: "Cimientos digitales sólidos. Infraestructura serverless y data lakes corporativos.",
        details: "Centralizamos tu caos de datos. Construimos entornos robustos y escalables en Google Cloud capaces de procesar millones de interacciones en milisegundos. Desde el tracking de eventos hasta la visualización en tiempo real, garantizamos la pureza arquitectónica que los agentes y la AI necesitan para operar.",
        icon: Cloud,
        glowClass: "from-[#ff4500]/60 to-transparent",
        glowPosition: "-bottom-20 -right-20",
    },
    {
        title: "Agentes Autónomos",
        description: "Operaciones sin fricción. Agentes de creatividad, productividad y análisis que operan 24/7.",
        details: "Desplegamos sistemas cognitivos que actúan, no solo recomiendan. Creamos Agentes de Creatividad que generan assets en masa, Agentes de Productividad que automatizan flujos transversales, y supervisores algorítmicos que corrigen ineficiencias antes de que ocurran.",
        icon: Bot,
        glowClass: "from-[#ffb703]/60 to-transparent",
        glowPosition: "bottom-10 left-10",
    },
    {
        title: "AI para Marketing & MMM",
        description: "La ventaja predictiva. Modelos avanzados y partners oficiales de Google en Meridian.",
        details: "El fin del last-click. Como partners de Google Meridian, implementamos Marketing Mix Modeling avanzado para descifrar la incrementalidad real de tu inversión publicitaria. Apalancados en Vertex AI, desplegamos machine learning customizado para optimización de presupuestos sin sesgos humanos.",
        icon: BrainCircuit,
        glowClass: "from-[#cc0000]/60 to-transparent",
        glowPosition: "top-10 right-10",
    },
    {
        title: "Workshops de Ai",
        description: "Alineación corporativa. Programas de penetración de inteligencia artificial ejecutiva.",
        details: "La adopción tecnológica empieza en el mindset. Diseñamos e impartimos workshops hiper-prácticos de penetración de Inteligencia Artificial destinados a C-Levels y equipos operativos. Desmitificamos la AI para convertirla en herramientas diárias de valor y rentabilidad inmediata.",
        icon: Lightbulb,
        glowClass: "from-[#ff3300]/50 to-transparent",
        glowPosition: "-top-20 -left-20",
    },
];

export default function UnitsSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="units" className="relative z-20 px-6 lg:px-12 pb-32 bg-transparent pt-12">
            <div className="max-w-6xl xl:max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative z-10 pt-4">
                    {units.map((unit, i) => {
                        const isExpanded = expandedIndex === i;
                        return (
                            <motion.div
                                key={unit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                onClick={() => toggleExpand(i)}
                                className={cn(
                                    "pwa-card p-8 md:p-14 transition-colors duration-500 relative cursor-pointer group",
                                    isExpanded ? "bg-white/[0.05] border-white/30 shadow-[0_0_30px_rgba(255,69,0,0.1)]" : "hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                                )}
                            >
                                {/* Background Glow Node */}
                                <div
                                    className={cn(
                                        "absolute w-64 h-64 md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[160px] bg-gradient-to-tr transition-all duration-1000 mix-blend-screen pointer-events-none",
                                        unit.glowClass,
                                        unit.glowPosition,
                                        isExpanded ? "opacity-90 scale-110" : "opacity-40 group-hover:opacity-60 scale-100"
                                    )}
                                />

                                <div className="relative z-10 flex flex-col h-full gap-8 lg:gap-12">
                                    <div className="flex items-start justify-between">
                                        <div className={cn("transition-colors duration-500", isExpanded ? "text-white" : "text-white/60 group-hover:text-[#ffb703]")}>
                                            <unit.icon strokeWidth={1} className="w-10 h-10 lg:w-14 lg:h-14 drop-shadow-2xl" />
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.4, ease: "anticipate" }}
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white/80 group-hover:border-white/30 transition-all bg-white/[0.02] backdrop-blur-md"
                                        >
                                            <ChevronDown strokeWidth={1.5} size={20} />
                                        </motion.div>
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <h3 className={cn("text-2xl lg:text-4xl font-black italic uppercase tracking-tighter mb-3 lg:mb-4 transition-colors", isExpanded ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "text-white/90 group-hover:text-white")}>
                                            {unit.title}
                                        </h3>
                                        <p className={cn("font-medium text-sm lg:text-lg lg:leading-loose leading-relaxed tracking-wide transition-colors", isExpanded ? "text-white/90" : "text-white/50 group-hover:text-white/80")}>
                                            {unit.description}
                                        </p>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-6 lg:pt-8 border-t border-white/10">
                                                        <p className="text-white/60 font-medium text-sm lg:text-base leading-relaxed lg:leading-loose tracking-wider">
                                                            {unit.details}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
