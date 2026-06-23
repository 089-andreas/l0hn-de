import Navigation from '../components/Navigation';

export default function LohnbuchhaltungBerlin() {
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
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Standort Berlin</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Lohnabrechnung Berlin – <span style={{ color: '#F97316' }}>digital & rechtssicher</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
          Ihr Lohnbüro für Berlin und Umgebung. Wir übernehmen Ihre komplette Lohn- und Gehaltsabrechnung – pünktlich, fehlerfrei und zu einem fairen Festpreis.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Jetzt Angebot anfragen</a>
          <a href="#leistungen" style={{ background: '#fff', color: '#1a1a1a', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', border: '0.5px solid #ddd' }}>Unsere Leistungen</a>
        </div>
      </section>

      {/* Kennzahlen */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#e5e5e5', margin: '0 1.75rem 3rem', borderRadius: '12px', overflow: 'hidden' }}>
        {[
          { zahl: 'ab 7€', label: 'Festpreis pro Abrechnung' },
          { zahl: 'bis 80%', label: 'Kostenersparnis' },
          { zahl: '99,8%', label: 'Fehlerfreie Abrechnungen' },
          { zahl: '100%', label: 'Digital & DSGVO-konform' },
        ].map((item) => (
          <div key={item.label} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F97316' }}>{item.zahl}</div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>{item.label}</div>
          </div>
        ))}
      </section>

      {/* Warum lokal */}
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Berlin & Umgebung</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Lohnabrechnung für Berliner Unternehmen</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          Berlin ist Deutschlands Startup-Hauptstadt – aber auch Heimat tausender Handwerksbetriebe, Agenturen und mittelständischer Unternehmen. Die Berliner Arbeitswelt ist vielfältig: flexible Vergütungsmodelle, internationale Teams, schnelles Wachstum. Wir kennen diese Anforderungen und liefern rechtssichere Lohnabrechnungen – vollständig digital, ohne Vor-Ort-Termine und zu einem festen monatlichen Preis.
        </p>
      </section>

      {/* Leistungen */}
      <section id="leistungen" style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsumfang</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was wir für Sie übernehmen</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { titel: 'Monatliche Abrechnung', text: 'Pünktliche Lohn- und Gehaltsabrechnung für alle Mitarbeitenden – egal ob Vollzeit, Teilzeit oder Minijob.' },
              { titel: 'SV-Meldungen', text: 'Alle Sozialversicherungsmeldungen an Krankenkassen und Rentenversicherung – fristgerecht erledigt.' },
              { titel: 'Lohnsteueranmeldung', text: 'Monatliche oder quartalsweise Anmeldung beim Finanzamt – korrekt und pünktlich.' },
              { titel: 'An- & Abmeldungen', text: 'Neue Mitarbeitende anmelden, ausscheidende abmelden – wir kümmern uns.' },
              { titel: 'Digitale Personalakte', text: 'Alle Dokumente sicher digital – kein Papierchaos, jederzeit abrufbar.' },
              { titel: 'Persönliche Beratung', text: 'Fester Ansprechpartner für alle Fragen – kein Callcenter, keine Warteschleife.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#f5f5f5', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section style={{ padding: '3rem 1.75rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Preise</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Transparent & fair</h2>
          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Digital</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>ab 7€</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Abrechnung · zzgl. MwSt.</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Monatliche Abrechnung', 'SV-Meldungen', 'Lohnsteueranmeldung', 'Digitalportal für Mitarbeitende', 'Fester Ansprechpartner'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                    <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{ display: 'block', marginTop: '1.5rem', background: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Jetzt anfragen</a>
            </div>
            <div style={{ background: '#fff', border: '2px solid #1a1a1a', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F97316', color: '#fff', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Beliebteste Wahl</div>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Vollservice</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>ab 17€</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Abrechnung · zzgl. MwSt.</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Alles aus Digital', 'Alle Bescheinigungen', 'Jahresendarbeiten', 'Behördenkorrespondenz', 'Controlling & Auswertungen'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                    <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{ display: 'block', marginTop: '1.5rem', background: '#1a1a1a', color: '#fff', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Jetzt anfragen</a>
            </div>
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