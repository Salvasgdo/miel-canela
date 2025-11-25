"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', {
          duration: 5000,
          icon: '✉️',
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.error || 'Error al enviar el mensaje. Por favor intenta de nuevo.', {
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el mensaje. Por favor verifica tu conexión.', {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido especial? 
            Estamos aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 123 456 789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntanos sobre tu pedido o consulta..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">⏳</span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">📧</span>
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-3xl">📍</span>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Calle Ejemplo 123<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-3xl">📞</span>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@mielcanela.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-3xl">🕐</span>
                  <div>
                    <h4 className="font-semibold mb-1">Horario</h4>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 9:00 - 20:00<br />
                      Sábados: 10:00 - 21:00<br />
                      Domingos: 10:00 - 18:00
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💡 ¿Pedidos Especiales?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Creamos tartas personalizadas para bodas, cumpleaños, eventos 
                  corporativos y cualquier ocasión especial.
                </p>
                <p className="font-medium">
                  Contáctanos con al menos 48 horas de anticipación para pedidos personalizados.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

