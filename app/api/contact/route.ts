import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicialización lazy de Resend para evitar errores en build time
let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY || 'placeholder_key_for_build';
    resend = new Resend(apiKey);
  }
  return resend;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Verificar que la API key esté configurada en producción
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Servicio de email no configurado. Por favor contacta al administrador.' },
        { status: 503 }
      );
    }

    // Enviar email
    const resendClient = getResendClient();
    const data = await resendClient.emails.send({
      from: 'Miel Canela Web <onboarding@resend.dev>', // Cambiar cuando tengas dominio verificado
      to: [process.env.CONTACT_EMAIL || 'info@mielcanela.com'],
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 10px;
              }
              .header {
                background: linear-gradient(135deg, #e15914 0%, #f0731e 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #e15914;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background-color: #f5f5f5;
                border-left: 4px solid #e15914;
                border-radius: 4px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🍰 Nuevo Mensaje de Contacto</h1>
                <p>Sitio Web - Miel Canela</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">👤 Nombre:</span>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <span class="label">📧 Email:</span>
                  <div class="value">${email}</div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <span class="label">📞 Teléfono:</span>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <span class="label">💬 Mensaje:</span>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de mielcanela.com</p>
                <p>Puedes responder directamente a este email para contactar al cliente</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}

