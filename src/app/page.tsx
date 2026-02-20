"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import { ArrowDown, Cloud, Code, Database, Bot, BrainCircuit, Zap } from "lucide-react";

const units = [
  {
    title: "Cloud & Workspace",
    description: "Scalable infrastructures with Google Cloud and optimized collaboration via Google Workspace.",
    icon: Cloud,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "DART",
    description: "Data, Automation, Reporting & Tracking. Real-time dashboards and future-proof tracking layers.",
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    title: "Agents",
    description: "Autonomous data, marketing, and creative agents that execute tasks and optimize continuously.",
    icon: Bot,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    title: "AI For Mkt",
    description: "Predictive models, Marketing Mix Modeling, and media optimizations using custom ML and Vertex AI.",
    icon: BrainCircuit,
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
];

function TimelineStep({ year, name, desc, link, image }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end 30%"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-48 relative sm:pl-8 md:pl-16 group flex flex-col items-center sm:items-start"
    >
      <div className="absolute w-4 h-4 bg-black border-2 border-white/30 rounded-full -left-[9px] top-6 group-hover:border-white transition-colors duration-500 hidden sm:block shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

      <div className="text-white/40 font-mono text-sm tracking-widest mb-8 sm:mb-4 flex items-center justify-center sm:justify-start gap-4 w-full">
        <span className="text-xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">{year}</span>
        <div className="h-[1px] w-12 bg-white/20 hidden sm:block" />
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 md:gap-16 w-full">
        <a href={link} target="_blank" rel="noopener noreferrer" className="shrink-0 group/img">
          <div className="w-40 h-40 md:w-48 md:h-48 relative flex items-center justify-center">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain opacity-70 group-hover/img:opacity-100 transition-all hover:scale-105 duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            />
          </div>
        </a>
        <motion.div style={{ opacity: textOpacity }} className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
          <h3 className="text-3xl font-medium mb-3 text-white/90 group-hover:text-white transition-colors">{name}</h3>
          <p className="text-white/50 font-light leading-relaxed mb-6 text-lg">
            {desc}
          </p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-white/30 hover:text-white flex items-center justify-center sm:justify-start gap-2 transition-colors inline-flex">
              Visit {name} <ArrowDown size={14} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="relative bg-black text-white selection:bg-white/30 selection:text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0,rgba(0,0,0,1)_80%)] pointer-events-none" />

      {/* Intro Section - The Meeting of Hike & Sigma */}
      <section id="home" className="h-[120vh] relative z-10 flex flex-col justify-center items-center">
        <motion.div
          style={{ opacity, scale, y }}
          className="sticky top-0 h-screen flex flex-col justify-center items-center w-full"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 w-full max-w-5xl">
            {/* Hike Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 relative flex items-center justify-center">
                <Image
                  src="/images/hike_logo.png"
                  alt="Hike Logo"
                  fill
                  className="object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                />
              </div>
              <p className="mt-4 text-white/40 font-medium tracking-[0.2em] text-xs uppercase">Hike</p>
            </motion.div>

            {/* Meets / X marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-white/30"
            >
              <Zap size={24} className="text-white/30 mb-2" />
              <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>

            {/* Sigma Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 relative flex items-center justify-center">
                <Image
                  src="/images/17sigma_logo.png"
                  alt="17Sigma Logo"
                  fill
                  className="object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700 filter invert drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                />
              </div>
              <p className="mt-4 text-white/40 font-medium tracking-[0.2em] text-xs uppercase">17 Sigma</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-16 flex flex-col items-center"
          >
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Our Vision</p>
            <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                animate={{ y: [-10, 64] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/80 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Story / Timeline */}
      <section id="story" className="relative z-20 px-6 pt-12 pb-12 overflow-hidden bg-transparent">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 flex justify-center"
          >
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Our Journey</p>
          </motion.div>

          <div className="absolute left-1/2 -ml-[0.5px] top-12 bottom-0 w-[1px] bg-white/10 sm:left-[3rem] lg:left-[6rem] sm:ml-0 hidden sm:block">
            <motion.div
              animate={{ y: ["0%", "250%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-transparent via-white/80 to-transparent"
            />
          </div>

          <div className="relative sm:border-l border-white/10 sm:ml-12 lg:ml-24 pb-12 sm:border-transparent mt-16">
            <TimelineStep
              year="2020"
              name="ABN Digital"
              desc="The foundation. We established our footprint in digital media, data structures, and advanced tech services to scale businesses gracefully."
              link="https://abndigital.com.ar/"
              image="/images/abn_logo.png"
            />

            <TimelineStep
              year="2023"
              name="Detrics"
              desc="The next evolution. A unified data connector designed specifically for PPC agencies, automating paid media reporting flawlessly."
              link="https://detrics.io/es/"
              image="/images/detrics_logo.png"
            />

            {/* 2025 - Hike */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative sm:pl-8 md:pl-16 group flex flex-col items-center sm:items-start z-10"
            >
              <div className="absolute w-6 h-6 bg-black border-[3px] border-white rounded-full -left-[13px] top-6 shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10 hidden sm:flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>

              <div className="text-white font-mono text-sm tracking-widest mb-8 sm:mb-4 flex items-center justify-center sm:justify-start gap-4 w-full">
                <span className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">2025</span>
                <div className="h-[1px] w-12 bg-white/40 hidden sm:block" />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 md:gap-16 w-full">
                <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center">
                  <Image
                    src="/images/hike_logo.png"
                    alt="Hike Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-[pulse_4s_ease-in-out_infinite]"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
                  <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">The Hike Ecosystem</h3>
                  <p className="text-white/70 font-light leading-relaxed text-xl">
                    We merge cloud infrastructure, advanced data intelligence, and autonomous agents into a single, cohesive force designed to scale modern enterprises automatically.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transition block to scroll into Units cleanly */}
      <section className="relative z-20 flex justify-center w-full bg-transparent pt-10">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [-20, 96] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </section>

      {/* Body Content - Units */}
      <section id="units" className="relative z-20 min-h-screen px-6 pb-48 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 text-center flex flex-col items-center"
          >
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-8">Our Capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {units.map((unit, i) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group rounded-3xl p-8 md:p-10 bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:bg-white/[0.04] transition-all duration-700 hover:border-white/10 shadow-lg`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="p-4 bg-white/5 rounded-2xl w-fit backdrop-blur-md border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <unit.icon size={28} className="text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-3 text-white/90 group-hover:text-white transition-colors">{unit.title}</h3>
                    <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">{unit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
