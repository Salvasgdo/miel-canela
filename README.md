# Miel Canela - Repostería Artesanal 🍰

Sitio web moderno para mostrar productos de repostería artesanal, construido con Next.js, TypeScript, TailwindCSS y Framer Motion.

## 🚀 Stack Tecnológico

- **Next.js 16** - Framework de React para aplicaciones web
- **TypeScript** - JavaScript con tipos estáticos
- **TailwindCSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes de UI accesibles y personalizables
- **Framer Motion** - Librería de animaciones para React
- **Zustand** - Manejo de estado ligero y simple
- **React 19** - Librería de interfaz de usuario

## 📦 Características

- ✨ Diseño moderno y atractivo con shadcn/ui
- 🎨 Animaciones suaves con Framer Motion
- ❄️ Efecto de nieve cayendo en el banner principal
- 📱 Diseño responsive (móvil, tablet, desktop)
- 🏷️ Sistema de categorías para productos
- 🖼️ Imágenes optimizadas con Next.js Image
- 🎯 Productos destacados
- 📝 Lista de productos con Zustand
- 💬 Integración con WhatsApp para pedidos
- 🛒 Drawer lateral con resumen de productos
- 💅 Paleta de colores personalizada (miel y canela)

## 🛠️ Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
MielCanela/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/                 # Componentes de shadcn/ui
│   ├── Header.tsx          # Cabecera con icono de lista
│   ├── Hero.tsx            # Sección hero con nieve
│   ├── SnowEffect.tsx      # Efecto de nieve cayendo
│   ├── ProductCard.tsx     # Tarjeta de producto
│   ├── ProductGrid.tsx     # Grid de productos con filtros
│   ├── CartDrawer.tsx      # Drawer lateral con lista
│   ├── AboutSection.tsx    # Sección sobre nosotros
│   ├── ContactSection.tsx  # Formulario de contacto
│   └── Footer.tsx          # Pie de página
├── store/
│   └── cartStore.ts        # Store de Zustand para carrito
├── lib/
│   ├── products.ts         # Datos de productos
│   └── utils.ts            # Utilidades (shadcn)
├── public/
│   └── images/             # Imágenes estáticas
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── next.config.ts          # Configuración de Next.js
```

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.ts`:

- **Primary**: Tonos de naranja/miel
- **Secondary**: Tonos de amarillo/canela

### Productos

Los productos se encuentran en `lib/products.ts`. Puedes agregar, editar o eliminar productos modificando el array `products`.

### Imágenes

Las imágenes de productos actualmente usan Unsplash. Para usar imágenes propias:

1. Coloca las imágenes en `public/images/`
2. Actualiza las rutas en `lib/products.ts`
3. Actualiza `next.config.ts` si es necesario

## 🚀 Despliegue

Este proyecto se puede desplegar fácilmente en Vercel:

```bash
npm run build
```

O despliega directamente con Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 💬 Sistema de Lista y WhatsApp

El sitio incluye un sistema completo de lista de productos que se integra con WhatsApp:

1. **Agregar productos**: Haz clic en "Agregar a la Lista" en cualquier producto
2. **Ver lista**: Haz clic en el icono 📝 en la esquina superior derecha
3. **Gestionar cantidades**: Aumenta/disminuye cantidades o elimina productos (el botón cambia a +/- cuando se agrega)
4. **Enviar por WhatsApp**: El botón verde genera un mensaje formateado con:
   - Lista de productos seleccionados
   - Cantidades y precios
   - Total del pedido

### Configurar WhatsApp

Edita el número de WhatsApp en `components/CartDrawer.tsx` línea 15:

```typescript
const phoneNumber = "1234567890"; // Reemplaza con tu número (código país + número)
```

## 📧 Formulario de Contacto con Email

El formulario de contacto envía emails automáticamente usando **Resend**.

### Configuración Rápida

1. **Crear cuenta en Resend**: [https://resend.com/signup](https://resend.com/signup) (gratis)
2. **Obtener API Key**: Dashboard → API Keys → Create API Key
3. **Crear archivo `.env.local`** en la raíz del proyecto:

```env
RESEND_API_KEY=re_tu_api_key_aqui
CONTACT_EMAIL=tu-email@ejemplo.com
```

4. **Reiniciar el servidor**: `npm run dev`

### Plan Gratuito de Resend
- ✅ 3,000 emails/mes
- ✅ Sin tarjeta de crédito
- ✅ Perfecto para empezar

### Formato del Email
Los emails incluyen:
- 👤 Nombre y contacto del cliente
- 💬 Mensaje completo
- 🎨 Diseño con colores de la marca
- ✉️ Reply-to automático al email del cliente

📖 **Documentación completa**: Ver `CONFIGURACION_EMAIL.md`

## 🎯 Próximas Mejoras

- [ ] Página de detalle de producto
- [ ] Persistencia del carrito con localStorage
- [ ] Integración con pasarela de pagos
- [ ] Sistema de pedidos personalizados
- [ ] Panel de administración
- [ ] Blog de recetas
- [ ] Sistema de reservas

## 📄 Licencia

Este proyecto es privado y pertenece a Miel Canela.

---

Hecho con ❤️ y mucho 🍰

