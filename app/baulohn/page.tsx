import Navigation from '../components/Navigation';
import PreisVergleich from '../components/PreisVergleich';
import KontaktSection from '../components/KontaktSection';
import Footer from '../components/Footer';

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
      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Leistung</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Baulohn – <span style={{ color: '#F97316' }}>spezialisiert & rechtssicher</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
          Lohnabrechnung für das Baugewerbe ist komplex – Sozialkassen, SOKA-Meldungen, Mindestlohn. Wir kennen die Besonderheiten und rechnen korrekt ab.
        </p>
        <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Jetzt Angebot anfragen</a>
      </section>
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Übersicht</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Was ist Baulohn?</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          Der Baulohn unterscheidet sich wesentlich von normaler Lohnabrechnung. Zusätzlich zu den üblichen Meldungen kommen SOKA-Beiträge, Sozialkassenmeldungen, Mindestlohnprüfung nach BRTV sowie spezielle Regelungen für Urlaubs- und Lohnausgleichskassen. Fehler hier sind teuer – wir kennen die Besonderheiten des Baugewerbes und rechnen rechtssicher ab.
        </p>
      </section>
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsumfang</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was ist enthalten</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { titel: 'SOKA-Meldungen', text: 'Alle Sozialkassenmeldungen für das Baugewerbe – fristgerecht und korrekt.' },
              { titel: 'Mindestlohnprüfung', text: 'Automatische Prüfung des Baumindestlohns nach BRTV – kein Verstoß.' },
              { titel: 'Urlaubskasse', text: 'Korrekte Meldungen an die ULAK – Urlaubsansprüche rechtssicher verwaltet.' },
              { titel: 'Lohnarten Bau', text: 'Alle bauspezifischen Lohnarten – Auslösung, Fahrkosten, Schlechtwetter.' },
              { titel: 'SV & Steuer', text: 'Alle Sozialversicherungs- und Steuermeldungen inklusive.' },
              { titel: 'Berufsgenossenschaft', text: 'BG Bau Meldungen und Beitragsnachweise korrekt erledigt.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#f5f5f5', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Für wen</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Für alle Baugewerke</h2>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Bauunternehmen', text: 'Hochbau, Tiefbau, Rohbau – wir kennen alle Besonderheiten.' },
            { titel: 'Handwerksbetriebe', text: 'Elektriker, Sanitär, Heizung, Maler – alle Gewerke abgedeckt.' },
            { titel: 'Zimmerei & Dachdeckerei', text: 'Spezielle Tarifverträge und Sozialkassen korrekt abgerechnet.' },
            { titel: 'Baunebengewerbe', text: 'Gerüstbau, Estrich, Fliesen – auch Nebengewerke mit SOKA-Pflicht.' },
          ].map((item) => (
            <div key={item.titel} style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Warum L0hn.de</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Ihre Vorteile</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { titel: 'Bau-Expertise', text: 'Wir kennen SOKA, ULAK und BRTV – kein Einarbeiten nötig.' },
              { titel: 'Festpreis ab 7€', text: 'Pro Mitarbeiter monatlich – auch beim komplexen Baulohn.' },
              { titel: 'Haftpflichtversichert', text: 'Fehler gehen auf unsere Kappe – Sie sind abgesichert.' },
              { titel: 'Immer pünktlich', text: 'Abrechnungen laufen auch bei Urlaub oder Krankheit.' },
              { titel: 'Persönlicher Kontakt', text: 'Fester Ansprechpartner – kein Callcenter.' },
              { titel: 'Digital & papierlos', text: 'Alle Unterlagen sicher digital – kein Papierchaos.' },
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
      <PreisVergleich />
      <KontaktSection />
      <Footer />
    </main>
  );
}
