"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍰</span>
              <h3 className="text-2xl font-bold font-serif">Miel Canela</h3>
            </div>
            <p className="text-gray-400">
              Repostería artesanal hecha con amor desde 2025
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#productos" className="text-gray-400 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Calle Ejemplo 123</li>
              <li>📞 +34 123 456 789</li>
              <li>✉️ info@mielcanela.com</li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 9:00 - 20:00</li>
              <li>Sábados: 10:00 - 21:00</li>
              <li>Domingos: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Miel Canela. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

