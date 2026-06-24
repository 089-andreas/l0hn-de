import Navigation from '../components/Navigation';
import PreisVergleich from '../components/PreisVergleich';
import KontaktSection from '../components/KontaktSection';
import Footer from '../components/Footer';

export default function Controlling() {
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
          Controlling & Auswertungen – <span style={{ color: '#F97316' }}>Zahlen, die Sie weiterbringen</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
          Mehr als nur Abrechnung – wir liefern Ihnen die Auswertungen, die Sie für fundierte Entscheidungen brauchen. Personalkosten im Griff, Trends im Blick.
        </p>
        <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Jetzt Angebot anfragen</a>
      </section>
      <section className="section" style={{ padding: '3rem 1.75rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Übersicht</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Was ist Lohn-Controlling?</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          Lohn-Controlling geht über die reine Abrechnung hinaus. Es liefert strukturierte Auswertungen über Personalkosten, Kostenstellenverteilungen, Mehrjahresvergleiche und individuelle Kennzahlen. So behalten Sie den Überblick über Ihren größten Kostenfaktor – das Personal – und können gezielt steuern und planen.
        </p>
      </section>
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsumfang</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was ist enthalten</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { titel: 'Kostenstellenauswertung', text: 'Personalkosten nach Abteilung, Projekt oder Standort aufgeteilt – übersichtlich und klar.' },
              { titel: 'Mehrjahresvergleiche', text: 'Entwicklung der Personalkosten über mehrere Jahre – Trends erkennen, früh reagieren.' },
              { titel: 'Individuelle Berichte', text: 'Maßgeschneiderte Auswertungen nach Ihren Bedürfnissen – kein Standard von der Stange.' },
              { titel: 'Budgetvergleiche', text: 'Soll-Ist-Vergleiche Ihrer Personalkosten – damit Sie immer im Budget bleiben.' },
              { titel: 'Krankenstandsanalyse', text: 'Auswertung von Fehlzeiten und Krankenstand – wichtig für Planung und Prävention.' },
              { titel: 'Export & Integration', text: 'Daten als Excel, PDF oder direkt in Ihr Buchhaltungssystem – flexibel und kompatibel.' },
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
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Für wen ist Controlling sinnvoll?</h2>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Wachsende Unternehmen', text: 'Ab ca. 10 Mitarbeitern lohnen sich strukturierte Auswertungen – für bessere Planung.' },
            { titel: 'Mehrere Standorte', text: 'Personalkosten je Standort im Blick behalten – Controlling macht den Unterschied.' },
            { titel: 'Projektbasierte Betriebe', text: 'Kosten je Projekt oder Auftrag zuordnen – ideal für Dienstleister und Agenturen.' },
            { titel: 'Geschäftsführung & CFO', text: 'Schnelle, verlässliche Kennzahlen für fundierte Entscheidungen auf Führungsebene.' },
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
              { titel: 'Alles aus einer Hand', text: 'Abrechnung und Controlling beim selben Anbieter – keine Datenschnittstellen nötig.' },
              { titel: 'Individuell', text: 'Keine Standardberichte – wir liefern was Sie wirklich brauchen.' },
              { titel: 'Immer aktuell', text: 'Auswertungen direkt nach der Abrechnung – keine Verzögerungen.' },
              { titel: 'Einfach lesbar', text: 'Klare Berichte ohne Fachjargon – verständlich für Geschäftsführung und Buchhaltung.' },
              { titel: 'Flexibel', text: 'Excel, PDF oder direkte Übergabe an Ihre Buchhaltungssoftware.' },
              { titel: 'Persönlicher Kontakt', text: 'Fragen zu Ihren Auswertungen? Ihr Ansprechpartner erklärt alles.' },
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
