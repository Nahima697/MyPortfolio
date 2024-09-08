import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Récupère les données du corps de la requête
    const { firstName, name, email, phone, message } = await req.json();

    // Validation des champs obligatoires
    if (!firstName || !name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont obligatoires.' }, { status: 400 });
    }

    // Envoie de l'e-mail via Resend
    const data = await resend.emails.send({
      from:  'Acme <onboarding@resend.dev>', 
      to: ['nahima.toumi697@gmail.com'], 
      subject: `Nouveau message de ${firstName}`,
      html: `
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'e-mail' }, { status: 500 });
  }
}
