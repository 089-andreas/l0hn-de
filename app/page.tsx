import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem !important; }
          .stats { grid-template-columns: repeat(2, 1fr) !important; margin: 0 1.25rem !important; }
          .grid4 { grid-template-columns: repeat(2, 1fr) !important; }
          .grid3 { grid-template-columns: 1fr !important; }
          .preise-grid { grid-template-columns: 1fr !important; }
          .vorteile-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .section { padding: 2.5rem 1.25rem !important; }
        }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section className="hero" style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>
  Ihr digitales Lohnbüro – bundesweit
</div>
<h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
  <span style={{ color: '#F97316' }}>0</span> Risiko.{' '}
  <span style={{ color: '#F97316' }}>0</span> Fehler.{' '}
  <span style={{ color: '#F97316' }}>0</span> Stress.
</h1>
<p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>
  Ihre Lohnabrechnung. <span style={{ color: '#F97316', fontWeight: 700 }}>100%</span> in sicheren Händen.
</p>
<ul style={{ listStyle: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '2rem', textAlign: 'left' }}>
  {[
    'Persönlicher Ansprechpartner',
    'Bundesweit für alle Branchen',
    'Digital, pünktlich & rechtssicher',
    'Festpreis – transparent & fair',
  ].map(punkt => (
    <li key={punkt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', color: '#444' }}>
      <span style={{ color: '#F97316', fontWeight: 700, fontSize: '1.1rem' }}>✓</span> {punkt}
    </li>
  ))}
</ul>
<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
  <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Kostenloses Angebot</a>
  <a href="#leistungen" style={{ background: '#fff', color: '#1a1a1a', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', border: '0.5px solid #ddd' }}>Leistungen ansehen</a>
</div>
      </section>

      {/* Kennzahlen */}
      <section className="stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#e5e5e5', margin: '3rem 1.75rem', borderRadius: '12px', overflow: 'hidden' }}>
        {[
          { zahl: '500+', label: 'Zufriedene Kunden' },
          { zahl: 'ab 7€', label: 'Pro Abrechnung' },
          { zahl: '100%', label: 'Digital & papierlos' },
          { zahl: '48h', label: 'Reaktionszeit' },
        ].map((item) => (
          <div key={item.label} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F97316' }}>{item.zahl}</div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>{item.label}</div>
          </div>
        ))}
      </section>

      {/* Für wen */}
      <section id="kunden" className="section" style={{ padding: '3rem 1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Für wen</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Wir arbeiten für</h2>
        <div className="grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Unternehmen', text: 'Alle Branchen, jede Teamgröße – flexibel und skalierbar.' },
            { titel: 'Baugewerbe', text: 'Baulohn für alle Gewerke – inkl. Sozialkassen & SOKA.' },
            { titel: 'Öffentl. Dienst', text: 'TVöD, TV-L und kommunale Tarifverträge kein Problem.' },
            { titel: 'Steuerberater', text: 'Mandantenübergreifende Abrechnung für Kanzleien.' },
          ].map((item) => (
            <div key={item.titel} style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preise */}
      <section id="preise" style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Preise</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Transparent & fair</h2>
          <div className="preise-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: '#f5f5f5', border: '0.5px solid #e5e5e5', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Digital</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>ab 7€</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Abrechnung · zzgl. MwSt.</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Monatliche Lohnabrechnung', 'Alle gesetzlichen Meldungen', 'Digitales Mitarbeiterportal', 'Fester Ansprechpartner', 'DSGVO-konform'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                    <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{ display: 'block', marginTop: '1.5rem', background: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>
                Jetzt anfragen
              </a>
            </div>
            <div style={{ background: '#f5f5f5', border: '2px solid #1a1a1a', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F97316', color: '#fff', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Beliebteste Wahl</div>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Full-Service</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>ab 17€</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Abrechnung · zzgl. MwSt.</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Alles aus Digital', 'Postversand der Abrechnungen', 'Controlling & Auswertungen', 'Digitale Personalakte', 'Berufsgenossenschaft & Meldewesen', 'Prioritäts-Support'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                    <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{ display: 'block', marginTop: '1.5rem', background: '#1a1a1a', color: '#fff', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>
                Jetzt anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="section" style={{ padding: '3rem 1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungen</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was wir für Sie übernehmen</h2>
        <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Lohnabrechnung', text: 'Monatlich, rechtssicher, pünktlich. Inkl. aller gesetzlichen Meldungen.' },
            { titel: 'Meldewesen', text: 'SV-Meldungen, Finanzamt, Berufsgenossenschaft – wir kümmern uns.' },
            { titel: 'Controlling', text: 'Individuelle Auswertungen und Mehrjahresvergleiche.' },
            { titel: 'Digitale Personalakte', text: 'Alle Dokumente sicher digital – kein Papierchaos.' },
            { titel: 'Beratung', text: 'Fester Ansprechpartner für alle Fragen – kein Callcenter.' },
            { titel: 'Versand-Optionen', text: 'Digitalportal für Mitarbeitende oder klassischer Postversand.' },
          ].map((item) => (
            <div key={item.titel} style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vorteile */}
      <section id="vorteile" style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Warum L0hn.de</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Ihre Vorteile</h2>
          <div className="vorteile-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { titel: 'Festpreis', text: 'Kein Kleingedrucktes. Sie zahlen pro Abrechnung – kalkulierbar und fair.' },
              { titel: 'Persönlich', text: 'Sie kennen Ihre Ansprechperson persönlich – kein anonymes Callcenter.' },
              { titel: 'Haftpflichtversichert', text: 'Fehler gehen auf unsere Kappe – Sie sind auf der sicheren Seite.' },
              { titel: 'Keine Ausfallrisiken', text: 'Urlaub, Krankheit? Bei uns läuft die Abrechnung immer pünktlich.' },
              { titel: 'Keine Software-Kosten', text: 'Modernste Abrechnungssoftware inklusive – nichts installieren.' },
              { titel: 'Fokus aufs Kerngeschäft', text: 'Nie wieder Stunden mit Lohnbuchhaltung verlieren.' },
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
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <input type="text" placeholder="Ihr Name *" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <input type="email" placeholder="Ihre E-Mail *" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <input type="text" placeholder="Unternehmen" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <input type="text" placeholder="Mitarbeiterzahl" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          <textarea placeholder="Ihre Nachricht" rows={4} style={{ gridColumn: '1/-1', padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', color: '#1a1a1a', fontSize: '0.95rem', resize: 'none', fontFamily: 'inherit' }} />
          <button style={{ gridColumn: '1/-1', background: '#1a1a1a', color: '#fff', padding: '1rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}>
            Nachricht senden
          </button>
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