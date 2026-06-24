import Link from 'next/link';

const leistungen = [
  { kategorie: 'Basis', name: 'Monatliche Lohn-/Gehaltsabrechnung', digital: true, vollservice: true },
  { kategorie: 'Basis', name: 'SV-Meldungen & Beitragsnachweise', digital: true, vollservice: true },
  { kategorie: 'Basis', name: 'Lohnsteueranmeldung (ELSTER)', digital: true, vollservice: true },
  { kategorie: 'Basis', name: 'An- & Abmeldungen der Mitarbeiter', digital: true, vollservice: true },
  { kategorie: 'Basis', name: 'Online-Portal für Mitarbeiter', digital: true, vollservice: true },
  { kategorie: 'Basis', name: 'Fester Ansprechpartner', digital: true, vollservice: true },
  { kategorie: 'Basis', name: 'DSGVO-konform', digital: true, vollservice: true },
  { kategorie: 'Bescheinigungen', name: 'Arbeitsbescheinigungen', digital: '15€/Stück', vollservice: true },
  { kategorie: 'Bescheinigungen', name: 'Einkommensbescheinigungen', digital: '15€/Stück', vollservice: true },
  { kategorie: 'Bescheinigungen', name: 'Wohngeldantrag', digital: '15€/Stück', vollservice: true },
  { kategorie: 'Bescheinigungen', name: 'Entgeltbescheinigungen (Krankheit/Mutterschutz)', digital: '15€/Stück', vollservice: true },
  { kategorie: 'Jahresende', name: 'Jahresendarbeiten', digital: 'auf Anfrage', vollservice: true },
  { kategorie: 'Jahresende', name: 'Lohnsteuerbescheinigungen', digital: 'auf Anfrage', vollservice: true },
  { kategorie: 'Jahresende', name: 'Berufsgenossenschaftsliste', digital: 'auf Anfrage', vollservice: true },
  { kategorie: 'Sonstiges', name: 'Behördenkorrespondenz', digital: '90€/Std.', vollservice: true },
  { kategorie: 'Sonstiges', name: 'Korrekturen nach Abrechnungslauf', digital: '8,49€/Mitarbeiter', vollservice: true },
  { kategorie: 'Sonstiges', name: 'Elektronischer Zahlungsverkehr & Buchungsliste', digital: '10€/Monat', vollservice: true },
  { kategorie: 'Sonstiges', name: 'Betriebsprüfung (euBP)', digital: '99€ pauschal', vollservice: true },
];

const kategorien = ['Basis', 'Bescheinigungen', 'Jahresende', 'Sonstiges'];

export default function PreisVergleich() {
  return (
    <section style={{ padding: '3.5rem 1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsvergleich</div>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>Was ist im Paket enthalten?</h2>
      <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>Im Vollservice-Paket sind alle Leistungen inklusive – keine Überraschungen.</p>

      <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid #e5e5e5', overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 140px', background: '#1a1a1a', padding: '1rem 1.5rem', gap: '1rem' }}>
          <div style={{ color: '#888', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Leistung</div>
          <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, textAlign: 'center' }}>Digital<br /><span style={{ color: '#F97316', fontSize: '1.1rem' }}>ab 7€</span></div>
          <div style={{ color: '#F97316', fontSize: '0.85rem', fontWeight: 700, textAlign: 'center' }}>Vollservice<br /><span style={{ color: '#fff', fontSize: '1.1rem' }}>17€</span></div>
        </div>

        {/* Zeilen */}
        {kategorien.map((kat) => (
          <div key={kat}>
            {/* Kategorie-Trenner */}
            <div style={{ background: '#f5f5f5', padding: '0.5rem 1.5rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', borderTop: '0.5px solid #e5e5e5' }}>
              {kat}
            </div>
            {leistungen.filter(l => l.kategorie === kat).map((l, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 140px 140px', padding: '0.85rem 1.5rem', gap: '1rem', borderTop: '0.5px solid #f0f0f0', alignItems: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#444' }}>{l.name}</div>
                <div style={{ textAlign: 'center' }}>
                  {l.digital === true
                    ? <span style={{ color: '#F97316', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                    : <span style={{ color: '#aaa', fontSize: '0.8rem' }}>{l.digital as string}</span>
                  }
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: '#F97316', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Footer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 140px', padding: '1.25rem 1.5rem', gap: '1rem', background: '#f5f5f5', borderTop: '0.5px solid #e5e5e5' }}>
          <div style={{ fontSize: '0.8rem', color: '#888' }}>Alle Preise zzgl. MwSt. · pro Mitarbeiter · monatlich</div>
          <div style={{ textAlign: 'center' }}>
            <Link href="#kontakt" style={{ background: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'inline-block' }}>Anfragen</Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'inline-block' }}>Anfragen</Link>
          </div>
        </div>

      </div>

      
    </section>
  );
}
