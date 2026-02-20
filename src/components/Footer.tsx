"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative z-20 pt-32 pb-12 px-6 lg:px-12 bg-transparent overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-blue-600/10 to-transparent blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="https://files.slack.com/files-pri/T01Q7LJG952-F0AFYPPV46R/1080x1080-07__1_.png?pub_secret=d56c7f0913"
                                    alt="Hike Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-light tracking-[0.2em] text-white">HIKE</span>
                        </div>
                        <p className="text-white/40 font-light leading-relaxed max-w-xs">
                            Fabricar tiempo hasta que el humano vuelva a ser humano. La ingeniería al servicio de la autonomía corporativa.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-300">
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-white font-light tracking-[.3em] uppercase text-[10px]">Mapa del Sitio</h4>
                        <ul className="space-y-4">
                            {["Realidad", "Misión", "Expertise", "Unidades", "Timeline"].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-white font-light text-sm transition-colors group flex items-center gap-2">
                                        <span className="w-0 group-hover:w-2 h-px bg-cyan-400 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-8">
                        <h4 className="text-white font-light tracking-[.3em] uppercase text-[10px]">Legal & Documentos</h4>
                        <ul className="space-y-4">
                            {["Whitepaper", "Términos", "Privacidad", "Metodología", "Partnerships"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/40 hover:text-white font-light text-sm transition-colors group flex items-center gap-2">
                                        <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-8">
                        <h4 className="text-white font-light tracking-[.3em] uppercase text-[10px]">Contacto Global</h4>
                        <div className="space-y-6">
                            <a href="mailto:hello@hike.ai" className="group block">
                                <div className="text-white/40 text-xs mb-1 group-hover:text-cyan-400 transition-colors">Escríbinos</div>
                                <div className="text-white/80 font-light flex items-center gap-2">
                                    juanpablo@abndigital.com.ar <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            </a>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <p className="text-[10px] text-white/30 tracking-widest uppercase mb-2">Base de operaciones</p>
                                <p className="text-white/60 font-light text-sm">Buenos Aires - Global Ops</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-[10px] tracking-widest uppercase">
                        © {new Date().getFullYear()} HIKE / 17SIGMA. TO ALL HUMANITY.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-white/20 hover:text-white transition-colors"
                    >
                        <span className="text-[10px] tracking-[0.3em] uppercase">Ir arriba</span>
                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20">
                            <ArrowUpRight size={14} className="-rotate-45" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
