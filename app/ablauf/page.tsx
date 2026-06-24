import Navigation from '../components/Navigation';
import KontaktSection from '../components/KontaktSection';
import Footer from '../components/Footer';

const schritte = [
  {
    nummer: '01',
    titel: 'Kostenlose Erstberatung',
    text: 'Sie nehmen unverbindlich Kontakt auf – per Formular, Telefon oder E-Mail. Wir besprechen Ihre Situation, Mitarbeiterzahl, Branche und Wünsche. Das Erstgespräch ist komplett kostenlos und dauert ca. 15–30 Minuten.',
    details: ['Kein Aufwand für Sie', 'Kostenlos & unverbindlich', 'Persönliches Gespräch – kein Callcenter'],
  },
  {
    nummer: '02',
    titel: 'Angebot & Auftragserteilung',
    text: 'Sie erhalten innerhalb von 24 Stunden ein individuelles Angebot. Nach Ihrer Zustimmung schließen wir einen Auftragsverarbeitungsvertrag (AVV) gemäß DSGVO ab – alles digital, keine Papierdokumente.',
    details: ['Angebot innerhalb 24 Stunden', 'Fester Preis – keine Überraschungen', 'Digitale Vertragsunterzeichnung'],
  },
  {
    nummer: '03',
    titel: 'Datenübergabe & Einrichtung',
    text: 'Sie übermitteln uns Ihre Firmendaten und Mitarbeiterdaten über unser sicheres Online-Portal. Wir richten alles ein: Stammdaten, Lohnarten, Krankenkassen, Finanzamt. Bei einem Wechsel von einem anderen Anbieter übernehmen wir die Datenmigration.',
    details: ['Sicheres Online-Portal', 'Wir kümmern uns um die Einrichtung', 'Wechsel von anderem Anbieter problemlos möglich'],
  },
  {
    nummer: '04',
    titel: 'Laufender Betrieb – monatlich',
    text: 'Ab dem ersten Abrechnungsmonat läuft alles automatisch. Sie übermitteln uns monatlich Ihre Bewegungsdaten (Stunden, Änderungen, Neueintritte). Wir erstellen die Abrechnungen, melden alles an Behörden und stellen die Unterlagen digital bereit.',
    details: ['Pünktlich jeden Monat', 'Alle Meldungen automatisch erledigt', 'Unterlagen digital im Portal abrufbar'],
  },
];

const vorteile = [
  { titel: 'Keine Software-Kosten', text: 'Die wegfallenden Anschaffungs- und Wartungskosten für Lohnbuchhaltungssoftware führen zu deutlichen Ersparnissen.' },
  { titel: 'Kostentransparenz', text: 'Sie zahlen pro Mitarbeiter einen festen monatlichen Preis. Damit lassen sich Ihre Kosten optimal kalkulieren.' },
  { titel: 'Persönlich & zuverlässig', text: 'Fragen zu Ihrer laufenden Abrechnung? Wir beraten Sie jederzeit – mit umfassender Erfahrung und Expertise.' },
  { titel: 'Keine Ausfallrisiken', text: 'Bei interner Abrechnung drohen Ausfälle durch Urlaub oder Krankheit. Bei uns läuft die Abrechnung immer pünktlich.' },
  { titel: 'Fokus aufs Kerngeschäft', text: 'Durch Outsourcing konzentrieren Sie sich auf Ihr Kerngeschäft. Wir kümmern uns um alles – inkl. Meldewesen und Gesetzesänderungen.' },
  { titel: 'Zeitersparnis', text: 'Schöpfen Sie durch die Auslagerung zeitliche Ressourcen für Ihre strategischen Aufgaben frei.' },
  { titel: 'Erfahrung & Know-how', text: 'Wir kennen alle Bereiche der Lohn- und Gehaltsabrechnung – selbstverständlich auch jeden Sonderfall.' },
  { titel: 'Sicherheit', text: 'Mit unseren Dienstleistungen sind Sie auf der sicheren Seite – DSGVO-konform, verschlüsselt und haftpflichtversichert.' },
];

const auswahlkriterien = [
  {
    schritt: '1',
    titel: 'Grundbedarf bestimmen',
    text: 'Viele Anbieter kommunizieren einen Preis pro Abrechnung – doch dieser ist oft wenig aussagekräftig. Klären Sie genau, welche Leistungen Sie brauchen: Mitarbeiterzahl, Branche, Meldungen, Bescheinigungen. Nur mit identischen Leistungen können Sie Preise sinnvoll vergleichen.',
  },
  {
    schritt: '2',
    titel: 'Angebote einholen & vergleichen',
    text: 'Erklären Sie Ihren Bedarf und lassen Sie sich beraten. Fordern Sie ein Angebot für Einrichtungskosten und laufende Jahreskosten an. Fragen Sie: Wer ist mein Ansprechpartner? Wer haftet bei Fehlern? Ist der Anbieter versichert?',
  },
  {
    schritt: '3',
    titel: 'Anbieter auswählen',
    text: 'Vergleichen Sie nach Leistungsumfang, Kommunikation, Service-Orientierung, Professionalität, Haftung – und erst dann den Preis. Der günstigste Anbieter ist nicht immer der beste.',
  },
];

export default function Ablauf() {
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
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>So funktioniert es</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          In 4 Schritten zu Ihrer <span style={{ color: '#F97316' }}>Lohnabrechnung</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
          Von der ersten Anfrage bis zur laufenden Abrechnung – einfach, digital und ohne Aufwand für Sie. Die meisten Kunden sind innerhalb einer Woche startklar.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Jetzt starten</a>
          <a href="tel:08921525456" style={{ background: '#fff', color: '#1a1a1a', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', border: '0.5px solid #ddd' }}>📞 089 – 21 52 54 56 0</a>
        </div>
      </section>

      {/* Kennzahlen */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#e5e5e5', margin: '0 1.75rem 3rem', borderRadius: '12px', overflow: 'hidden' }}>
        {[
          { zahl: '< 1 Woche', label: 'Bis zum ersten Start' },
          { zahl: '24h', label: 'Angebot in 24 Stunden' },
          { zahl: '100%', label: 'Digital & papierlos' },
        ].map((item) => (
          <div key={item.label} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F97316' }}>{item.zahl}</div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>{item.label}</div>
          </div>
        ))}
      </section>

      {/* Wie werden Sie unser Kunde */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.75rem 3rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Hintergrund</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Wie werden Sie unser Kunde?</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
          Unsere Kunden haben unterschiedliche Vorgeschichten. Einige haben die Lohnabrechnung bislang selbst erledigt, andere sind Gründer und befassen sich erstmals mit dem Thema. Eine dritte Gruppe beauftragte bereits einen anderen Dienstleister – gelegentlich den eigenen Steuerberater.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
          Doch für Steuerberater gehört Lohnabrechnung nicht zum Kerngeschäft. Hier werden Fehler gemacht – zum Teil mit sehr teuren Folgen: Nachzahlungsforderungen von Finanzämtern und Sozialkassen. Das wissen wir aus Berichten von Kunden, die deshalb zu uns gewechselt sind.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          Aus welchen Gründen auch immer Sie die Lohn- und Gehaltsabrechnung bei uns beauftragen: Ihre Anmeldung als Kunde ist denkbar einfach. Sie gehen in vier einfachen Schritten vor – und unser Team begleitet Sie dabei.
        </p>
      </section>

      {/* 4 Schritte */}
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Der Ablauf</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#1a1a1a' }}>Ihre 4 Schritte zu uns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {schritte.map((schritt, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '64px', height: '64px', background: '#F97316', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.4rem', fontWeight: 700, flexShrink: 0 }}>
                    {schritt.nummer}
                  </div>
                  {i < schritte.length - 1 && (
                    <div style={{ width: '2px', height: '40px', background: '#e5e5e5' }} />
                  )}
                </div>
                <div style={{ background: '#f5f5f5', borderRadius: '16px', padding: '1.75rem', border: '0.5px solid #e5e5e5' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#1a1a1a' }}>{schritt.titel}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>{schritt.text}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {schritt.details.map((d, j) => (
                      <span key={j} style={{ background: '#FFF7ED', color: '#F97316', fontSize: '0.8rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '20px' }}>
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wechsel */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.75rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Wechsel</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Sie wechseln von einem anderen Anbieter?</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
          Viele Unternehmen sind mit ihrem Anbieter unzufrieden, scheuen aber den Wechsel aus Angst vor Unterbrechung der Abrechnung. Dabei ist eine Übergabe denkbar einfach: Sie beauftragen Ihren bisherigen Dienstleister, uns Ihre Unterlagen zu übergeben – dieser Vorgang läuft größtenteils elektronisch.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Ihr bisheriger Anbieter ist zur Übergabe verpflichtet. Nötigenfalls initiieren wir diese in Ihrem Auftrag. Die gesetzliche Kündigungsfrist beträgt ein Vierteljahr – das verschafft uns ausreichend Zeit, den Wechsel in Ruhe vorzubereiten.
        </p>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '0.5px solid #e5e5e5', marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#1a1a1a', fontSize: '0.95rem' }}>Was wir von Ihrem bisherigen Anbieter benötigen:</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              'Firmenstammbogen',
              'Personalstammbögen aller Mitarbeiter',
              'Entgeltabrechnungen des letzten Monats',
              'Lohnkonten und Journale für das laufende Jahr',
              'Letzte BG-Liste (falls vorhanden)',
            ].map((punkt, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
                <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {punkt}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { titel: 'Datenmigration inklusive', text: 'Wir übernehmen Ihre bestehenden Daten – kein Neustart von null.' },
            { titel: 'Keine Unterbrechung', text: 'Nahtloser Übergang – kein Abrechnungsmonat bleibt aus.' },
            { titel: 'Wir begleiten Sie', text: 'Ihr Ansprechpartner führt Sie durch den gesamten Wechselprozess.' },
          ].map((item) => (
            <div key={item.titel} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '0.5px solid #e5e5e5' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vorteile */}
      <section style={{ background: '#fff', padding: '3rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Warum L0hn.de</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was Sie bei uns erwarten dürfen</h2>
          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {vorteile.map((item) => (
              <div key={item.titel} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#f5f5f5', borderRadius: '12px', padding: '1.25rem', border: '0.5px solid #e5e5e5' }}>
                <div style={{ width: '32px', height: '32px', background: '#F97316', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontWeight: 700 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: '#1a1a1a', fontSize: '0.95rem' }}>{item.titel}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auswahlkriterien */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.75rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Tipps</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#1a1a1a' }}>So wählen Sie den richtigen Anbieter</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '2rem' }}>
          Nicht jeder Anbieter ist gleich. Bevor Sie sich entscheiden, sollten Sie diese drei Schritte durchgehen:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {auswahlkriterien.map((item) => (
            <div key={item.schritt} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '0.5px solid #e5e5e5', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', background: '#1a1a1a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, flexShrink: 0 }}>{item.schritt}</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</div>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: '#1a1a1a', padding: '3rem 1.75rem', textAlign: 'center', margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Ihre Lohnabrechnung in sicheren Händen</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Überlassen Sie Ihre Lohn- und Gehaltsabrechnung erfahrenen Spezialisten. Wir sorgen für korrekte Abrechnungen, termingerechte Meldungen und maximale Entlastung.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#kontakt" style={{ background: '#F97316', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Kostenloses Angebot anfragen</a>
          <a href="tel:08921525456" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, border: '1px solid rgba(255,255,255,0.2)' }}>📞 089 – 21 52 54 56 0</a>
        </div>
      </section>

      <KontaktSection />
      <Footer />
    </main>
  );
}
