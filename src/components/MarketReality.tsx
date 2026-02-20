"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, AlertCircle, BarChart3, Users } from "lucide-react";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract numeric part
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    const prefix = value.startsWith('<') ? '<' : '';

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = numericValue;
            if (start === end) return;

            let totalMilisecDur = duration * 1000;
            let incrementTime = (totalMilisecDur / end);

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, numericValue, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

const facts = [
    {
        icon: AlertCircle,
        label: "The Scaling Wall",
        source: "McKinsey, Nov 2025",
        value: "7%",
        description: "Solo el 7% de las empresas ha logrado escalar la IA a nivel corporativo, a pesar de que el 88% ya la utiliza en silos.",
        color: "text-red-500",
        bg: "bg-red-500/10",
        glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
    },
    {
        icon: BarChart3,
        label: "The Value Gap",
        source: "BCG, Sept 2025",
        value: "60%",
        description: "El 60% de las compañías no está logrando valor material de sus inversiones en GenAI.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
    },
    {
        icon: Users,
        label: "Adoption Paradox",
        source: "Deloitte, 2026",
        value: "<60%",
        description: "Menos del 60% de los empleados con acceso a IA la usan en su flujo diario. El 40% restante es resistencia cultural.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    }
];

export default function MarketReality() {
    return (
        <section id="reality" className="relative z-20 py-32 px-6 lg:px-12 bg-transparent overflow-hidden">
            {/* Ambient Volumetric Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
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
                        Los reportes de 2025-2026 son lapidarios: la mayoría de las empresas están atrapadas en la "Trampa del Piloto".
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
                            className={`group relative p-8 lg:p-10 border border-white/[0.04] bg-[#030303]/40 rounded-[2rem] backdrop-blur-xl hover:bg-white/[0.02] transition-all duration-500 overflow-hidden ${fact.glow}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center justify-between mb-8">
                                <div className={`p-3 rounded-xl ${fact.bg} ${fact.color}`}>
                                    <fact.icon size={20} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{fact.source}</span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-5xl lg:text-6xl font-light text-white mb-2">
                                    <Counter value={fact.value} />
                                </h3>
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
                    className="mt-12 p-8 lg:p-12 border border-blue-500/10 bg-blue-500/5 rounded-[2.5rem] backdrop-blur-md flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                    <div className="flex-1 relative z-10">
                        <h4 className="text-white/90 text-xl font-light mb-4 italic">"El 70% del valor potencial está en el <span className="text-blue-400">core</span> del negocio, pero las empresas siguen disparando a la periferia."</h4>
                        <p className="text-white/40 text-sm font-mono tracking-widest uppercase">— Boston Consulting Group (BCG)</p>
                    </div>
                    <div className="h-px md:h-20 w-full md:w-px bg-white/10 relative z-10" />
                    <div className="flex-1 text-white/60 relative z-10 font-light leading-relaxed">
                        En Hike no hacemos pilots periféricos. Atacamos las ineficiencias core para cerrar el <span className="text-white">AI Value Gap</span> definitivamente.
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
