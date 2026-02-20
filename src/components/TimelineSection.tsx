"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

function TimelineStep({ year, name, desc, link, image, align }: { year: string, name: string, desc: string, link?: string, image: string, align: 'left' | 'right' }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    const isLeft = align === 'left';

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className="relative flex flex-col md:flex-row w-full mb-20 md:mb-32 group"
        >
            {/* Desktop Dot */}
            <div className="absolute left-1/2 -translate-x-[50%] top-[4.5rem] w-3 h-3 bg-white/20 border-2 border-white/40 rounded-full group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-700 hidden md:block z-10 box-content group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            {/* Content Side */}
            <div className={cn(
                "w-full md:w-1/2 flex flex-col pl-10 md:pl-0",
                isLeft ? "md:pr-20 md:items-end md:text-right" : "md:ml-auto md:pl-20 md:items-start md:text-left"
            )}>
                <div className="text-white/20 font-mono text-xs tracking-[0.4em] mb-6 md:mt-2 group-hover:text-cyan-400/60 transition-colors">
                    {year}
                </div>

                <div className={cn(
                    "relative flex flex-col gap-6 w-full glass-effect bg-white/[0.01] border border-white/[0.03] rounded-[3rem] p-10 lg:p-14 group-hover:bg-white/[0.03] group-hover:border-white/[0.1] transition-all duration-700 overflow-hidden",
                    "hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]",
                    isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
                )}>
                    {/* Inner Atmos Glow */}
                    <div className={cn(
                        "absolute w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none mix-blend-screen transition-all duration-1000 opacity-0 group-hover:opacity-100",
                        isLeft ? "-top-20 -right-20 group-hover:bg-blue-500/10" : "-top-20 -left-20 group-hover:bg-cyan-500/10"
                    )} />

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-contain opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110 duration-1000 filter grayscale group-hover:grayscale-0"
                        />
                    </motion.div>

                    <div className="flex flex-col mt-2 z-10 relative space-y-4">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-light text-white/90">{name}</h3>
                        <p className="text-white/30 font-light text-base lg:text-xl leading-relaxed tracking-wide max-w-sm lg:max-w-md group-hover:text-white/50 transition-colors">
                            {desc}
                        </p>
                    </div>

                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className={cn(
                            "text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white flex items-center gap-2 transition-all mt-6 w-fit border border-white/5 hover:border-white/20 px-6 py-2.5 rounded-full bg-white/[0.02] backdrop-blur-md",
                        )}>
                            Origen <ArrowDown size={12} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function TimelineSection() {
    return (
        <section id="story" className="relative z-20 px-6 lg:px-12 py-32 overflow-hidden bg-transparent">
            {/* Background Dynamics */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32 flex flex-col items-center gap-6"
                >
                    <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase">Evolución</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">El Camino Hasta Acá.</h2>
                </motion.div>

                <div className="relative">
                    {/* Pulsing Central Line Effect */}
                    <div className="absolute left-[22px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px]">
                        <motion.div
                            animate={{ y: ["0%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            className="absolute top-0 w-full h-40 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
                        />
                    </div>

                    <div className="space-y-12">
                        <TimelineStep
                            year="2020"
                            name="ABN Digital"
                            desc="Construimos la infraestructura para escalar negocios digitales, dominando la estructuración de datos y medios a nivel operativo."
                            link="https://abndigital.com.ar/"
                            image="/images/abn_logo.png"
                            align="right"
                        />

                        <TimelineStep
                            year="2023"
                            name="Detrics"
                            desc="Automatizamos el caos. Creamos un conector central de datos estructurando la comunicación de performance end-to-end."
                            link="https://detrics.io/es/"
                            image="/images/detrics_logo.png"
                            align="left"
                        />

                        <TimelineStep
                            year="2025"
                            name="El Ecosistema Hike"
                            desc="La convergencia definitiva. Interconectamos nube, inteligencia de datos y agentes autónomos escalando juntos."
                            image="/images/hike_logo.png"
                            align="right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
