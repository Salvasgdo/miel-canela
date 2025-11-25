"use client";

import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart } = useCartStore();

  const generateWhatsAppMessage = () => {
    let message = "¡Hola! Me gustaría ordenar los siguientes productos de Miel Canela:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio unitario: $${item.product.price.toFixed(2)}\n`;
      message += `   Subtotal: $${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });

    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    message += `*Total: $${total.toFixed(2)}*\n\n`;
    message += "¿Podrían confirmar la disponibilidad y el tiempo de entrega?\n";
    message += "¡Gracias!";

    return encodeURIComponent(message);
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "7771432642"; // Reemplaza con tu número de WhatsApp (código de país + número sin +)
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-background shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-serif">Mi Lista</h2>
                  <p className="text-sm text-muted-foreground">
                    {items.length} {items.length === 1 ? "producto" : "productos"}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={closeCart}>
                  <span className="text-2xl">✕</span>
                </Button>
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <span className="text-6xl mb-4">🍰</span>
                  <p className="text-lg font-medium mb-2">Tu lista está vacía</p>
                  <p className="text-sm text-muted-foreground">
                    Agrega productos para crear tu pedido
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <Card key={item.product.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold text-sm line-clamp-1">
                                  {item.product.name}
                                </h3>
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {item.product.category}
                                </Badge>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 flex-shrink-0"
                                onClick={() => removeItem(item.product.id)}
                              >
                                <span className="text-lg">🗑️</span>
                              </Button>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                >
                                  -
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                >
                                  +
                                </Button>
                              </div>
                              
                              <div className="text-right">
                                <p className="text-sm font-bold text-primary">
                                  ${(item.product.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary text-2xl">${total.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button
                    onClick={sendToWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <span className="text-xl mr-2">💬</span>
                    Enviar por WhatsApp
                  </Button>
                  
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="w-full"
                  >
                    Limpiar lista
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

