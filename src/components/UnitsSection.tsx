"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Bot, BrainCircuit, Lightbulb, ChevronDown, ChevronRight, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const units = [
    {
        title: "Arquitectura Cloud & Data",
        description: "Cimientos digitales. Infraestructura y data lakes corporativos.",
        details: "Centralizamos tu caos de datos. Construimos entornos robustos y escalables en Google Cloud capaces de procesar millones de interacciones en milisegundos. Desde el tracking de eventos hasta la visualización en tiempo real, garantizamos la pureza arquitectónica que los agentes y la AI necesitan para operar.",
        icon: Cloud,
        baseColor: "from-blue-600 to-transparent",
        glowClass: "bg-blue-600/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Agentes Autónomos",
        description: "Operaciones 24/7. Agentes de productividad y análisis.",
        details: "Desplegamos sistemas cognitivos que actúan, no solo recomiendan. Creamos Agentes de Creatividad que generan assets en masa, Agentes de Productividad que automatizan flujos transversales, y supervisores algorítmicos que corrigen ineficiencias antes de que ocurran.",
        icon: Bot,
        baseColor: "from-cyan-500 to-transparent",
        glowClass: "bg-cyan-500/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "AI para Marketing & MMM",
        description: "La ventaja predictiva. Modelos avanzados de Google.",
        details: "El fin del last-click. Como partners de Google Meridian, implementamos Marketing Mix Modeling avanzado para descifrar la incrementalidad real de tu inversión publicitaria. Apalancados en Vertex AI, desplegamos machine learning customizado para optimización de presupuestos sin sesgos humanos.",
        icon: BrainCircuit,
        baseColor: "from-indigo-500 to-transparent",
        glowClass: "bg-indigo-500/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Workshops de IA Ejecutiva",
        description: "IA para el C-Level. Programas de penetración corporativa.",
        details: "La adopción empieza en el mindset. Diseñamos e impartimos workshops hiper-prácticos de penetración de Inteligencia Artificial destinados a C-Levels y equipos operativos. Desmitificamos la IA para convertirla en herramientas diarias de rentabilidad inmediata.",
        icon: Lightbulb,
        baseColor: "from-blue-400 to-transparent",
        glowClass: "bg-blue-400/30",
        glowPosition: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
];

export default function UnitsSection() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="units" className={cn("relative px-6 lg:pl-32 lg:pr-12 pb-32 bg-transparent pt-48 transition-all duration-500", selectedId !== null ? "z-[500]" : "z-20")}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">Unidades de Acción</h2>
                    <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                        Infraestructura cognitiva desplegada en frentes estratégicos para transformar datos en poder de decisión.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-4">
                    {units.map((unit, i) => (
                        <motion.div
                            key={unit.title}
                            layoutId={`card-${i}`}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                layout: { type: "spring", damping: 30, stiffness: 200 },
                                opacity: { duration: 0.4 }
                            }}
                            onClick={() => setSelectedId(i)}
                            className={cn(
                                "relative group overflow-hidden rounded-[2.5rem] p-8 border cursor-pointer border-white/[0.04] bg-[#030303]/80 backdrop-blur-md transition-shadow duration-500 flex flex-col h-[340px]",
                                "hover:bg-white/[0.02] hover:border-white/[0.08] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
                                selectedId === i ? "opacity-0" : "opacity-100"
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

                            <div className="relative z-10 flex flex-col h-full gap-6">
                                <div className="flex flex-col items-start gap-4">
                                    <div className="p-4 rounded-2xl border border-white/5 bg-transparent text-white/50 group-hover:text-white/80 transition-all duration-500">
                                        <unit.icon strokeWidth={1.5} className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-light tracking-wide transition-colors text-white/80 group-hover:text-white">
                                        {unit.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-white/50 font-light text-sm md:text-base leading-relaxed tracking-wide pr-12">
                                        {unit.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-8 right-8">
                                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:text-white/80 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Overlay Expansion (Modal) */}
            <AnimatePresence>
                {selectedId !== null && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] cursor-pointer"
                        />

                        {/* Expanded Card Container */}
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                className="w-full max-w-2xl bg-[#0a0a0a] border border-white/[0.08] rounded-[3rem] p-10 md:p-16 h-auto pointer-events-auto relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-[10000]"
                            >
                                {/* Background Glow */}
                                <div
                                    className={cn(
                                        "absolute w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-30 -top-40 -right-40",
                                        units[selectedId].glowClass
                                    )}
                                />

                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="p-5 rounded-3xl border border-white/10 bg-white/5 text-white">
                                            {(() => {
                                                const Icon = units[selectedId].icon;
                                                return <Icon strokeWidth={1} className="w-12 h-12" />;
                                            })()}
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedId(null);
                                            }}
                                            className="p-4 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white group/close"
                                        >
                                            <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                                            {units[selectedId].title}
                                        </h3>
                                        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                                            {units[selectedId].description}
                                        </p>
                                        <div className="h-[1px] w-full bg-white/10" />
                                        <p className="text-white/40 text-base md:text-lg font-light leading-loose tracking-wide">
                                            {units[selectedId].details}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
