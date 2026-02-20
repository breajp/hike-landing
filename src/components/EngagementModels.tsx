"use client";

import { motion } from "framer-motion";
import { Zap, Target, BookOpen } from "lucide-react";

const models = [
    {
        title: "End-to-End Build",
        description: "Hacemos todo nosotros.",
        details: "Asumimos la responsabilidad total de la ingeniería. Desde la auditoría inicial hasta el despliegue de infraestructura y agentes IA. Entregamos soluciones llave en mano, listas para escalar sin que tu equipo desvíe el foco de su operación core.",
        icon: Zap,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Strategic Advisory",
        description: "Consultores sin hacer.",
        details: "Actuamos como el brazo táctico de tu directorio. Validamos arquitecturas, seleccionamos el stack tecnológico óptimo y supervisamos la ejecución de terceros o equipos internos. Proveemos la visión y el rigor técnico sin intervenir en el código.",
        icon: Target,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    },
    {
        title: "Enablement & Hybrid",
        description: "Enseñar y que hagan.",
        details: "Instalamos nuestra metodología en tu ADN. Capacitamos a tus ingenieros en arquitecturas de agentes y flujos de datos autónomos. Co-creamos las primeras unidades y luego transferimos el control total para que tu equipo sea 100% autónomo.",
        icon: BookOpen,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    }
];

export default function EngagementModels() {
    return (
        <section id="engagement" className="relative z-20 py-32 px-6 lg:px-12 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 flex flex-col items-center gap-4"
                >
                    <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase">Modelos de Trabajo</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90">
                        Cómo operamos.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, i) => (
                        <motion.div
                            key={model.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative group p-8 lg:p-10 border border-white/[0.04] bg-[#030303]/60 rounded-[2.5rem] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.02] hover:border-white/[0.08]"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${model.bg} flex items-center justify-center mb-8 border ${model.border}`}>
                                <model.icon className={`w-6 h-6 ${model.color}`} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-light text-white mb-2 tracking-tight">{model.title}</h3>
                            <p className={`text-sm font-light ${model.color} mb-6 tracking-wide uppercase`}>{model.description}</p>

                            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                                {model.details}
                            </p>

                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                <model.icon className="w-24 h-24 text-white" strokeWidth={0.5} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
