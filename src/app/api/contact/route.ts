import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot, gdpr } = body;

    // 1. Bot Protection (Honeypot)
    if (honeypot) {
      // If honeypot field is filled, it's likely a bot.
      // Return success to fool the bot, but don't send email.
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. GDPR Validation
    if (!gdpr) {
      return NextResponse.json(
        { error: 'Kérjük fogadja el az adatkezelési tájékoztatót.' },
        { status: 400 }
      );
    }

    // 3. Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Minden mező kitöltése kötelező.' },
        { status: 400 }
      );
    }

    // 4. Configure Transporter (Mock or Real)
    // For production, these env vars should be set.
    // Fallback to a mock for development if not provided, but in a real scenario we'd want to fail or log.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'user',
        pass: process.env.SMTP_PASS || 'pass',
      },
    });

    // 5. Send Email to Admin (Company)
    await transporter.sendMail({
      from: `"BoatHungary Web" <${process.env.SMTP_FROM || 'noreply@boathungary.hu'}>`,
      to: process.env.SMTP_TO || 'info@boathungary.hu',
      subject: `Új üzenet: ${subject || 'Nincs tárgy'} - ${name}`,
      html: `
        <h3>Új érdeklődés érkezett a weboldalról</h3>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tárgy:</strong> ${subject}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 6. Send Confirmation Email to User
    await transporter.sendMail({
      from: `"BoatHungary" <${process.env.SMTP_FROM || 'noreply@boathungary.hu'}>`,
      to: email,
      subject: `Visszaigazolás: Köszönjük megkeresését!`,
      html: `
        <h3>Kedves ${name}!</h3>
        <p>Köszönjük, hogy felvette velünk a kapcsolatot. Üzenetét megkaptuk, és hamarosan válaszolunk.</p>
        <br>
        <p>Üdvözlettel,</p>
        <p><strong>BoatHungary Csapata</strong></p>
        <p><a href="https://boathungary.hu">boathungary.hu</a></p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Hiba történt az üzenet küldésekor. Kérjük próbálja újra később.' },
      { status: 500 }
    );
  }
}
