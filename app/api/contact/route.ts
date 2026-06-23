import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, unternehmen, mitarbeiter, nachricht } = await request.json();

  try {
    await resend.emails.send({
      from: 'L0hn.de <onboarding@resend.dev>',
      to: 'a.thierauf@hevelio.de',
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage über L0hn.de</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Unternehmen:</strong> ${unternehmen}</p>
        <p><strong>Mitarbeiterzahl:</strong> ${mitarbeiter}</p>
        <p><strong>Nachricht:</strong> ${nachricht}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}