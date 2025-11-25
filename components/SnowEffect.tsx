"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  drift: number;
}

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generar copos de nieve aleatorios
    const flakes: Snowflake[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Posición horizontal aleatoria (0-100%)
      delay: Math.random() * 5, // Delay aleatorio (0-5s)
      duration: 6 + Math.random() * 8, // Duración aleatoria (6-14s)
      size: 3 + Math.random() * 8, // Tamaño aleatorio (3-11px)
      opacity: 0.5 + Math.random() * 0.5, // Opacidad aleatoria (0.5-1)
      drift: -40 + Math.random() * 80, // Desviación lateral aleatoria (-40 a 40px)
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.x}%`,
            fontSize: `${flake.size * 2}px`,
            opacity: flake.opacity,
            top: "-50px",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 5px rgba(200, 220, 255, 0.6)",
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, flake.drift, flake.drift * 0.5, flake.drift],
            rotate: [0, 360],
            scale: [1, 1.3, 0.9, 1.1],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❄️
        </motion.div>
      ))}
    </div>
  );
}

