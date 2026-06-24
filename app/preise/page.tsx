import Navigation from '../components/Navigation';
import PreisVergleich from '../components/PreisVergleich';
import KontaktSection from '../components/KontaktSection';
import Footer from '../components/Footer';

export default function Preise() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .preise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Preise</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Transparent & <span style={{ color: '#F97316' }}>fair</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
          Keine versteckten Kosten. Kein Kleingedrucktes. Sie zahlen pro Mitarbeiter monatlich – kalkulierbar und fair.
        </p>
      </section>

      {/* Pakete */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.75rem 3rem' }}>
        <div className="preise-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

          {/* Digital */}
          <div style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Digital</div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>ab 7€</div>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Mitarbeiter · monatlich · zzgl. MwSt.</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              {[
                'Monatliche Lohn-/Gehaltsabrechnung',
                'Alle SV-Meldungen & Lohnsteueranmeldung',
                'An- & Abmeldungen der Mitarbeiter',
                'Online-Portal für Mitarbeiter',
                'Fester Ansprechpartner',
                'DSGVO-konform',
              ].map(f => (
                <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                  <span style={{ color: '#F97316', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                </li>
              ))}
              {['Bescheinigungen', 'Korrekturen', 'Jahresendarbeiten', 'Behördenkorrespondenz'].map(f => (
                <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>
                  <span style={{ color: '#aaa', fontWeight: 700, flexShrink: 0 }}>+</span> {f} <span style={{ fontSize: '0.8rem' }}>(gegen Aufpreis)</span>
                </li>
              ))}
            </ul>
            <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.8rem', color: '#888', marginTop: '1.25rem', lineHeight: 1.5, border: '0.5px solid #e5e5e5' }}>
              Bescheinigungen, Korrekturen & Sonderleistungen werden separat berechnet.
            </div>
            <a href="#kontakt" style={{ display: 'block', marginTop: '1rem', background: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Jetzt anfragen</a>
          </div>

          {/* Vollservice */}
          <div style={{ background: '#fff', border: '2px solid #1a1a1a', borderRadius: '16px', padding: '2rem', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F97316', color: '#fff', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Beliebteste Wahl</div>
            <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Vollservice</div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>17€</div>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Mitarbeiter · monatlich · zzgl. MwSt.</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              {[
                'Alles aus Digital',
                'Alle Bescheinigungen inklusive',
                'Postversand inklusive',
                'Jahresendarbeiten inklusive',
                'Behördenkorrespondenz inklusive',
                'Controlling & Auswertungen',
                'Digitale Personalakte',
              ].map(f => (
                <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                  <span style={{ color: '#F97316', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <div style={{ background: '#FFF7ED', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.8rem', color: '#F97316', marginTop: '1.25rem', lineHeight: 1.5, fontWeight: 700 }}>
              Alle Leistungen inklusive – keine Zusatzkosten, egal was anfällt.
            </div>
            <a href="#kontakt" style={{ display: 'block', marginTop: '1rem', background: '#1a1a1a', color: '#fff', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Jetzt anfragen</a>
          </div>

        </div>
      </section>

      {/* Vergleichstabelle */}
      <PreisVergleich />

      <KontaktSection />
      <Footer />
    </main>
  );
}

