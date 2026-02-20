"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 inset-x-0 z-[100] transition-all duration-500 px-6 lg:px-12 py-4",
                isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => scrollTo("home")}
                >
                    <div className="w-10 h-10 relative">
                        <Image
                            src="https://files.slack.com/files-pri/T01Q7LJG952-F0AGBK8M7DJ/1080x1080-06.png?pub_secret=8eece3088c"
                            alt="Hike Logo"
                            fill
                            className={cn(
                                "object-contain transition-all duration-500",
                                !isScrolled && "brightness-0 invert"
                            )}
                        />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { id: "reality", label: "Realidad" },
                        { id: "philosophy", label: "Misión" },
                        { id: "methodology", label: "Método" },
                        { id: "pricing", label: "Pricing" }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={cn(
                                "text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500",
                                isScrolled ? "text-black/60 hover:text-black" : "text-white/40 hover:text-white"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}

                    <button
                        onClick={() => scrollTo("footer")}
                        className={cn(
                            "text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-2 rounded-full border transition-all duration-500",
                            isScrolled
                                ? "border-black/10 text-black hover:bg-black hover:text-white"
                                : "border-white/10 text-white hover:bg-white hover:text-black"
                        )}
                    >
                        Hablemos
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
