"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/lib/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra deliciosa selección de postres artesanales
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-muted-foreground">
              No hay productos en esta categoría
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

