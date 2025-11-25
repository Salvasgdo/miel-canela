"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const { getTotalItems, openCart } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-4xl"
            >
              🍰
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold font-serif text-primary">
              Miel Canela
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#productos" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Productos
            </Link>
            <Link 
              href="#sobre-nosotros" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="#contacto" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="icon" 
              className="relative rounded-full h-12 w-12"
              onClick={openCart}
            >
              <span className="text-2xl">📝</span>
              {totalItems > 0 && (
                <Badge 
                  variant="default"
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

