"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import { ArrowDown, Cloud, Database, Bot, BrainCircuit, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import MethodologySection from "@/components/MethodologySection";
import UnitsSection from "@/components/UnitsSection";

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
        isLeft ? "md:pr-12 lg:pr-32 xl:pr-40 md:items-end md:text-right" : "md:ml-auto md:pl-12 lg:pl-32 xl:pl-40 md:items-start md:text-left"
      )}>
        <div className="text-white/60 font-mono text-[10px] md:text-sm lg:text-base tracking-[0.2em] mb-4 md:mt-2">
          {year}
        </div>

        <div className={cn("flex flex-col gap-4 lg:gap-6 w-full", isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left")}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 relative shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain opacity-50 group-hover:opacity-100 transition-all hover:scale-105 duration-500 filter grayscale group-hover:grayscale-0"
              />
            </a>
          ) : (
            <div className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 relative shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain opacity-50 group-hover:opacity-100 transition-all hover:scale-105 duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>
          )}

          <div className="flex flex-col mt-2 lg:mt-4">
            <h3 className="text-xl md:text-3xl lg:text-4xl tracking-wide font-light mb-2 lg:mb-4 text-white/90">{name}</h3>
            <p className="text-white/40 font-light text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-sm lg:max-w-md">
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
    <main className="relative bg-[#020202] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.25] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Vibrant Ambient Aurora Backgrounds (Foto 2 Aesthetic) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-700/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-purple-700/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

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

      {/* Clients Section */}
      <section className="relative z-20 py-16 md:py-24 border-y border-white/[0.02] bg-[#020202]/30 backdrop-blur-sm overflow-hidden mix-blend-screen">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-12">Impulsando el performance de</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16 md:gap-y-10 opacity-70">
            {["Banco Galicia", "Assist Card", "Despegar", "Intercorp", "Interbank", "Sodimac", "DirecTV", "Falabella", "Siglo XXI", "Coco's Capital", "AstroPay"].map((client) => (
              <h4 key={client} className="text-lg md:text-xl lg:text-2xl font-light tracking-wider hover:text-white transition-colors cursor-default drop-shadow-lg opacity-80 hover:opacity-100">{client}</h4>
            ))}
            <span className="text-sm font-light tracking-widest text-white/30 hidden md:inline-block">y más.</span>
          </div>
        </div>
      </section>

      {/* The Story / Timeline */}
      <section id="story" className="relative z-20 px-6 lg:px-12 pt-4 pb-12 overflow-hidden bg-transparent">
        <div className="max-w-6xl xl:max-w-7xl mx-auto relative">

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

      {/* The Vision / Philosophy (Inspired by Minimal Eclipse Aesthetic) */}
      <section id="philosophy" className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-32 max-w-7xl mx-auto">

        {/* Tech decorative text top center/right */}
        <div className="absolute top-24 right-12 lg:right-32 text-white/30 font-mono text-[10px] hidden md:flex flex-col gap-1 items-end">
          <span>{'//'}</span>
          <span>{'//'}</span>
          <span>{'//'}</span>
        </div>

        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 min-h-[600px]">

          {/* The Eclipse (Left Side) */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] flex-shrink-0 flex items-center justify-center">
            {/* Glow behind - expanded via -inset-40 to avoid box cutting */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-20 md:-inset-40 bg-gradient-to-tr from-cyan-600 via-blue-600 to-purple-800 rounded-full blur-[60px] md:blur-[100px] lg:blur-[140px] opacity-50 mix-blend-screen"
            />
            {/* The dark planet */}
            <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-[#020202] rounded-full z-10 shadow-[inset_-10px_-10px_40px_rgba(255,255,255,0.06),_0_0_80px_rgba(0,0,0,0.8)]" />

            {/* Content over eclipse */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left p-12 md:p-20 lg:p-28">
              <span className="text-white/60 text-2xl lg:text-3xl mb-4 font-light">↘</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 leading-none">
                nuestra<br />misión
              </h2>
              <div className="mt-8 md:mt-12 text-white/40 text-[10px] md:text-xs tracking-widest uppercase max-w-[150px] md:max-w-[200px] leading-relaxed">
                Devolver el tiempo a la sociedad a través de la tecnología.
              </div>
            </div>

            {/* Little decorative box bottom right of eclipse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 md:-bottom-8 -right-4 md:right-0 lg:-right-8 z-30 border border-white/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl bg-black/20 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-[10px]">I</div>
                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-[10px]">O</div>
                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-[10px]">/</div>
              </div>
              <div className="flex items-center justify-between gap-16 md:gap-24 text-white/50 font-mono text-[10px] md:text-xs tracking-wider">
                <span>new era</span>
                <span>01</span>
              </div>
            </motion.div>
          </div>

          {/* Texts on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12 lg:gap-20 max-w-lg lg:ml-auto w-full z-10"
          >
            <div className="text-white/40 font-mono text-[10px] md:text-xs tracking-widest leading-loose">
              <p>limbo</p>
              <p>{')'}</p>
              <br />
              <p className="text-white/70 italic text-sm lg:text-base font-sans tracking-wide">"Fabricar tiempo hasta que el<br />humano vuelva a ser humano."</p>
              <br />
              <p>{'))'}</p>
              <p className="text-white/80 border-b border-white/20 pb-2 inline-block">humanly digital</p>
            </div>

            <div className="space-y-6 text-sm md:text-base lg:text-lg tracking-wide text-white/50 font-light leading-relaxed border-l-2 border-white/10 pl-6">
              <p>Auditamos y eliminamos procesos innecesarios.</p>
              <p>Toda implementación persigue estrictamente dos métricas finales: <span className="text-white/90">tiempo</span> y <span className="text-white/90">performance</span>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <MethodologySection />

      {/* Body Content - Units */}
      <UnitsSection />

      {/* Pricing */}
      <section className="relative z-20 px-6 lg:px-12 py-40 bg-transparent text-center flex flex-col items-center justify-center mt-12 pb-64">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl xl:max-w-5xl mx-auto space-y-10 lg:space-y-14"
        >
          <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase">Estrategia de Pricing</p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-white/90 leading-tight">
            Pura alineación de intereses.
          </h2>
          <div className="border-t border-white/[0.05] pt-10 mt-10 space-y-8 flex flex-col items-center">
            <p className="text-sm md:text-xl lg:text-3xl text-white/60 font-light leading-relaxed lg:leading-loose tracking-wide max-w-4xl">
              No creemos en los retainers inflexibles orientados a "horas-hombre".
            </p>
            <p className="text-sm md:text-xl lg:text-3xl text-white/80 font-light leading-relaxed lg:leading-loose tracking-wide max-w-4xl">
              Priceamos estrictamente sobre el valor neto generado.
            </p>
            <p className="text-xs md:text-lg lg:text-xl text-white/40 font-light leading-relaxed max-w-3xl mt-4">
              Auditamos tu escenario y definimos objetivos claros. Si nuestra tecnología e infraestructura logran optimizar procesos y escalar tu performance, ganamos juntos.
            </p>
          </div>
        </motion.div>
      </section>

      <BottomNav />
    </main>
  );
}
