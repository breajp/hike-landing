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

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    const isLeft = align === 'left';

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className="relative flex flex-col md:flex-row w-full mb-20 md:mb-32 group"
        >
            {/* Mobile Dot */}
            <div className="absolute left-[15px] top-[2.5rem] w-[13px] h-[13px] bg-[#020202] border-2 border-white/40 rounded-full md:hidden z-10 box-content shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

            {/* Desktop Dot */}
            <div className="absolute left-1/2 -translate-x-[50%] top-[4.5rem] w-[15px] h-[15px] bg-[#020202] border-2 border-white/30 rounded-full group-hover:border-white/80 group-hover:scale-125 transition-all duration-500 hidden md:block z-10 box-content group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

            {/* Content Side */}
            <div className={cn(
                "w-full md:w-1/2 flex flex-col pl-10 md:pl-0",
                isLeft ? "md:pr-16 lg:pr-32 xl:pr-40 md:items-end md:text-right" : "md:ml-auto md:pl-16 lg:pl-32 xl:pl-40 md:items-start md:text-left"
            )}>
                <div className="text-white/40 font-mono text-xs md:text-sm lg:text-base tracking-[0.3em] mb-4 md:mt-2">
                    {year}
                </div>

                <div className={cn("flex flex-col gap-6 w-full glass-effect bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-10 lg:p-12 group-hover:bg-white/[0.04] group-hover:border-white/[0.1] transition-all duration-500 relative overflow-hidden", isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left")}>

                    {/* Subtle Glow inside card */}
                    <div className={cn("absolute w-48 h-48 bg-white/5 rounded-full blur-[50px] pointer-events-none mix-blend-screen transition-all duration-700", isLeft ? "-top-10 -right-10 group-hover:bg-white/10" : "-top-10 -left-10 group-hover:bg-cyan-500/10")} />

                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative shrink-0">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-contain opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110 duration-700 filter grayscale group-hover:grayscale-0"
                            />
                        </a>
                    ) : (
                        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative shrink-0">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-contain opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110 duration-700 filter grayscale group-hover:grayscale-0"
                            />
                        </div>
                    )}

                    <div className="flex flex-col mt-2 z-10 relative">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-light mb-3 lg:mb-4 text-white/90 drop-shadow-lg">{name}</h3>
                        <p className="text-white/50 font-light text-sm md:text-base lg:text-lg leading-relaxed lg:leading-loose tracking-wide max-w-sm lg:max-w-md">
                            {desc}
                        </p>
                    </div>

                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className={cn(
                            "text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/90 flex items-center gap-2 transition-colors mt-4 w-fit border border-white/10 hover:border-white/30 px-4 py-2 rounded-full relative z-10",
                            isLeft ? "md:justify-end" : "justify-start"
                        )}>
                            Visitar Origen <ArrowDown size={12} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function TimelineSection() {
    return (
        <section id="story" className="relative z-20 px-6 lg:px-12 pt-20 pb-12 overflow-hidden bg-transparent">
            <div className="max-w-6xl xl:max-w-7xl mx-auto relative">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32 flex justify-center"
                >
                    <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/[0.02]">El Camino Hasta Acá</p>
                </motion.div>

                {/* Central Line */}
                <div className="absolute left-[22px] md:left-1/2 md:-translate-x-[0.5px] top-48 bottom-0 w-[1px] bg-white/[0.05]">
                    <motion.div
                        animate={{ y: ["0%", "400%"] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-transparent via-white/50 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    />
                </div>

                <div className="pt-8 pb-16">
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
        </section>
    );
}
