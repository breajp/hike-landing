"use client";

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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="relative bg-black text-white selection:bg-white/30 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,1)_100%)] pointer-events-none" />

      {/* Intro Section - The Meeting of Hike & Sigma */}
      <section id="home" className="h-[120vh] relative z-10">
        <motion.div
          style={{ opacity, scale, y }}
          className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 w-full max-w-5xl">
            {/* Hike Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 relative rounded-3xl overflow-hidden p-8 bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl flex items-center justify-center">
                <Image
                  src="/images/hike_logo.png"
                  alt="Hike Logo"
                  fill
                  className="object-contain p-6 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-white/50 font-medium tracking-[0.2em] text-xs uppercase">Hike</p>
            </motion.div>

            {/* Meets / X marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-white/30"
            >
              <Zap size={24} className="text-white/40 mb-2" />
              <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>

            {/* Sigma Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 relative rounded-3xl overflow-hidden p-8 bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl flex items-center justify-center">
                <Image
                  src="/images/17sigma_logo.png"
                  alt="17Sigma Logo"
                  fill
                  className="object-contain p-8 hover:scale-105 transition-transform duration-700 filter invert"
                />
              </div>
              <p className="mt-4 text-white/50 font-medium tracking-[0.2em] text-xs uppercase">17 Sigma</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-20 flex flex-col items-center"
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

      {/* Body Content - Units */}
      <section id="units" className="relative z-20 min-h-screen bg-black/80 backdrop-blur-3xl px-6 py-24 pb-48 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 text-center or text-left"
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Empowering the modern enterprise.
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We build, scale, and secure the infrastructure that powers tomorrow. A unified ecosystem of business units designed to accelerate growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {units.map((unit, i) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group rounded-3xl p-8 md:p-10 bg-white/5 border ${unit.border} overflow-hidden hover:bg-white/10 transition-colors duration-500`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="p-4 bg-white/10 rounded-2xl w-fit backdrop-blur-md border border-white/10">
                    <unit.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-3">{unit.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed">{unit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story / Timeline */}
      <section id="story" className="relative z-20 bg-gradient-to-b from-black to-zinc-950 px-6 py-24 border-t border-white/5 pb-48">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-white/50 tracking-widest text-sm uppercase">How Hike Came to Be</p>
          </motion.div>

          <div className="relative border-l border-white/10 ml-4 md:ml-12 lg:ml-24 pb-12">
            {/* 2020 - ABN Digital */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-24 relative pl-8 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-black border-2 border-white/30 rounded-full -left-[9px] top-6 group-hover:border-white transition-colors duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

              <div className="text-white/40 font-mono text-sm tracking-widest mb-4 flex items-center gap-4">
                <span className="text-xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">2020</span>
                <div className="h-[1px] w-12 bg-white/20" />
              </div>

              <a href="https://abndigital.com.ar/" target="_blank" rel="noopener noreferrer" className="block relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden group/card shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 relative z-10">
                  <div className="w-32 h-32 relative bg-black/50 rounded-2xl p-4 flex items-center justify-center border border-white/5 group-hover/card:border-white/20 transition-colors">
                    <Image
                      src="/images/abn_logo.png"
                      alt="ABN Digital Logo"
                      fill
                      className="object-contain p-4 filter opacity-80 group-hover/card:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-2 group-hover/card:text-indigo-400 transition-colors">ABN Digital</h3>
                    <p className="text-white/60 font-light leading-relaxed mb-4">
                      The foundation. We established our footprint in digital media, data structures, and advanced tech services to scale businesses gracefully.
                    </p>
                    <span className="text-xs uppercase tracking-widest text-indigo-400/80 group-hover/card:text-indigo-400 flex items-center gap-2">
                      Visit ABN Digital <ArrowDown size={14} className="-rotate-90 group-hover/card:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* 2023 - Detrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-black border-2 border-white/30 rounded-full -left-[9px] top-6 group-hover:border-white transition-colors duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

              <div className="text-white/40 font-mono text-sm tracking-widest mb-4 flex items-center gap-4">
                <span className="text-xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">2023</span>
                <div className="h-[1px] w-12 bg-white/20" />
              </div>

              <a href="https://detrics.io/es/" target="_blank" rel="noopener noreferrer" className="block relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden group/card shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 relative z-10">
                  <div className="w-32 h-32 relative bg-black/50 rounded-2xl p-4 flex items-center justify-center border border-white/5 group-hover/card:border-white/20 transition-colors">
                    <Image
                      src="/images/detrics_logo.png"
                      alt="Detrics Logo"
                      fill
                      className="object-contain p-4 filter opacity-80 group-hover/card:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-2 group-hover/card:text-emerald-400 transition-colors">Detrics</h3>
                    <p className="text-white/60 font-light leading-relaxed mb-4">
                      The next evolution. A unified data connector designed specifically for PPC agencies, automating paid media reporting flawlessly.
                    </p>
                    <span className="text-xs uppercase tracking-widest text-emerald-400/80 group-hover/card:text-emerald-400 flex items-center gap-2">
                      Visit Detrics <ArrowDown size={14} className="-rotate-90 group-hover/card:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
