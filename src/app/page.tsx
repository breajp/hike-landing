"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import { ArrowDown, Cloud, Database, Bot, BrainCircuit, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const units = [
  {
    title: "Cloud & Workspace",
    description: "Infraestructuras escalables en Google Cloud y colaboración optimizada con Google Workspace.",
    icon: Cloud,
  },
  {
    title: "DART",
    description: "Data, Automatización, Reportes & Tracking. Dashboards en tiempo real y arquitecturas de datos.",
    icon: Database,
  },
  {
    title: "Agentes",
    description: "Agentes autónomos de datos, marketing y creatividad que ejecutan tareas y optimizan 24/7.",
    icon: Bot,
  },
  {
    title: "AI para Marketing",
    description: "Modelos predictivos, Marketing Mix Modeling y optimización de medios con Machine Learning y Vertex AI.",
    icon: BrainCircuit,
  },
];

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
      className="relative flex flex-col md:flex-row w-full mb-16 md:mb-24 group"
    >
      {/* Mobile Dot */}
      <div className="absolute left-[15px] top-[1.25rem] w-[9px] h-[9px] bg-black border border-white/40 rounded-full md:hidden z-10" />

      {/* Desktop Dot */}
      <div className="absolute left-1/2 -translate-x-[50%] top-6 w-3 h-3 bg-black border border-white/20 rounded-full group-hover:border-white/60 transition-colors duration-500 hidden md:block z-10" />

      {/* Content Side */}
      <div className={cn(
        "w-full md:w-1/2 flex flex-col pl-10 md:pl-0",
        isLeft ? "md:pr-12 lg:pr-24 md:items-end md:text-right" : "md:ml-auto md:pl-12 lg:pl-24 md:items-start md:text-left"
      )}>
        <div className="text-white/60 font-mono text-[10px] md:text-sm tracking-[0.2em] mb-4 md:mt-2">
          {year}
        </div>

        <div className={cn("flex flex-col gap-4 w-full", isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left")}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block w-20 h-20 md:w-28 md:h-28 relative shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain opacity-50 group-hover:opacity-100 transition-all hover:scale-105 duration-500 filter grayscale group-hover:grayscale-0"
              />
            </a>
          ) : (
            <div className="w-20 h-20 md:w-28 md:h-28 relative shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain opacity-50 group-hover:opacity-100 transition-all hover:scale-105 duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>
          )}

          <div className="flex flex-col mt-2">
            <h3 className="text-xl md:text-2xl tracking-wide font-light mb-2 text-white/90">{name}</h3>
            <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed tracking-wide max-w-sm">
              {desc}
            </p>
          </div>

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={cn(
              "text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 flex items-center gap-2 transition-colors mt-2 w-fit",
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <main className="relative bg-[#050505] text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Intro Section - The Meeting of Hike & Sigma */}
      <section id="home" className="h-[120vh] relative z-10 flex flex-col justify-center items-center">
        <motion.div
          style={{ opacity, scale }}
          className="sticky top-0 h-screen flex flex-col justify-center items-center w-full"
        >
          <div className="relative z-10 flex items-center justify-center gap-8 md:gap-32 px-6 w-full max-w-5xl mix-blend-difference">
            {/* Hike Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-32 md:h-32 relative flex items-center justify-center">
                <Image
                  src="/images/hike_logo.png"
                  alt="Hike Logo"
                  fill
                  className="object-contain opacity-90 filter grayscale contrast-125"
                />
              </div>
            </motion.div>

            {/* Sigma Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-32 md:h-32 relative flex items-center justify-center">
                <Image
                  src="/images/17sigma_logo.png"
                  alt="17Sigma Logo"
                  fill
                  className="object-contain opacity-90 filter invert grayscale contrast-125 brightness-150"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-24 flex flex-col items-center"
          >
            <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
              <motion.div
                animate={{ y: [-20, 96] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/50 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Story / Timeline */}
      <section id="story" className="relative z-20 px-4 pt-4 pb-12 overflow-hidden bg-[#050505]">
        <div className="max-w-4xl mx-auto relative">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 flex justify-center"
          >
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Nuestra Historia</p>
          </motion.div>

          {/* Central Line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[0.5px] top-32 bottom-0 w-[1px] bg-white/[0.04]">
            <motion.div
              animate={{ y: ["0%", "400%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            />
          </div>

          <div className="pt-8 pb-16">
            <TimelineStep
              year="2020"
              name="ABN Digital"
              desc="Establecimos nuestra huella en medios digitales y estructuras de datos, construyendo la infraestructura para escalar negocios."
              link="https://abndigital.com.ar/"
              image="/images/abn_logo.png"
              align="right"
            />

            <TimelineStep
              year="2023"
              name="Detrics"
              desc="Un conector de datos diseñado para agencias de performance. Automatizamos el reporting de medios para aportar claridad extrema."
              link="https://detrics.io/es/"
              image="/images/detrics_logo.png"
              align="left"
            />

            <TimelineStep
              year="2025"
              name="El Ecosistema Hike"
              desc="La convergencia definitiva. Fusionamos infraestructura cloud, inteligencia de datos avanzada y agentes autónomos en una fuerza única."
              image="/images/hike_logo.png"
              align="right"
            />
          </div>
        </div>
      </section>

      {/* The Vision / Philosophy */}
      <section className="relative z-20 min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 max-w-4xl mx-auto text-center mt-4 bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white/80 leading-relaxed italic mx-auto max-w-3xl">
            "Fabricar tiempo hasta que el humano vuelva a ser humano."
          </h2>

          <div className="space-y-6 text-sm md:text-base tracking-wide text-white/50 font-light leading-relaxed max-w-lg mx-auto">
            <p>Usamos la tecnología de forma absoluta para devolverle tiempo a la sociedad.</p>
            <p className="text-white/60">Auditamos y eliminamos procesos innecesarios.</p>
            <p>Toda implementación persigue estrictamente dos métricas finales: <span className="text-white/90">tiempo</span> y <span className="text-white/90">performance</span>.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 flex flex-col items-center"
        >
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-6">¿Cómo?</p>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 96] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Body Content - Units */}
      <section id="units" className="relative z-20 px-6 pb-24 bg-[#050505] pt-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 pt-4">
            {units.map((unit, i) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group p-8 md:p-10 border-t border-white/[0.03] transition-colors duration-500 hover:bg-white/[0.02]"
              >
                <div className="relative z-10 flex flex-col h-full gap-8">
                  <div className="text-white/30 group-hover:text-white/60 transition-colors">
                    <unit.icon strokeWidth={1} size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wide mb-3 text-white/80 group-hover:text-white transition-colors">{unit.title}</h3>
                    <p className="text-white/40 font-light text-sm leading-relaxed tracking-wide group-hover:text-white/50 transition-colors">{unit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-20 px-6 py-40 bg-[#050505] text-center flex flex-col items-center justify-center mt-12 pb-64">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto space-y-10"
        >
          <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Estrategia de Pricing</p>
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white/90">
            Priceamos sobre el valor generado.
          </h2>
          <p className="text-sm text-white/40 font-light leading-relaxed tracking-wide">
            Si elevamos tu performance y te devolvemos tu tiempo, ganamos juntos. Pura alineación.
          </p>
        </motion.div>
      </section>

      <BottomNav />
    </main>
  );
}
