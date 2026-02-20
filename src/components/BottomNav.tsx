"use client";

import { Home, Briefcase, Info, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
    const navItems = [
        { name: "Start", icon: Home, href: "#home" },
        { name: "Units", icon: Briefcase, href: "#units" },
        { name: "Story", icon: Info, href: "#story" },
        { name: "Contact", icon: Mail, href: "#contact" },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
        >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] flex justify-between items-center">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group"
                    >
                        <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
