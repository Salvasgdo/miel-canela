# 📧 Configuración de Email - Formulario de Contacto

Este documento explica cómo configurar el envío de emails desde el formulario de contacto.

## 🚀 Servicio de Email: Resend

Usamos **Resend** para enviar emails. Es moderno, confiable y tiene un plan gratuito generoso.

### Plan Gratuito de Resend
- ✅ 100 emails por día
- ✅ 3,000 emails por mes
- ✅ Sin tarjeta de crédito requerida
- ✅ Perfecto para sitios pequeños/medianos

## 📝 Paso 1: Crear Cuenta en Resend

1. Ve a [https://resend.com/signup](https://resend.com/signup)
2. Regístrate con tu email
3. Confirma tu email
4. Inicia sesión

## 🔑 Paso 2: Obtener API Key

1. Una vez dentro, ve a **API Keys**
2. Haz clic en **"Create API Key"**
3. Dale un nombre (ej: "Miel Canela Producción")
4. Selecciona permisos: **"Sending access"**
5. Copia la API Key (comienza con `re_...`)
   ⚠️ **¡Importante!** Solo se muestra una vez, guárdala

## ⚙️ Paso 3: Configurar Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Agrega tu API Key:

```env
# Resend API Key
RESEND_API_KEY=re_tu_api_key_aqui

# Email donde recibirás los mensajes
CONTACT_EMAIL=tu-email@ejemplo.com
```

3. **Reemplaza los valores:**
   - `RESEND_API_KEY`: Tu API key de Resend
   - `CONTACT_EMAIL`: El email donde quieres recibir los mensajes

## 🎯 Paso 4: Verificar Dominio (Opcional pero Recomendado)

### ¿Por qué verificar tu dominio?

Sin dominio verificado:
- ❌ Los emails se envían desde `onboarding@resend.dev`
- ❌ Puede parecer spam
- ❌ Menos profesional

Con dominio verificado:
- ✅ Los emails se envían desde tu dominio (ej: `contacto@mielcanela.com`)
- ✅ Mayor credibilidad
- ✅ Mejor deliverability (menos spam)

### Cómo verificar tu dominio:

1. En Resend, ve a **Domains**
2. Haz clic en **"Add Domain"**
3. Ingresa tu dominio (ej: `mielcanela.com`)
4. Resend te dará registros DNS para agregar:
   - **SPF**
   - **DKIM**
   - **DMARC**

5. Agrega estos registros en tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.)
6. Espera la verificación (puede tardar hasta 48 horas, pero usualmente es rápido)

7. Una vez verificado, actualiza el código en `app/api/contact/route.ts`:

```typescript
// Cambiar de:
from: 'Miel Canela Web <onboarding@resend.dev>',

// A:
from: 'Miel Canela <contacto@mielcanela.com>',
```

## 🧪 Paso 5: Probar el Formulario

1. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a [http://localhost:3000](http://localhost:3000)

3. Scroll hasta el formulario de contacto

4. Llena el formulario y envía

5. Deberías ver:
   - ✅ Notificación de éxito en pantalla
   - ✅ Email en tu bandeja de entrada

## 🎨 Formato del Email

El email que recibirás incluye:
- 👤 Nombre del cliente
- 📧 Email del cliente (configurado como Reply-To)
- 📞 Teléfono (si lo proporcionó)
- 💬 Mensaje completo
- 🎨 Diseño bonito con colores de la marca

## 🔧 Personalización

### Cambiar el email de destino

Edita `.env.local`:
```env
CONTACT_EMAIL=otro-email@ejemplo.com
```

### Cambiar el diseño del email

Edita el archivo `app/api/contact/route.ts` en la sección del HTML.

### Agregar más campos

1. Agrega el campo en `components/ContactSection.tsx`
2. Actualiza el tipo en la API route
3. Agrega el campo al HTML del email

## 🐛 Solución de Problemas

### Error: "RESEND_API_KEY is not defined"
- ✅ Verifica que `.env.local` existe
- ✅ Verifica que la API key está correctamente copiada
- ✅ Reinicia el servidor

### Los emails no llegan
- ✅ Verifica tu bandeja de spam
- ✅ Verifica que el CONTACT_EMAIL es correcto
- ✅ Revisa los logs en la consola del navegador
- ✅ Revisa el dashboard de Resend para ver intentos de envío

### Error 400: "Faltan campos requeridos"
- ✅ Verifica que nombre, email y mensaje estén llenos
- ✅ El teléfono es opcional

## 📊 Monitoreo

Puedes ver todos los emails enviados en:
[https://resend.com/emails](https://resend.com/emails)

Ahí verás:
- Estado de cada email (enviado, abierto, rebotado)
- Estadísticas de deliverability
- Logs detallados

## 💰 Límites y Costos

### Plan Gratuito
- 100 emails/día
- 3,000 emails/mes
- **Perfecto para empezar**

### Si necesitas más
Planes desde $20/mes con:
- 50,000 emails/mes
- Dominio personalizado
- Soporte prioritario

## 🔒 Seguridad

- ✅ La API key nunca se expone al cliente
- ✅ Solo se usa en el servidor (API route)
- ✅ Validación de emails en el backend
- ✅ Sanitización de datos

## ✅ Checklist de Configuración

- [ ] Cuenta de Resend creada
- [ ] API Key obtenida
- [ ] `.env.local` configurado con RESEND_API_KEY
- [ ] `.env.local` configurado con CONTACT_EMAIL
- [ ] Servidor reiniciado
- [ ] Formulario probado
- [ ] Email recibido correctamente
- [ ] (Opcional) Dominio verificado
- [ ] (Opcional) Email personalizado configurado

---

¿Necesitas ayuda? Revisa la documentación de Resend: [https://resend.com/docs](https://resend.com/docs)

