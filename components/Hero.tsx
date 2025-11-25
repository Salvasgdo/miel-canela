"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SnowEffect from "@/components/SnowEffect";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-background py-20 md:py-32">
      {/* Efecto de nieve */}
      <SnowEffect />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-serif mb-6">
              Dulces Momentos,
              <br />
              <span className="text-primary">Sabores Inolvidables</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl"
          >
            Repostería artesanal hecha con amor, ingredientes de calidad 
            y la pasión por crear momentos especiales
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="rounded-full text-lg px-8 py-6">
                <a href="#productos">Ver Productos</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6">
                <a href="#contacto">Contáctanos</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
          >
            {[
              { icon: "🥐", text: "100% Artesanal" },
              { icon: "✨", text: "Ingredientes Premium" },
              { icon: "💝", text: "Hecho con Amor" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl mb-2">{item.icon}</span>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      {/*<div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce z-[5]">
        🍪
      </div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-bounce z-[5]" style={{ animationDelay: "1s" }}>
        🧁
      </div>
      */}
    </section>
  );
}

