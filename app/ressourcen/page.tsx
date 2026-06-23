import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ressourcen = [
  {
    kategorie: 'Behörden & Institutionen',
    links: [
      { titel: 'Bundesministerium für Arbeit und Soziales', url: 'https://www.bmas.de', beschreibung: 'Aktuelle Gesetze, Mindestlohn, Kurzarbeit und mehr.' },
      { titel: 'Deutsche Rentenversicherung', url: 'https://www.deutsche-rentenversicherung.de', beschreibung: 'Informationen zu Rentenversicherungsbeiträgen und Meldepflichten.' },
      { titel: 'Bundesagentur für Arbeit', url: 'https://www.arbeitsagentur.de', beschreibung: 'Kurzarbeitergeld, Meldepflichten, Arbeitslosenversicherung.' },
      { titel: 'Bundeszentralamt für Steuern', url: 'https://www.bzst.de', beschreibung: 'Steuer-ID, Lohnsteuerabzugsmerkmale (ELStAM).' },
    ],
  },
  {
    kategorie: 'Nützliche Tools',
    links: [
      { titel: 'Brutto-Netto-Rechner', url: '/brutto-netto-rechner', beschreibung: 'Unser eigener Rechner – schnell und einfach.' },
      { titel: 'Beitragsbemessungsgrenzen 2025', url: 'https://www.bmas.de', beschreibung: 'Aktuelle Werte für Kranken-, Renten- und Pflegeversicherung.' },
      { titel: 'Mindestlohnrechner', url: 'https://www.mindestlohn-rechner.de', beschreibung: 'Prüfen ob der Mindestlohn eingehalten wird.' },
    ],
  },
  {
    kategorie: 'Formulare & Downloads',
    links: [
      { titel: 'Lohnsteuerkarte / ELStAM', url: 'https://www.elster.de', beschreibung: 'Elektronische Lohnsteuerabzugsmerkmale abrufen.' },
      { titel: 'A1-Bescheinigung', url: 'https://www.deutsche-rentenversicherung.de', beschreibung: 'Für Mitarbeitende im EU-Ausland.' },
      { titel: 'Sozialversicherungsausweis', url: 'https://www.deutsche-rentenversicherung.de', beschreibung: 'Beantragung und Ersatz bei Verlust.' },
    ],
  },
];

export default function Ressourcen() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <Navigation />

      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Ressourcen</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Nützliche <span style={{ color: '#F97316' }}>Links & Tools</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
          Alle wichtigen Behörden, Tools und Formulare rund um die Lohnabrechnung – übersichtlich zusammengestellt.
        </p>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.75rem 4rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {ressourcen.map((gruppe, i) => (
          <div key={i}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '1rem' }}>{gruppe.kategorie}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {gruppe.links.map((link, j) => (
                <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '0.5px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', gap: '1rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{link.titel}</div>
                    <div style={{ fontSize: '0.85rem', color: '#888' }}>{link.beschreibung}</div>
                  </div>
                  <span style={{ color: '#F97316', fontWeight: 700, flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
