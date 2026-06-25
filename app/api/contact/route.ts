import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { anrede, vorname, nachname, firma, email, telefon, mitarbeiter, lohnart, nachricht } = await request.json();

  const ansprache = anrede === 'Frau' ? `Sehr geehrte Frau ${nachname}` : anrede === 'Herr' ? `Sehr geehrter Herr ${nachname}` : `Guten Tag ${vorname} ${nachname}`;

  try {
    // Interne E-Mail an Andreas
    await resend.emails.send({
      from: 'L0hn.de <onboarding@resend.dev>',
      to: 'a.thierauf@hevelio.de',
      subject: `Neue Anfrage: ${vorname} ${nachname} – ${firma || 'ohne Firma'} (${mitarbeiter} MA, ${lohnart})`,
      html: `
        <h2 style="color:#F97316">Neue Anfrage über L0hn.de</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;font-weight:bold;width:160px">Anrede</td><td style="padding:6px 12px">${anrede}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${vorname} ${nachname}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Firma</td><td style="padding:6px 12px">${firma || '–'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">E-Mail</td><td style="padding:6px 12px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Telefon</td><td style="padding:6px 12px"><a href="tel:${telefon}">${telefon}</a></td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Mitarbeiter</td><td style="padding:6px 12px">${mitarbeiter}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Lohnart</td><td style="padding:6px 12px">${lohnart}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Nachricht</td><td style="padding:6px 12px">${nachricht || '–'}</td></tr>
        </table>
      `,
    });

    // Bestätigungs-E-Mail an Kunden
    await resend.emails.send({
      from: 'L0hn.de <onboarding@resend.dev>',
      to: email,
      subject: 'Ihre Anfrage bei L0hn.de – wir melden uns!',
      html: `
        <p>${ansprache},</p>
        <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen.</p>
        <p><strong>Ihre Angaben im Überblick:</strong></p>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;font-weight:bold;width:160px">Firma</td><td style="padding:6px 12px">${firma || '–'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Mitarbeiter</td><td style="padding:6px 12px">${mitarbeiter}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Lohnart</td><td style="padding:6px 12px">${lohnart}</td></tr>
        </table>
        <br/>
        <p>Mit freundlichen Grüßen<br/><strong>Andreas Thierauf</strong><br/>L0hn.de – Lohnbüro</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}