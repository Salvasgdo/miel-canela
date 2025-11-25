# 🍰 Miel Canela - Instrucciones de Uso

## 🎉 ¡Tu sitio web está listo!

El sitio web de la repostería Miel Canela ha sido creado exitosamente con todas las características solicitadas.

## 🚀 Cómo empezar

### El servidor ya está corriendo en:
```
http://localhost:3000
```

### Si necesitas reiniciar el servidor:
```bash
npm run dev
```

## ✨ Características Implementadas

### 1. **Header (Cabecera)**
- Logo animado con emoji 🍰
- Navegación sticky que permanece visible al hacer scroll
- Enlaces a todas las secciones principales
- Botón de llamada a la acción "Ordenar"
- Diseño responsive

### 2. **Hero Section (Sección Principal)**
- Título impactante con gradientes de color
- Descripción atractiva de la repostería
- Dos botones de CTA: "Ver Productos" y "Contáctanos"
- Íconos animados que destacan las características principales
- Elementos decorativos animados (cookies y cupcakes)

### 3. **Productos**
- Grid responsive de productos (1, 2 o 3 columnas según el dispositivo)
- **9 productos de ejemplo** con:
  - Imágenes profesionales de Unsplash
  - Nombre, descripción y precio
  - Categoría identificada con badge
  - Lista de ingredientes principales
  - Badge especial para productos destacados ⭐
  - Botón "Ordenar Ahora"
- **Sistema de filtros por categorías**:
  - Todos
  - Tartas
  - Cupcakes
  - Macarons
  - Brownies
  - Cookies
- Animaciones suaves al aparecer y al hacer hover

### 4. **Sobre Nosotros**
- Historia de la marca
- Estadísticas destacadas (100% Artesanal, 5⭐ Calificación, 1000+ Clientes)
- Galería de imágenes con efectos hover
- Diseño en dos columnas (texto + imágenes)

### 5. **Contacto**
- Formulario completo con validación:
  - Nombre
  - Email
  - Teléfono
  - Mensaje
- Información de contacto detallada:
  - Dirección
  - Teléfono
  - Email
  - Horario de atención
- Sección destacada sobre pedidos especiales
- Diseño responsive

### 6. **Footer (Pie de página)**
- Información de la empresa
- Enlaces rápidos
- Datos de contacto
- Horarios
- Enlaces a redes sociales
- Copyright

## 🎨 Paleta de Colores

### Colores Primarios (Miel/Naranja):
- `primary-50`: #fef6ee (muy claro)
- `primary-600`: #e15914 (principal)
- `primary-700`: #ba4312 (hover)

### Colores Secundarios (Canela/Amarillo):
- `secondary-50`: #fefce8 (muy claro)
- `secondary-500`: #eab308 (principal)

## 🖼️ Productos Incluidos

1. **Tarta de Chocolate** - $28.50 ⭐
2. **Cupcakes de Vainilla** - $3.50 ⭐
3. **Cheesecake de Frutos Rojos** - $32.00 ⭐
4. **Macarons Franceses** - $2.50
5. **Tarta Red Velvet** - $30.00
6. **Brownies de Chocolate** - $4.00
7. **Tarta de Limón** - $26.00
8. **Cookies Chips de Chocolate** - $2.00
9. **Tarta de Zanahoria** - $28.00

## 📝 Cómo Personalizar

### Cambiar Productos
Edita el archivo `lib/products.ts`:
```typescript
{
  id: "10",
  name: "Nuevo Producto",
  description: "Descripción del producto",
  category: "Tartas",
  price: 25.00,
  image: "https://tuimagen.com/imagen.jpg",
  ingredients: ["Ingrediente 1", "Ingrediente 2"],
  featured: false,
}
```

### Cambiar Colores
Edita `tailwind.config.ts` en la sección de `colors`.

### Cambiar Información de Contacto
Edita `components/ContactSection.tsx` y `components/Footer.tsx`.

### Añadir Nuevas Categorías
1. Añade la categoría en `lib/products.ts` al array `categories`
2. Asigna la categoría a productos existentes o nuevos

## 🌐 Imágenes

Actualmente se usan imágenes de Unsplash (gratuitas). Para usar tus propias imágenes:

1. Guarda las imágenes en `public/images/`
2. Actualiza las rutas en `lib/products.ts`:
   ```typescript
   image: "/images/mi-producto.jpg"
   ```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar errores de código

## 📱 Responsive

El sitio es completamente responsive y se adapta a:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## ✅ Animaciones

Todas las animaciones están implementadas con **Framer Motion**:
- Entrada de secciones al hacer scroll
- Hover effects en productos
- Animaciones de botones
- Transiciones suaves entre estados

## 🎯 Próximos Pasos Sugeridos

1. **Reemplazar las imágenes** con fotos reales de tus productos
2. **Actualizar la información de contacto** (dirección, teléfono, email)
3. **Conectar el formulario** a un servicio de email (ej: EmailJS, SendGrid)
4. **Añadir más productos** según tu catálogo
5. **Configurar analytics** (Google Analytics) si lo deseas
6. **Añadir un favicon** personalizado
7. **Conectar redes sociales** reales en el footer

## 🚀 Despliegue

Para desplegar en Vercel (gratis):
```bash
npm install -g vercel
vercel
```

O usa el botón "Deploy" en tu cuenta de Vercel.

## 💡 Soporte

Si necesitas ayuda o tienes preguntas, consulta:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
- [Documentación de Framer Motion](https://www.framer.com/motion/)

---

**¡Disfruta tu nuevo sitio web! 🎂✨**

