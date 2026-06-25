import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { anrede, vorname, nachname, firma, email, telefon, mitarbeiter, lohnart, nachricht } = await request.json();

  const ansprache = anrede === 'Frau'
    ? `Sehr geehrte Frau ${nachname}`
    : anrede === 'Herr'
    ? `Sehr geehrter Herr ${nachname}`
    : `Guten Tag ${vorname} ${nachname}`;

  // Broschüre als Base64 laden
  const broschuerePfad = path.join(process.cwd(), 'public', 'l0hn_broschuere.pdf');
  const broschuereBase64 = fs.readFileSync(broschuerePfad).toString('base64');

  try {
    // Interne E-Mail an Andreas
    await resend.emails.send({
      from: 'L0hn.de <onboarding@resend.dev>',
      to: 'a.thierauf@hevelio.de',
      subject: `Neue Anfrage: ${vorname} ${nachname} – ${firma} (${mitarbeiter} MA, ${lohnart})`,
      html: `
        <h2 style="color:#F97316">Neue Anfrage über L0hn.de</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          <tr><td style="padding:8px 12px;font-weight:bold;width:160px;background:#f9f9f9">Anrede</td><td style="padding:8px 12px">${anrede}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#fff">Name</td><td style="padding:8px 12px">${vorname} ${nachname}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f9f9f9">Firma</td><td style="padding:8px 12px">${firma}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#fff">E-Mail</td><td style="padding:8px 12px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f9f9f9">Telefon</td><td style="padding:8px 12px"><a href="tel:${telefon}">${telefon}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#fff">Mitarbeiter</td><td style="padding:8px 12px">${mitarbeiter}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f9f9f9">Lohnart</td><td style="padding:8px 12px">${lohnart}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#fff">Nachricht</td><td style="padding:8px 12px">${nachricht || '–'}</td></tr>
        </table>
      `,
    });

    // Bestätigungs-E-Mail an Interessenten
    await resend.emails.send({
      from: 'L0hn.de <onboarding@resend.dev>',
      to: email,
      subject: 'Ihre Anfrage bei L0hn.de – wir melden uns!',
      attachments: [
        {
          filename: 'L0hn_Broschuere.pdf',
          content: broschuereBase64,
        },
      ],
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#1a1a1a;padding:24px 32px">
            <span style="color:#F97316;font-size:22px;font-weight:bold">L0hn.de</span>
            <span style="color:#fff;font-size:14px;margin-left:12px">Lohnbüro</span>
          </div>

          <div style="padding:32px">
            <p style="font-size:16px;margin-bottom:16px">${ansprache},</p>
            <p style="color:#444;line-height:1.7;margin-bottom:16px">
              vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und 
              melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen.
            </p>
            <p style="color:#444;line-height:1.7;margin-bottom:24px">
              Im Anhang finden Sie unsere Broschüre mit allen Informationen zu unseren 
              Leistungen und Preisen.
            </p>

            <div style="background:#f5f5f5;border-radius:8px;padding:20px;margin-bottom:24px">
              <p style="font-size:13px;font-weight:bold;margin-bottom:12px;color:#1a1a1a">Ihre Angaben im Überblick:</p>
              <table style="border-collapse:collapse;width:100%;font-size:13px">
                <tr><td style="padding:4px 0;color:#666;width:140px">Firma</td><td style="padding:4px 0;font-weight:bold">${firma}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Mitarbeiter</td><td style="padding:4px 0;font-weight:bold">${mitarbeiter}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Lohnart</td><td style="padding:4px 0;font-weight:bold">${lohnart}</td></tr>
              </table>
            </div>

            <div style="text-align:center;margin-bottom:32px">
              <p style="color:#444;margin-bottom:16px">Oder buchen Sie direkt einen Termin mit Andreas:</p>
              <a href="https://calendly.com/l0hn/30min" 
                 style="background:#F97316;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:15px;display:inline-block">
                Termin jetzt buchen →
              </a>
            </div>

            <p style="color:#444;line-height:1.7">
              Mit freundlichen Grüßen<br/>
              <strong>Andreas Thierauf</strong><br/>
              <span style="color:#666;font-size:13px">Geschäftsführer · L0hn.de · Hevelio Personal GmbH</span><br/>
              <span style="color:#666;font-size:13px">📞 089 – 44 31 11 82 0 · ✉ info@l0hn.de</span>
            </p>
          </div>

          <div style="background:#f5f5f5;padding:16px 32px;text-align:center">
            <p style="font-size:11px;color:#999;margin:0">
              Hevelio Personal GmbH · Jahnplatz 4, 82166 Gräfelfing · 
              <a href="https://www.l0hn.de/datenschutz" style="color:#999">Datenschutz</a> · 
              <a href="https://www.l0hn.de/impressum" style="color:#999">Impressum</a>
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}