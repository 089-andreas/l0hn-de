import Navigation from '../components/Navigation';

export default function Lohnabrechnung() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem !important; }
          .grid3 { grid-template-columns: 1fr !important; }
          .grid2 { grid-template-columns: 1fr !important; }
          .section { padding: 2.5rem 1.25rem !important; }
        }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section className="hero" style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>
          Leistung
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Lohnabrechnung auslagern – <span style={{ color: '#F97316' }}>sicher & pünktlich</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
          Wir übernehmen Ihre monatliche Lohnabrechnung – rechtssicher, digital und zu einem festen Preis. Kein Stress, keine Fehler, kein Aufwand.
        </p>
        <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
          Jetzt Angebot anfragen
        </a>
      </section>

      {/* Was ist das? */}
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Übersicht</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Was ist Lohnabrechnung?</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          Die Lohnabrechnung ist die monatliche Berechnung und Dokumentation aller Lohn- und Gehaltszahlungen an Ihre Mitarbeitenden. Sie umfasst Brutto-Netto-Berechnungen, Sozialversicherungsbeiträge, Lohnsteuer und alle gesetzlich vorgeschriebenen Meldungen an Behörden und Krankenkassen. Fehler können teuer werden – deshalb lohnt es sich, das einem Profi zu übergeben.
        </p>
      </section>

      {/* Leistungsumfang */}
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsumfang</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was ist enthalten</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { titel: 'Monatliche Abrechnung', text: 'Pünktliche Brutto-Netto-Abrechnung für alle Mitarbeitenden – egal ob Voll-, Teilzeit oder Minijob.' },
              { titel: 'SV-Meldungen', text: 'Alle Sozialversicherungsmeldungen an Krankenkassen und Rentenversicherung automatisch erledigt.' },
              { titel: 'Lohnsteueranmeldung', text: 'Monatliche oder quartalsweise Anmeldung beim Finanzamt – fristgerecht und korrekt.' },
              { titel: 'An- & Abmeldungen', text: 'Neue Mitarbeitende anmelden, ausscheidende abmelden – wir kümmern uns um alles.' },
              { titel: 'Bescheinigungen', text: 'Lohnbescheinigungen, Arbeitgeberbescheinigungen und alle weiteren Dokumente auf Anfrage.' },
              { titel: 'Digitalportal', text: 'Mitarbeitende erhalten ihre Lohnzettel digital – sicher, papierlos und jederzeit abrufbar.' },
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
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Für jeden Betrieb geeignet</h2>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Kleine Unternehmen', text: 'Ob 1 oder 10 Mitarbeitende – professionelle Lohnabrechnung muss nicht teuer sein.' },
            { titel: 'Wachsende Betriebe', text: 'Skalierbar mit Ihrem Unternehmen – von 10 auf 500 Mitarbeitende ohne Aufwand.' },
            { titel: 'Baugewerbe', text: 'Baulohn mit Sozialkassen und SOKA-Meldungen – kein Problem für uns.' },
            { titel: 'Steuerberater', text: 'Entlasten Sie Ihre Kanzlei – wir übernehmen die Lohnabrechnung für Ihre Mandanten.' },
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
              { titel: 'Festpreis ab 7€', text: 'Pro Abrechnung – keine versteckten Kosten, kein Kleingedrucktes.' },
              { titel: 'Persönlicher Kontakt', text: 'Kein Callcenter. Sie haben eine feste Ansprechperson.' },
              { titel: 'Haftpflichtversichert', text: 'Fehler gehen auf unsere Kappe – Sie sind abgesichert.' },
              { titel: 'Immer pünktlich', text: 'Urlaub, Krankheit – bei uns läuft die Abrechnung immer.' },
              { titel: 'Keine Software nötig', text: 'Modernste Systeme inklusive – nichts installieren, nichts lizenzieren.' },
              { titel: 'DSGVO-konform', text: 'Alle Daten sicher und datenschutzkonform verarbeitet.' },
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