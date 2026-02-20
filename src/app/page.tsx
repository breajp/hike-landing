"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import { ArrowDown, Cloud, Database, Bot, BrainCircuit, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import MethodologySection from "@/components/MethodologySection";
import UnitsSection from "@/components/UnitsSection";
import ClientsGrid from "@/components/ClientsGrid";
import PartnershipsSection from "@/components/PartnershipsSection";
import TimelineSection from "@/components/TimelineSection";
import ManifestoSection from "@/components/ManifestoSection";
import TechStackSection from "@/components/TechStackSection";
import MetricsSection from "@/components/MetricsSection";
import PricingSection from "@/components/PricingSection";
import EngagementModels from "@/components/EngagementModels";
import MarketReality from "@/components/MarketReality";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <main className="relative bg-[#020202] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
      <Navbar />
      <SideNav />

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
                  src="https://files.slack.com/files-pri/T01Q7LJG952-F0AFYPPV46R/1080x1080-07__1_.png?pub_secret=d56c7f0913"
                  alt="Hike Logo"
                  fill
                  className="object-contain opacity-95 hover:opacity-100 transition-opacity"
                  priority
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

      {/* 1.5 The Manifesto (Anti-BS Thesis) */}
      <ManifestoSection />

      {/* 2. Market Reality Check (The Brutal Numbers) */}
      <MarketReality />

      {/* 3. The Vision / Philosophy (Pain & Mission) */}
      <section id="philosophy" className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-32 max-w-7xl mx-auto">



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

      {/* 2 & 4. Social Proof - Clients & Partnerships */}
      <div id="clients">
        <ClientsGrid />
        <PartnershipsSection />
      </div>

      {/* 4. Methodology & Models */}
      <div id="methodology">
        <MethodologySection />
        <EngagementModels />
      </div>

      {/* 4.5 The Arsenal / Tech Stack */}
      <TechStackSection />

      {/* 5. The Story / Timeline (Track Record) */}
      <TimelineSection />

      {/* 7. Body Content - Units */}
      <UnitsSection />

      {/* Pricing */}
      <PricingSection />
      <Footer />
    </main>
  );
}
