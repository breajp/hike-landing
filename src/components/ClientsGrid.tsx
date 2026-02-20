"use client";

import { motion } from "framer-motion";

export default function ClientsGrid() {
    return (
        <section className="relative z-20 py-16 md:py-24 border-y border-white/[0.02] bg-[#020202]/30 backdrop-blur-sm overflow-hidden mix-blend-screen">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
                <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-12">Estructurando los datos de líderes globales</p>
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20 md:gap-y-14 opacity-70 w-full max-w-5xl">
                    <span className="font-serif italic tracking-wide text-2xl md:text-3xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">Banco Galicia</span>
                    <span className="font-sans font-black tracking-widest text-xl md:text-2xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">ASSIST CARD</span>
                    <span className="font-sans font-medium tracking-tighter lowercase text-2xl md:text-3xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">despegar</span>
                    <span className="font-mono font-bold tracking-[0.2em] text-lg md:text-xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">INTERCORP</span>
                    <span className="font-sans font-bold tracking-tight text-xl md:text-2xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">Interbank</span>
                    <span className="font-sans font-black tracking-[0.1em] text-2xl md:text-3xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">SODIMAC</span>
                    <span className="font-sans italic font-black tracking-wider text-xl md:text-2xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">DIRECTV</span>
                    <span className="font-serif font-light lowercase text-3xl md:text-4xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">falabella.</span>
                    <span className="font-sans font-medium tracking-[0.3em] text-lg md:text-xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">SIGLO 21</span>
                    <span className="font-sans font-black uppercase tracking-tight text-2xl md:text-3xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">COCO'S</span>
                    <span className="font-sans font-semibold tracking-wide text-2xl md:text-3xl text-white/50 hover:text-white transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:opacity-100">AstroPay</span>
                </div>
            </div>
        </section>
    );
}
