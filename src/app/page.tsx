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
    description: "Scalable infrastructures with Google Cloud and optimized collaboration via Google Workspace.",
    icon: Cloud,
  },
  {
    title: "DART",
    description: "Data, Automation, Reporting & Tracking. Real-time dashboards and future-proof tracking layers.",
    icon: Database,
  },
  {
    title: "Agents",
    description: "Autonomous data, marketing, and creative agents that execute tasks and optimize continuously.",
    icon: Bot,
  },
  {
    title: "AI For Mkt",
    description: "Predictive models, Marketing Mix Modeling, and media optimizations using custom ML and Vertex AI.",
    icon: BrainCircuit,
  },
];

function TimelineStep({ year, name, desc, link, image, align }: { year: string, name: string, desc: string, link?: string, image: string, align: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end 40%"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const isLeft = align === 'left';

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "relative flex flex-col md:flex-row items-center w-full mb-32 md:mb-48 group",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Central Node for Desktop */}
      <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white/20 rounded-full group-hover:border-white/60 transition-colors duration-500 hidden md:block z-10" />

      {/* Content Half */}
      <div className={cn("w-full md:w-1/2 flex flex-col", isLeft ? "md:pr-16 md:items-end md:text-right" : "md:pl-16 md:items-start md:text-left", "items-center text-center pl-8 pr-8")}>
        <div className="text-white/30 font-mono text-[10px] tracking-widest mb-4 flex items-center justify-center gap-4">
          <span className="text-sm font-medium text-white/80">{year}</span>
        </div>

        <div className={cn("flex flex-col gap-6 md:gap-8 w-full", isLeft ? "md:items-end" : "md:items-start", "items-center")}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="shrink-0 group/img block">
              <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain opacity-60 group-hover/img:opacity-100 transition-all hover:scale-105 duration-500 filter grayscale group-hover/img:grayscale-0"
                />
              </div>
            </a>
          ) : (
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-all hover:scale-105 duration-500"
                />
              </div>
            </div>
          )}

          <motion.div style={{ opacity: textOpacity }} className="flex flex-col max-w-sm">
            <h3 className="text-2xl tracking-wide font-light mb-4 text-white/90">{name}</h3>
            <p className="text-white/40 font-light text-sm leading-relaxed tracking-wide mb-6">
              {desc}
            </p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className={cn("text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 flex items-center gap-2 transition-colors", isLeft ? "md:justify-end" : "md:justify-start", "justify-center")}>
                View Origin <ArrowDown size={12} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Empty Half placeholder for flex spacing */}
      <div className="hidden md:block md:w-1/2" />
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
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Intro Section - The Meeting of Hike & Sigma */}
      <section id="home" className="h-[120vh] relative z-10 flex flex-col justify-center items-center">
        <motion.div
          style={{ opacity, scale }}
          className="sticky top-0 h-screen flex flex-col justify-center items-center w-full"
        >
          <div className="relative z-10 flex items-center justify-center gap-12 md:gap-32 px-6 w-full max-w-5xl mix-blend-difference">
            {/* Hike Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
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
              <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
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
      <section id="story" className="relative z-20 px-4 pt-12 pb-12 overflow-hidden bg-[#050505]">
        <div className="max-w-5xl mx-auto relative">

          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white-[0.03]">
            <motion.div
              animate={{ y: ["0%", "400%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            />
          </div>

          <div className="pt-24 pb-32">
            <TimelineStep
              year="2020"
              name="ABN Digital"
              desc="We established our footprint in digital media and data structures, building the infrastructure to scale businesses."
              link="https://abndigital.com.ar/"
              image="/images/abn_logo.png"
              align="right"
            />

            <TimelineStep
              year="2023"
              name="Detrics"
              desc="A unified data connector engineered for PPC agencies. We automated paid media reporting to bring extreme clarity to growth."
              link="https://detrics.io/es/"
              image="/images/detrics_logo.png"
              align="left"
            />

            <TimelineStep
              year="2025"
              name="The Hike Ecosystem"
              desc="The convergence. We merge cloud infrastructure, advanced data intelligence, and autonomous agents into a cohesive force."
              image="/images/hike_logo.png"
              align="right"
            />
          </div>
        </div>
      </section>

      {/* The Vision / Philosophy */}
      <section className="relative z-20 min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 max-w-4xl mx-auto text-center mt-12 bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white/80 leading-relaxed italic mx-auto max-w-3xl">
            "Fabricar tiempo hasta que el humano vuelva a ser humano."
          </h2>

          <div className="space-y-6 text-sm md:text-base tracking-wide text-white/50 font-light leading-relaxed max-w-lg mx-auto">
            <p>We leverage technology to return time to society.</p>
            <p className="text-white/60">We audit. We eliminate processes.</p>
            <p>Every implementation optimizes strictly for <span className="text-white/90">time</span> and <span className="text-white/90">performance</span>.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-32 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 96] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Body Content - Units */}
      <section id="units" className="relative z-20 px-6 pb-24 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 pt-12">
            {units.map((unit, i) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group p-8 md:p-10 border-t border-white/[0.03] transition-colors duration-500 hover:bg-white/[0.01]"
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
      <section className="relative z-20 px-6 py-48 bg-[#050505] text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Pricing Strategy</p>
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white/90">
            Priced strictly on value generated.
          </h2>
          <p className="text-sm md:text-base text-white/40 font-light leading-relaxed tracking-wide">
            If we elevate your performance and give you back your time, we win together. Pure alignment.
          </p>
        </motion.div>
      </section>

      <BottomNav />
    </main>
  );
}
