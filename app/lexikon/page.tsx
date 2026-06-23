import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const begriffe = [
  { begriff: 'Bruttolohn', erklaerung: 'Das Gehalt vor Abzug von Steuern und Sozialversicherungsbeiträgen. Der Bruttolohn ist die Basis für alle weiteren Berechnungen.' },
  { begriff: 'Nettolohn', erklaerung: 'Das tatsächlich ausgezahlte Gehalt nach Abzug aller Steuern und Sozialversicherungsbeiträge.' },
  { begriff: 'Lohnsteuer', erklaerung: 'Eine Vorauszahlung auf die Einkommensteuer, die direkt vom Arbeitgeber ans Finanzamt abgeführt wird.' },
  { begriff: 'Sozialversicherung', erklaerung: 'Umfasst Kranken-, Renten-, Pflege- und Arbeitslosenversicherung. Die Beiträge werden je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen.' },
  { begriff: 'Steuerklasse', erklaerung: 'Bestimmt die Höhe der Lohnsteuer. Es gibt 6 Steuerklassen, die je nach Familienstand und Einkommenssituation zugeteilt werden.' },
  { begriff: 'SV-Meldung', erklaerung: 'Meldung an die Sozialversicherungsträger bei Beginn, Änderung oder Ende eines Beschäftigungsverhältnisses.' },
  { begriff: 'Minijob', erklaerung: 'Geringfügige Beschäftigung mit einem monatlichen Verdienst bis 556 € (2025). Besondere Regelungen für Steuern und Sozialversicherung gelten.' },
  { begriff: 'Kurzarbeitergeld', erklaerung: 'Staatliche Leistung, die Arbeitnehmer bei vorübergehendem Arbeitsausfall unterstützt. Der Arbeitgeber beantragt es bei der Agentur für Arbeit.' },
  { begriff: 'Lohnfortzahlung', erklaerung: 'Im Krankheitsfall haben Arbeitnehmer Anspruch auf 6 Wochen Lohnfortzahlung durch den Arbeitgeber.' },
  { begriff: 'Urlaubsgeld', erklaerung: 'Zusätzliche Zahlung zum Urlaubsentgelt, die im Arbeits- oder Tarifvertrag geregelt ist. Nicht gesetzlich vorgeschrieben.' },
  { begriff: 'Weihnachtsgeld', erklaerung: 'Freiwillige Sonderzahlung des Arbeitgebers. Kann vertraglich vereinbart werden und ist dann verpflichtend.' },
  { begriff: 'Arbeitgeberzuschuss', erklaerung: 'Freiwillige oder tarifliche Zuzahlungen des Arbeitgebers, z.B. zur betrieblichen Altersvorsorge oder zu Fahrtkosten.' },
  { begriff: 'DEÜV', erklaerung: 'Datenerfassungs- und Übermittlungsverordnung – regelt die elektronische Übermittlung von Meldungen an die Sozialversicherung.' },
  { begriff: 'TVöD', erklaerung: 'Tarifvertrag für den öffentlichen Dienst. Gilt für Beschäftigte bei Bund und Kommunen und regelt Gehalt, Urlaub und Arbeitszeit.' },
  { begriff: 'Pfändungsfreigrenze', erklaerung: 'Der Teil des Einkommens, der bei einer Lohnpfändung nicht gepfändet werden darf, um den Lebensunterhalt zu sichern.' },
];

export default function Lexikon() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <Navigation />

      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Lexikon</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Lohnabrechnung <span style={{ color: '#F97316' }}>von A bis Z</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
          Die wichtigsten Begriffe rund um Lohn und Gehalt – einfach erklärt.
        </p>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.75rem 4rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {begriffe.map((b, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '0.5px solid #e5e5e5', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '200px', fontWeight: 700, color: '#F97316', fontSize: '0.95rem' }}>{b.begriff}</div>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>{b.erklaerung}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
