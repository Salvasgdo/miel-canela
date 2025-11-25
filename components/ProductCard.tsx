"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const items = useCartStore((state) => state.items);
  const [isAdding, setIsAdding] = useState(false);

  // Buscar si el producto ya está en el carrito
  const cartItem = items.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;
  const isInCart = quantity > 0;

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 300);
  };

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        {product.featured && (
          <Badge className="absolute top-4 right-4 z-10 bg-secondary-500 hover:bg-secondary-600 text-white shadow-md">
            ⭐ Destacado
          </Badge>
        )}

        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold font-serif mb-2">
                {product.name}
              </h3>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
            </div>
            <div className="text-right ml-2">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="mb-4">
            <p className="text-xs text-muted-foreground font-medium mb-2">Ingredientes:</p>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-xs"
                >
                  {ingredient}
                </Badge>
              ))}
              {product.ingredients.length > 3 && (
                <span className="text-xs text-muted-foreground px-2 py-1">
                  +{product.ingredients.length - 3} más
                </span>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          {!isInCart ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <span className="text-xl mr-2">✓</span>
                    Agregado
                  </>
                ) : (
                  <>
                    <span className="text-xl mr-2">➕</span>
                    Agregar a la Lista
                  </>
                )}
              </Button>
            </motion.div>
          ) : (
            <div className="w-full flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={handleDecrease}
                >
                  <span className="text-2xl">−</span>
                </Button>
              </motion.div>
              
              <div className="flex flex-col items-center justify-center min-w-[60px]">
                <motion.span
                  key={quantity}
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-primary"
                >
                  {quantity}
                </motion.span>
                <span className="text-xs text-muted-foreground">
                  en lista
                </span>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleIncrease}
                >
                  <span className="text-2xl">+</span>
                </Button>
              </motion.div>
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

