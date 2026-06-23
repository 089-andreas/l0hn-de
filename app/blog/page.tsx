import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const artikel = [
  {
    datum: 'Juni 2025',
    kategorie: 'Gesetzgebung',
    titel: 'Mindestlohn 2025: Was Arbeitgeber jetzt wissen müssen',
    text: 'Ab Januar 2025 gilt der neue gesetzliche Mindestlohn. Wir erklären was sich ändert und was das für Ihre Lohnabrechnung bedeutet.',
  },
  {
    datum: 'Mai 2025',
    kategorie: 'Praxis',
    titel: 'Minijob vs. Teilzeit: Was ist für Ihr Unternehmen sinnvoller?',
    text: 'Beide Modelle haben Vor- und Nachteile – für Arbeitgeber und Arbeitnehmer. Wir vergleichen Kosten, Aufwand und sozialversicherungsrechtliche Aspekte.',
  },
  {
    datum: 'April 2025',
    kategorie: 'Digital',
    titel: 'Digitale Personalakte: So sparen Sie Zeit und Papier',
    text: 'Immer mehr Unternehmen setzen auf digitale Personalakten. Was das bringt, was beachtet werden muss und wie der Umstieg gelingt.',
  },
  {
    datum: 'März 2025',
    kategorie: 'Sozialversicherung',
    titel: 'Beitragssätze 2025: Alle Änderungen auf einen Blick',
    text: 'Kranken-, Renten-, Pflege- und Arbeitslosenversicherung – die Beitragssätze 2025 im Überblick.',
  },
  {
    datum: 'Februar 2025',
    kategorie: 'Steuern',
    titel: 'Lohnsteuerklassen: Welche Klasse passt zu wem?',
    text: 'Die richtige Steuerklasse kann bares Geld sparen. Wir erklären die Unterschiede und wann ein Wechsel sinnvoll ist.',
  },
  {
    datum: 'Januar 2025',
    kategorie: 'Outsourcing',
    titel: '5 Gründe warum Unternehmen die Lohnbuchhaltung auslagern',
    text: 'Zeit sparen, Fehler vermeiden, Kosten senken – wir zeigen warum immer mehr KMU auf externe Lohnbüros setzen.',
  },
];

export default function Blog() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 768px) { .grid2 { grid-template-columns: 1fr !important; } }
      `}</style>

      <Navigation />

      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Blog</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Wissen rund um die <span style={{ color: '#F97316' }}>Lohnabrechnung</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
          Aktuelle Infos, Praxistipps und Gesetzesänderungen – verständlich erklärt.
        </p>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.75rem 4rem' }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {artikel.map((a, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', border: '0.5px solid #e5e5e5', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '1px' }}>{a.kategorie}</span>
                <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{a.datum}</span>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4 }}>{a.titel}</h2>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>{a.text}</p>
              <a href="#" style={{ color: '#F97316', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', marginTop: 'auto' }}>Weiterlesen →</a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
