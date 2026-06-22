export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
          L<span style={{ color: '#F97316' }}>0</span>hn.de
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#aaa' }}>
          <a href="#leistungen" style={{ color: '#aaa', textDecoration: 'none' }}>Leistungen</a>
          <a href="#vorteile" style={{ color: '#aaa', textDecoration: 'none' }}>Vorteile</a>
          <a href="#kontakt" style={{ color: '#aaa', textDecoration: 'none' }}>Kontakt</a>
        </div>
        <a href="#kontakt" style={{ background: '#F97316', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          Angebot anfragen
        </a>
      </nav>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#1a1a1a', border: '1px solid #333', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.8rem', color: '#F97316', marginBottom: '2rem' }}>
          Professionell · Persönlich · Festpreis
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
          <span style={{ color: '#F97316' }}>0</span> Risiko.{' '}
          <span style={{ color: '#F97316' }}>0</span> Fehler.{' '}
          <span style={{ color: '#F97316' }}>0</span> Stress.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Ihre Lohnabrechnung. <span style={{ color: '#F97316', fontWeight: 700 }}>100%</span> in sicheren Händen.
          Rechtssicher, pünktlich und zum transparenten Festpreis.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#kontakt" style={{ background: '#F97316', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
            Kostenloses Angebot
          </a>
          <a href="#leistungen" style={{ background: 'transparent', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', border: '1px solid #444' }}>
            Leistungen ansehen
          </a>
        </div>
      </section>

      {/* Kennzahlen */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1px', background: '#222', margin: '0 2rem', borderRadius: '12px', overflow: 'hidden' }}>
        {[
          { zahl: '500+', label: 'Zufriedene Kunden' },
          { zahl: 'ab 8,90€', label: 'Pro Abrechnung' },
          { zahl: '100%', label: 'Digital & papierlos' },
          { zahl: '48h', label: 'Reaktionszeit' },
        ].map((item) => (
          <div key={item.label} style={{ background: '#111', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F97316' }}>{item.zahl}</div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>{item.label}</div>
          </div>
        ))}
      </section>

      {/* Leistungen */}
      <section id="leistungen" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungen</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Was wir für Sie übernehmen</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { titel: 'Lohnabrechnung', text: 'Monatlich, rechtssicher, pünktlich. Inkl. aller gesetzlichen Meldungen.' },
            { titel: 'Meldewesen', text: 'SV-Meldungen, Finanzamt, Berufsgenossenschaft – wir kümmern uns.' },
            { titel: 'Controlling', text: 'Individuelle Auswertungen und Mehrjahresvergleiche.' },
            { titel: 'Digitale Personalakte', text: 'Alle Dokumente sicher digital – kein Papierchaos.' },
            { titel: 'Beratung', text: 'Fester Ansprechpartner für alle Fragen – kein Callcenter.' },
            { titel: 'Versand-Optionen', text: 'Digitalportal für Mitarbeitende oder klassischer Postversand.' },
          ].map((item) => (
            <div key={item.titel} style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>{item.titel}</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Kontakt</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Jetzt Angebot anfragen</h2>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Kostenloses Erstgespräch – unverbindlich und unkompliziert.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
          <input type="text" placeholder="Ihr Name *" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '0.95rem' }} />
          <input type="email" placeholder="Ihre E-Mail *" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '0.95rem' }} />
          <input type="text" placeholder="Unternehmen & Mitarbeiterzahl" style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '0.95rem' }} />
          <textarea placeholder="Ihre Nachricht" rows={4} style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '0.95rem', resize: 'none' }} />
          <button style={{ background: '#F97316', color: '#fff', padding: '1rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
            Nachricht senden
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #222', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>L<span style={{ color: '#F97316' }}>0</span>hn.de</div>
        <p style={{ fontSize: '0.8rem', color: '#555' }}>© 2025 L0hn.de · Alle Rechte vorbehalten</p>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#555' }}>
          <a href="#" style={{ color: '#555', textDecoration: 'none' }}>Impressum</a>
          <a href="#" style={{ color: '#555', textDecoration: 'none' }}>Datenschutz</a>
        </div>
      </footer>

    </main>
  );
}