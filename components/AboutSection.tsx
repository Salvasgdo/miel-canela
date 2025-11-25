"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                En <span className="font-bold text-primary">Miel Canela</span>, creemos que cada postre 
                cuenta una historia. Desde 2025, nos dedicamos a crear momentos especiales 
                a través de nuestra repostería artesanal.
              </p>
              <p>
                Cada producto es elaborado cuidadosamente con ingredientes de la más alta 
                calidad, siguiendo recetas tradicionales y añadiendo nuestro toque personal 
                de innovación.
              </p>
              <p>
                Nuestra pasión es transformar celebraciones ordinarias en momentos 
                extraordinarios, un dulce a la vez.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: "100%", label: "Artesanal" },
                { number: "5⭐", label: "Calificación" },
                { number: "1000+", label: "Clientes Felices" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&auto=format&fit=crop"
                alt="Repostería"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8"
            >
              <Image
                src="https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&auto=format&fit=crop"
                alt="Panadería"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg col-span-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&auto=format&fit=crop"
                alt="Cocina"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

