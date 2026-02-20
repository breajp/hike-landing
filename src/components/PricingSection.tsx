"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
    return (
        <section id="pricing" className="relative z-20 px-6 lg:px-12 py-40 bg-transparent text-center flex flex-col items-center justify-center mt-12 pb-64">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl xl:max-w-5xl mx-auto space-y-10 lg:space-y-14"
            >
                <p className="text-white/30 text-[10px] md:text-sm tracking-[0.3em] uppercase">Estrategia de Pricing</p>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-white/90 leading-tight">
                    Pura alineación de intereses.
                </h2>
                <div className="border-t border-white/[0.05] pt-10 mt-10 space-y-8 flex flex-col items-center">
                    <p className="text-sm md:text-xl lg:text-3xl text-white/60 font-light leading-relaxed lg:leading-loose tracking-wide max-w-4xl">
                        No creemos en los retainers inflexibles orientados a "horas-hombre".
                    </p>
                    <p className="text-sm md:text-xl lg:text-3xl text-white/80 font-light leading-relaxed lg:leading-loose tracking-wide max-w-4xl">
                        Priceamos estrictamente sobre el valor neto generado.
                    </p>
                    <p className="text-xs md:text-lg lg:text-xl text-white/40 font-light leading-relaxed max-w-3xl mt-4">
                        Medimos el valor generado calculando el tiempo anual ahorrado, traducido a capital operativo. Nuestro fee promedio representa una fracción (aprox. 25%) del valor neto capturado.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
