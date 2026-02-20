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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <main className="relative bg-[#020202] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
      <SideNav />

      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.25] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Vibrant Ambient Aurora Backgrounds (Lunar Eclipse Aesthetic) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#cc0000]/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-[#ff4500]/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-[#ffb703]/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Intro Section - The Meeting of Hike & Sigma */}
      <section id="home" className="h-[120vh] relative z-10 flex flex-col justify-center items-center">
        <motion.div
          style={{ opacity, scale }}
          className="sticky top-0 h-screen flex flex-col justify-center items-center w-full"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 w-full max-w-5xl">
            {/* Hike Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="pwa-card p-10 md:p-14 bg-gradient-to-br from-[#cc0000]/10 to-transparent border-[#ff4500]/20 flex flex-col items-center shadow-[0_0_50px_rgba(204,0,0,0.15)]"
            >
              <div className="w-20 h-20 md:w-32 md:h-32 relative flex items-center justify-center mb-6">
                <Image
                  src="/images/hike_logo.png"
                  alt="Hike Logo"
                  fill
                  className="object-contain opacity-90 filter brightness-200"
                />
              </div>
              <span className="text-[10px] font-black italic uppercase tracking-widest text-[#ffb703]">INFRASTRUCTURE</span>
            </motion.div>

            {/* Cross */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-[#ff4500] font-black italic text-3xl"
            >
              X
            </motion.div>

            {/* Sigma Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="pwa-card p-10 md:p-14 bg-gradient-to-br from-[#ffb703]/10 to-transparent border-[#ffb703]/20 flex flex-col items-center shadow-[0_0_50px_rgba(255,183,3,0.15)]"
            >
              <div className="w-20 h-20 md:w-32 md:h-32 relative flex items-center justify-center mb-6 bg-white/[0.05] rounded-3xl p-4">
                <Image
                  src="/images/17sigma_logo.png"
                  alt="17Sigma Logo"
                  fill
                  className="object-contain opacity-100 filter invert brightness-200"
                />
              </div>
              <span className="text-[10px] font-black italic uppercase tracking-widest text-[#ff4500]">VENTURE CAPITAL</span>
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

      {/* 2. Social Proof - Clients */}
      <ClientsGrid />

      {/* 3. The Vision / Philosophy (Pain & Mission) */}
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
              className="absolute -inset-20 md:-inset-40 bg-gradient-to-tr from-[#cc0000] via-[#ff4500] to-[#ffb703] rounded-full blur-[60px] md:blur-[100px] lg:blur-[140px] opacity-70 mix-blend-screen"
            />
            {/* The dark planet - Lunar Eclipse */}
            <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-[#020202] rounded-full z-10 shadow-[inset_-10px_-10px_40px_rgba(255,100,0,0.1),_0_0_80px_rgba(0,0,0,0.9)]" />

            {/* Content over eclipse */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left p-12 md:p-20 lg:p-28 pointer-events-none">
              <span className="text-[#ffb703] text-2xl lg:text-3xl mb-4 font-black italic">↘</span>
              <h2 className="pwa-title text-white">
                NUESTRA<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#ffb703]">MISIÓN</span>
              </h2>
              <div className="mt-8 md:mt-12 text-white/60 font-medium text-[10px] md:text-sm tracking-widest uppercase max-w-[150px] md:max-w-[250px] leading-relaxed backdrop-blur-sm p-4 rounded-xl bg-black/40 border border-white/5">
                Devolver tiempo a la sociedad a través de tecnología profunda.
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
              <p>Toda implementación persigue estrictamente dos métricas finales: <span className="text-[#ffb703] font-bold">tiempo</span> y <span className="text-[#ff4500] font-bold">performance</span>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Power & Alliances (Team & Partnerships) */}
      <PartnershipsSection />

      {/* 5. The Story / Timeline (Track Record) */}
      <TimelineSection />

      {/* 6. Methodology */}
      <MethodologySection />

      {/* 7. Body Content - Units */}
      <UnitsSection />

      {/* Pricing */}
      <section className="relative z-20 px-6 lg:px-12 py-40 bg-transparent text-center flex flex-col items-center justify-center mt-12 pb-64">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl xl:max-w-5xl mx-auto space-y-10 lg:space-y-14 flex flex-col items-center"
        >
          <div className="pwa-pill bg-white/[0.05] border-[#ff4500]/30 text-[#ff4500]">ESTRATEGIA DE PRICING</div>
          <h2 className="pwa-title !text-4xl md:!text-6xl lg:!text-8xl text-white">
            PURA ALINEACIÓN<br />DE INTERESES.
          </h2>
          <div className="pwa-card p-8 md:p-12 lg:p-16 mt-10 space-y-6 flex flex-col items-center bg-gradient-to-b from-[#cc0000]/10 to-transparent border-[#ff4500]/20">
            <h3 className="text-xl md:text-3xl lg:text-4xl text-white font-black italic tracking-wide uppercase leading-tight mb-4">
              Priceamos sobre<br />el <span className="text-[#ffb703]">valor neto generado</span>.
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-white/70 font-medium leading-relaxed max-w-2xl">
              No creemos en los retainers inflexibles por "horas-hombre". Auditamos tu escenario y definimos metas objetivas. Si optimizamos procesos y escalamos performance, ganamos justos.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
