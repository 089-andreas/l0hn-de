import Navigation from '../components/Navigation';

export default function Baulohn() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .grid3 { grid-template-columns: 1fr !important; }
          .grid2 { grid-template-columns: 1fr !important; }
          .section { padding: 2.5rem 1.25rem !important; }
        }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Leistung</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Baulohn – <span style={{ color: '#F97316' }}>SOKA, Mindestlohn & mehr</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
          Baulohn ist komplex – SOKA-BAU, Sozialkassen, Mindestlohn, Gewerke. Wir kennen das Baugewerbe und rechnen fehlerfrei ab.
        </p>
        <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Jetzt Angebot anfragen</a>
      </section>

      {/* Was ist das? */}
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Übersicht</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Was ist Baulohn?</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          Baulohn bezeichnet die Lohnabrechnung für Mitarbeitende im Baugewerbe. Sie unterscheidet sich erheblich von normaler Lohnabrechnung: Sozialkassenbeiträge an SOKA-BAU, branchenspezifische Mindestlöhne, Auslösen und Spesen, Schlechtwettergeld sowie besondere Tarifverträge machen die Abrechnung komplex. Fehler können Nachzahlungen und Bußgelder nach sich ziehen – Expertenwissen ist Pflicht.
        </p>
      </section>

      {/* Leistungsumfang */}
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsumfang</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was ist enthalten</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { titel: 'SOKA-BAU Meldungen', text: 'Korrekte Meldungen an die Sozialkasse Bau – fristgerecht und vollständig.' },
              { titel: 'Mindestlohnprüfung', text: 'Automatische Prüfung aller Löhne gegen den aktuellen Baumindestlohn.' },
              { titel: 'Auslösen & Spesen', text: 'Korrekte steuerliche Behandlung von Reisekosten und Auslösen.' },
              { titel: 'Schlechtwettergeld', text: 'Abrechnung von Saison-Kurzarbeitergeld und Schlechtwetterregelungen.' },
              { titel: 'Alle Gewerke', text: 'Ob Rohbau, Ausbau, SHK oder Elektro – wir kennen alle Tarifverträge.' },
              { titel: 'Jahresendarbeiten', text: 'Urlaubsabrechnung, Lohnsteuerbescheinigungen und Jahresabschluss.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#f5f5f5', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Für wen</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Für alle Betriebe im Baugewerbe</h2>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Bauunternehmen', text: 'Vom kleinen Handwerksbetrieb bis zum großen Bauunternehmen – wir skalieren mit Ihnen.' },
            { titel: 'Subunternehmer', text: 'Auch für Subunternehmer mit wenigen Mitarbeitenden lohnt sich professionelle Baulohnabrechnung.' },
            { titel: 'Handwerksbetriebe', text: 'SHK, Elektro, Maler, Dachdecker – alle Gewerke mit ihren spezifischen Tarifverträgen.' },
            { titel: 'Steuerberater', text: 'Baulohn für Ihre Baugewerbe-Mandanten – entlasten Sie Ihre Kanzlei.' },
          ].map((item) => (
            <div key={item.titel} style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vorteile */}
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Warum L0hn.de</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Ihre Vorteile</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { titel: 'Baulohn-Expertise', text: 'Wir kennen die Besonderheiten des Baugewerbes – kein Einarbeiten nötig.' },
              { titel: 'Immer aktuell', text: 'Mindestlöhne und Sozialkassenbeiträge ändern sich – wir bleiben automatisch aktuell.' },
              { titel: 'Haftpflichtversichert', text: 'Fehler bei SOKA-Meldungen gehen auf unsere Kappe.' },
              { titel: 'Persönlicher Kontakt', text: 'Ein fester Ansprechpartner – kein anonymes Callcenter.' },
              { titel: 'Festpreis', text: 'Kalkulierbare Kosten pro Abrechnung – kein böses Erwachen.' },
              { titel: 'DSGVO-konform', text: 'Alle Mitarbeiterdaten sicher und datenschutzkonform verarbeitet.' },
            ].map((item) => (
              <div key={item.titel} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', background: '#F97316', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontWeight: 700 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: '#1a1a1a' }}>{item.titel}</div>
                  <div style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="section" style={{ padding: '3rem 1.75rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Kontakt</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>Jetzt Angebot anfragen</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Kostenloses Erstgespräch – unverbindlich und unkompliziert.</p>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <input type="text" placeholder="Ihr Name *" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <input type="email" placeholder="Ihre E-Mail *" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <input type="text" placeholder="Unternehmen" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <input type="text" placeholder="Mitarbeiterzahl" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <textarea placeholder="Ihre Nachricht" rows={4} style={{ gridColumn: '1/-1', padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', resize: 'none', fontFamily: 'inherit' }} />
          <button style={{ gridColumn: '1/-1', background: '#1a1a1a', color: '#fff', padding: '1rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}>Nachricht senden</button>
        </div>
      </section>

      {/* Footer */}
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