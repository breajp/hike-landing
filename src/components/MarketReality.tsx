"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, AlertCircle, BarChart3, Users } from "lucide-react";

const facts = [
    {
        icon: AlertCircle,
        label: "The Scaling Wall",
        source: "McKinsey, Nov 2025",
        value: "7%",
        description: "Solo el 7% de las empresas ha logrado escalar la IA a nivel corporativo, a pesar de que el 88% ya la utiliza en silos.",
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        icon: BarChart3,
        label: "The Value Gap",
        source: "BCG, Sept 2025",
        value: "60%",
        description: "El 60% de las compañías no está logrando NINGÚN valor material (ahorro o ingresos) de sus inversiones en GenAI.",
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        icon: Users,
        label: "Adoption Paradox",
        source: "Deloitte, 2026",
        value: "<60%",
        description: "Menos del 60% de los empleados con acceso a IA la usan en su flujo diario. El 40% restante es resistencia cultural.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    }
];

export default function MarketReality() {
    return (
        <section id="reality" className="relative z-20 py-32 px-6 lg:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase mb-4">Estado del Mercado</p>
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/90 leading-tight">
                            La experimentación <br />
                            <span className="text-white font-medium italic">sin resultados</span> se terminó.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-sm md:text-base font-light max-w-sm lg:text-right"
                    >
                        Los reportes de 2025-2026 son lapidarios: la mayoría de las empresas están atrapadas en "La Trampa del Piloto".
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {facts.map((fact, i) => (
                        <motion.div
                            key={fact.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative p-8 lg:p-10 border border-white/[0.04] bg-[#030303]/40 rounded-[2rem] backdrop-blur-xl hover:bg-white/[0.02] transition-all"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className={`p-3 rounded-xl ${fact.bg} ${fact.color}`}>
                                    <fact.icon size={20} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{fact.source}</span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-5xl lg:text-6xl font-light text-white mb-2">{fact.value}</h3>
                                <p className="text-white/80 font-light tracking-wide uppercase text-xs">{fact.label}</p>
                            </div>

                            <p className="text-white/40 text-sm leading-relaxed font-light">
                                {fact.description}
                            </p>

                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                                <ArrowUpRight className="text-white w-6 h-6" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* BCG Insight Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 lg:p-12 border border-blue-500/10 bg-blue-500/5 rounded-[2.5rem] backdrop-blur-md flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="flex-1">
                        <h4 className="text-white/90 text-xl font-light mb-4 italic">"El 70% del valor potencial está en el <span className="text-blue-400">core</span> del negocio, pero las empresas siguen disparando a la periferia."</h4>
                        <p className="text-white/40 text-sm font-mono tracking-widest uppercase">— Boston Consulting Group (BCG)</p>
                    </div>
                    <div className="h-px md:h-20 w-full md:w-px bg-white/10" />
                    <div className="flex-1 text-white/60 font-light leading-relaxed">
                        En Hike no hacemos pilots periféricos. Atacamos las ineficiencias core para cerrar el <span className="text-white">AI Value Gap</span> definitivamente.
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
