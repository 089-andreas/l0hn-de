import Navigation from '../components/Navigation';

export default function Datenschutz() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <Navigation />

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.75rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', color: '#1a1a1a' }}>Datenschutzerklärung</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {[
            {
              titel: '1. Verantwortlicher',
              text: `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:\n\nHevelio Personal GmbH\nJahnplatz 4, 82166 Gräfelfing\nTelefon: 089 – 21 52 54 56 0\nE-Mail: info@hevelio-personal.de\nGeschäftsführer: Andreas Thierauf`
            },
            {
              titel: '2. Erhebung und Speicherung personenbezogener Daten',
              text: 'Beim Besuch unserer Website werden durch den Browser automatisch Informationen an den Server übermittelt. Diese werden temporär in sogenannten Server-Log-Dateien gespeichert. Dabei handelt es sich um: IP-Adresse, Datum und Uhrzeit des Abrufs, Name und URL der abgerufenen Datei, verwendeter Browser und Betriebssystem sowie die Website, von der aus der Zugriff erfolgt.'
            },
            {
              titel: '3. Kontaktformular',
              text: 'Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.'
            },
            {
              titel: '4. Ihre Rechte',
              text: 'Sie haben jederzeit das Recht auf:\n\n• Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)\n• Berichtigung unrichtiger Daten (Art. 16 DSGVO)\n• Löschung Ihrer Daten (Art. 17 DSGVO)\n• Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Datenübertragbarkeit (Art. 20 DSGVO)\n• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)\n\nZur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@hevelio-personal.de'
            },
            {
              titel: '5. Cookies',
              text: 'Unsere Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.'
            },
            {
              titel: '6. Hosting',
              text: 'Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA gehostet. Vercel ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Die Datenübertragung in die USA erfolgt auf Basis der Standardvertragsklauseln der EU-Kommission.'
            },
            {
              titel: '7. Beschwerderecht',
              text: 'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde für Bayern ist: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 27, 91522 Ansbach.'
            },
            {
              titel: '8. Aktualität und Änderung dieser Datenschutzerklärung',
              text: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2025. Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.'
            },
          ].map((abschnitt) => (
            <div key={abschnitt.titel} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '0.5px solid #e5e5e5' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>
                {abschnitt.titel}
              </div>
              <p style={{ lineHeight: 1.8, color: '#555', fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                {abschnitt.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      <footer style={{ borderTop: '0.5px solid #e5e5e5', padding: '1.5rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>L<span style={{ color: '#F97316' }}>0</span>hn.de</div>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>© 2025 L0hn.de · Alle Rechte vorbehalten</p>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem' }}>
          <a href="/impressum" style={{ color: '#888', textDecoration: 'none' }}>Impressum</a>
          <a href="/datenschutz" style={{ color: '#888', textDecoration: 'none' }}>Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
