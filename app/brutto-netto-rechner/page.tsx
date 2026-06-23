'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BruttoNettoRechner() {
  const [brutto, setBrutto] = useState('');
  const [steuerklasse, setSteuerklasse] = useState('1');
  const [kinder, setKinder] = useState('0');
  const [ergebnis, setErgebnis] = useState<null | {
    netto: number; lohnsteuer: number; soli: number; kvAn: number; rvAn: number; avAn: number; pvAn: number;
  }>(null);

  const berechnen = () => {
    const b = parseFloat(brutto);
    if (!b || b <= 0) return;

    // Vereinfachte Berechnung (Richtwerte 2025)
    const kv = b * 0.073;   // KV Arbeitnehmer 7,3%
    const rv = b * 0.093;   // RV Arbeitnehmer 9,3%
    const av = b * 0.013;   // AV Arbeitnehmer 1,3%
    const pv = b * 0.018;   // PV Arbeitnehmer 1,8% (ohne Kinder)
    const sv = kv + rv + av + pv;

    const zvE = (b - sv) * 12;
    let lstMonat = 0;

    // Grobe Lohnsteuer-Näherung nach Steuerklasse
    const freibetrag: Record<string, number> = { '1': 11604, '2': 11604, '3': 23208, '4': 11604, '5': 0, '6': 0 };
    const fb = freibetrag[steuerklasse] || 11604;
    const zvEJahr = Math.max(0, zvE - fb);

    if (zvEJahr <= 0) lstMonat = 0;
    else if (zvEJahr <= 17005) lstMonat = (zvEJahr * 0.14) / 12;
    else if (zvEJahr <= 66760) lstMonat = (zvEJahr * 0.26) / 12;
    else if (zvEJahr <= 277825) lstMonat = (zvEJahr * 0.42 - 9972) / 12;
    else lstMonat = (zvEJahr * 0.45 - 18307) / 12;

    const soli = lstMonat > 18.33 ? lstMonat * 0.055 : 0;
    const netto = b - sv - lstMonat - soli;

    setErgebnis({
      netto: Math.round(netto * 100) / 100,
      lohnsteuer: Math.round(lstMonat * 100) / 100,
      soli: Math.round(soli * 100) / 100,
      kvAn: Math.round(kv * 100) / 100,
      rvAn: Math.round(rv * 100) / 100,
      avAn: Math.round(av * 100) / 100,
      pvAn: Math.round(pv * 100) / 100,
    });
  };

  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input, select { outline: none; }
        input:focus, select:focus { border-color: #F97316 !important; }
      `}</style>

      <Navigation />

      <section style={{ padding: '5rem 1.75rem 3rem', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#F97316', marginBottom: '2rem', fontWeight: 700 }}>Tool</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#1a1a1a' }}>
          Brutto-Netto-<span style={{ color: '#F97316' }}>Rechner 2025</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
          Schnell berechnen was von Ihrem Bruttogehalt übrig bleibt. Alle Angaben sind Richtwerte.
        </p>
      </section>

      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.75rem 4rem' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '0.5px solid #e5e5e5', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Ihre Angaben</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#555', display: 'block', marginBottom: '0.4rem' }}>Bruttogehalt (monatlich)</label>
              <input
                type="number"
                placeholder="z.B. 3500"
                value={brutto}
                onChange={e => setBrutto(e.target.value)}
                style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', fontSize: '1rem', fontFamily: 'inherit' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#555', display: 'block', marginBottom: '0.4rem' }}>Steuerklasse</label>
              <select value={steuerklasse} onChange={e => setSteuerklasse(e.target.value)} style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', fontSize: '1rem', fontFamily: 'inherit', background: '#fff' }}>
                <option value="1">Klasse 1 – Ledig, geschieden</option>
                <option value="2">Klasse 2 – Alleinerziehend</option>
                <option value="3">Klasse 3 – Verheiratet (höheres Einkommen)</option>
                <option value="4">Klasse 4 – Verheiratet (gleiches Einkommen)</option>
                <option value="5">Klasse 5 – Verheiratet (niedrigeres Einkommen)</option>
                <option value="6">Klasse 6 – Zweitjob</option>
              </select>
            </div>
            <button onClick={berechnen} style={{ background: '#1a1a1a', color: '#fff', padding: '1rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', marginTop: '0.5rem' }}>
              Jetzt berechnen
            </button>
          </div>
        </div>

        {ergebnis && (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '0.5px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Ihr Ergebnis</h2>
            <div style={{ background: '#F97316', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>Nettolohn (ca.)</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#fff' }}>{ergebnis.netto.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Bruttogehalt', wert: parseFloat(brutto), bold: true },
                { label: 'Lohnsteuer', wert: -ergebnis.lohnsteuer },
                { label: 'Solidaritätszuschlag', wert: -ergebnis.soli },
                { label: 'Krankenversicherung (AN)', wert: -ergebnis.kvAn },
                { label: 'Rentenversicherung (AN)', wert: -ergebnis.rvAn },
                { label: 'Arbeitslosenversicherung (AN)', wert: -ergebnis.avAn },
                { label: 'Pflegeversicherung (AN)', wert: -ergebnis.pvAn },
              ].map((zeile, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '0.5px solid #f0f0f0', fontWeight: zeile.bold ? 700 : 400 }}>
                  <span style={{ color: '#555', fontSize: '0.9rem' }}>{zeile.label}</span>
                  <span style={{ color: zeile.wert < 0 ? '#e55' : '#1a1a1a', fontSize: '0.9rem', fontWeight: 600 }}>
                    {zeile.wert < 0 ? '– ' : ''}{Math.abs(zeile.wert).toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '1rem', lineHeight: 1.5 }}>
              * Alle Angaben sind unverbindliche Richtwerte ohne Gewähr. Für eine exakte Berechnung empfehlen wir ein persönliches Gespräch.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
