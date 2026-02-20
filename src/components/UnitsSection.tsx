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
        baseColor: "from-blue-600 to-transparent",
        glowClass: "bg-blue-600/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Agentes Autónomos",
        description: "Operaciones sin fricción. Agentes de productividad y análisis que operan 24/7.",
        details: "Desplegamos sistemas cognitivos que actúan, no solo recomiendan. Creamos Agentes de Creatividad que generan assets en masa, Agentes de Productividad que automatizan flujos transversales, y supervisores algorítmicos que corrigen ineficiencias antes de que ocurran.",
        icon: Bot,
        baseColor: "from-cyan-500 to-transparent",
        glowClass: "bg-cyan-500/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "AI para Marketing & MMM",
        description: "La ventaja predictiva. Modelos avanzados y partners oficiales de Google en Meridian.",
        details: "El fin del last-click. Como partners de Google Meridian, implementamos Marketing Mix Modeling avanzado para descifrar la incrementalidad real de tu inversión publicitaria. Apalancados en Vertex AI, desplegamos machine learning customizado para optimización de presupuestos sin sesgos humanos.",
        icon: BrainCircuit,
        baseColor: "from-indigo-500 to-transparent",
        glowClass: "bg-indigo-500/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Workshops de IA Ejecutiva",
        description: "Alineación corporativa. Programas de penetración de IA para el C-Level.",
        details: "La adopción empieza en el mindset. Diseñamos e impartimos workshops hiper-prácticos de penetración de Inteligencia Artificial destinados a C-Levels y equipos operativos. Desmitificamos la IA para convertirla en herramientas diarias de rentabilidad inmediata.",
        icon: Lightbulb,
        baseColor: "from-blue-400 to-transparent",
        glowClass: "bg-blue-400/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
];

export default function UnitsSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="units" className="relative z-20 px-6 lg:px-12 pb-32 bg-transparent pt-12">
            <div className="max-w-4xl xl:max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-4">
                    {units.map((unit, i) => {
                        return (
                            <motion.div
                                key={unit.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={cn(
                                    "relative group overflow-hidden rounded-[2rem] p-6 border border-white/[0.04] bg-[#030303]/60 backdrop-blur-xl transition-all duration-500",
                                    "hover:bg-white/[0.02] hover:border-white/[0.08]"
                                )}
                            >
                                {/* Background Glow Node */}
                                <div
                                    className={cn(
                                        "absolute w-full h-[300px] rounded-[100%] blur-[100px] transition-all duration-1000 mix-blend-screen pointer-events-none opacity-0 group-hover:opacity-10 scale-95",
                                        unit.glowClass,
                                        unit.glowPosition
                                    )}
                                />

                                <div className="relative z-10 flex flex-col h-full gap-4">
                                    <div className="flex flex-col items-start w-full gap-4">
                                        <div className={cn("p-3 rounded-2xl border transition-all duration-500", "border-white/5 bg-transparent text-white/50 group-hover:text-white/80 group-hover:border-white/10")}>
                                            <unit.icon strokeWidth={1.5} className="w-6 h-6" />
                                        </div>
                                        <h3 className={cn("text-xl font-light tracking-wide transition-colors text-white/80 group-hover:text-white")}>
                                            {unit.title}
                                        </h3>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex-grow">
                                        <p className="text-white/60 font-light text-sm leading-relaxed tracking-wide mb-4">
                                            {unit.description}
                                        </p>
                                        <p className="text-white/40 font-light text-xs leading-relaxed tracking-wide">
                                            {unit.details}
                                        </p>
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
