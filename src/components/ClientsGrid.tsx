"use client";

import { motion } from "framer-motion";

export default function ClientsGrid() {
    return (
        <section id="clients" className="relative z-20 py-16 md:py-24 border-y border-white/[0.02] bg-[#020202]/30 backdrop-blur-sm overflow-hidden mix-blend-screen">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
                <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-12">Estructurando los datos de líderes globales</p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16 md:gap-y-10 opacity-70 w-full max-w-5xl">
                    {["Banco Galicia", "Assist Card", "Despegar", "Intercorp", "Interbank", "Sodimac", "DirecTV", "Falabella", "Siglo 21", "Coco's", "AstroPay"].map((client) => (
                        <span key={client} className="font-mono text-xs md:text-sm uppercase tracking-wider text-white/50 hover:text-white transition-colors cursor-default drop-shadow-lg opacity-80 hover:opacity-100">{client}</span>
                    ))}
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 hidden md:inline-block">y más...</span>
                </div>
            </div>
        </section>
    );
}
