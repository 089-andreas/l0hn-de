import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const faqs = [
  {
    frage: 'Was kostet die Lohnabrechnung bei L0hn.de?',
    antwort: 'Unsere Preise starten ab 7€ pro Abrechnung im Digital-Paket. Der genaue Preis hängt von der Anzahl Ihrer Mitarbeitenden und dem gewünschten Leistungsumfang ab. Wir erstellen Ihnen gerne ein individuelles Angebot.'
  },
  {
    frage: 'Muss ich vor Ort erscheinen?',
    antwort: 'Nein – wir arbeiten vollständig digital. Alle Unterlagen, Abrechnungen und Kommunikation laufen über unser sicheres Onlineportal. Kein Vor-Ort-Termin notwendig.'
  },
  {
    frage: 'Wie läuft die Zusammenarbeit ab?',
    antwort: 'Nach dem Erstgespräch erhalten Sie Zugang zu unserem Digitalportal. Sie übermitteln uns monatlich Ihre Daten (Stunden, Änderungen etc.) – wir erstellen die Abrechnungen, melden sie bei Behörden an und stellen alles digital bereit.'
  },
  {
    frage: 'Wie schnell können wir starten?',
    antwort: 'In der Regel innerhalb von 1–2 Wochen. Nach dem Erstgespräch und der Datenübergabe können wir bereits im nächsten Abrechnungsmonat starten.'
  },
  {
    frage: 'Welche Branchen betreuen Sie?',
    antwort: 'Wir betreuen Unternehmen aus allen Branchen – von Handwerk und Gastronomie über IT-Startups bis hin zu Pflegeeinrichtungen und dem öffentlichen Dienst. Wir kennen die jeweiligen Tarifverträge und Besonderheiten.'
  },
  {
    frage: 'Sind meine Daten sicher?',
    antwort: 'Ja – wir arbeiten vollständig DSGVO-konform. Alle Daten werden verschlüsselt übertragen und in Deutschland gespeichert. Als Auftragsverarbeiter nach Art. 28 DSGVO schließen wir mit Ihnen einen entsprechenden Vertrag.'
  },
  {
    frage: 'Was ist der Unterschied zwischen Digital und Vollservice?',
    antwort: 'Im Digital-Paket übernehmen wir die monatliche Abrechnung, SV-Meldungen und Lohnsteueranmeldung. Im Vollservice kommen zusätzlich alle Bescheinigungen, Jahresendarbeiten, Behördenkorrespondenz und Controlling-Auswertungen dazu.'
  },
  {
    frage: 'Kann ich jederzeit kündigen?',
    antwort: 'Ja – unsere Verträge sind monatlich kündbar. Wir setzen auf Qualität und Verlässlichkeit, nicht auf Vertragsbindung.'
  },
  {
    frage: 'Was passiert bei Mitarbeiterwechsel oder Neueinstellungen?',
    antwort: 'Wir übernehmen alle An- und Abmeldungen bei Krankenkassen und Sozialversicherungsträgern – schnell und fristgerecht. Sie informieren uns einfach über die Änderung.'
  },
  {
    frage: 'Haben Sie einen festen Ansprechpartner für mich?',
    antwort: 'Ja – bei uns gibt es kein Callcenter. Sie erhalten einen festen Ansprechpartner, der Ihr Unternehmen kennt und direkt erreichbar ist.'
  },
];

export default function FAQ() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navigation />

      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>FAQ</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Häufig gestellte <span style={{ color: '#F97316' }}>Fragen</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
          Alles was Sie über unsere Lohnbuchhaltung wissen müssen – klar und verständlich erklärt.
        </p>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.75rem 4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '0.5px solid #e5e5e5' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#1a1a1a' }}>{faq.frage}</h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>{faq.antwort}</p>
          </div>
        ))}
      </section>

      <section style={{ background: '#1a1a1a', padding: '3rem 1.75rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Noch Fragen?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Wir beantworten Ihre Fragen persönlich – unverbindlich und kostenlos.</p>
        <a href="/lohnabrechnung-muenchen#kontakt" style={{ background: '#F97316', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Jetzt Kontakt aufnehmen</a>
      </section>

      <Footer />
    </main>
  );
}
