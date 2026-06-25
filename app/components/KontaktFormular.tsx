'use client';

import { useState } from 'react';

const inputStyle = {
  padding: '0.85rem 1rem',
  borderRadius: '8px',
  border: '0.5px solid #ddd',
  background: '#fff',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  width: '100%',
  boxSizing: 'border-box' as const,
};

const selectStyle = {
  ...inputStyle,
  appearance: 'auto' as const,
  color: '#555',
};

export default function KontaktFormular() {
  const [form, setForm] = useState({
    anrede: '',
    vorname: '',
    nachname: '',
    firma: '',
    email: '',
    telefon: '',
    mitarbeiter: '',
    lohnart: '',
    nachricht: '',
    datenschutz: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fehler, setFehler] = useState<string[]>([]);

  const validate = () => {
    const pflicht = ['anrede', 'vorname', 'nachname', 'firma', 'email', 'telefon', 'mitarbeiter', 'lohnart'];
    const leer = pflicht.filter(f => !form[f as keyof typeof form]);
    if (!form.datenschutz) leer.push('datenschutz');
    return leer;
  };

  const handleSubmit = async () => {
    const f = validate();
    if (f.length > 0) { setFehler(f); return; }
    setFehler([]);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  const err = (field: string) => fehler.includes(field);

  const borderColor = (field: string) => err(field) ? '#e53e3e' : '#ddd';

  if (status === 'success') return (
    <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '0.5px solid #e5e5e5' }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
      <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Nachricht gesendet!</h3>
      <p style={{ color: '#666' }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
    </div>
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>

      <select
        value={form.anrede}
        onChange={e => setForm({ ...form, anrede: e.target.value })}
        style={{ ...selectStyle, borderColor: borderColor('anrede') }}
      >
        <option value="">Anrede *</option>
        <option value="Herr">Herr</option>
        <option value="Frau">Frau</option>
        <option value="Divers">Divers</option>
      </select>

      <input
        placeholder="Firma *"
        value={form.firma}
        onChange={e => setForm({ ...form, firma: e.target.value })}
        style={{ ...inputStyle, borderColor: borderColor('firma') }}
      />

      <input
        placeholder="Vorname *"
        value={form.vorname}
        onChange={e => setForm({ ...form, vorname: e.target.value })}
        style={{ ...inputStyle, borderColor: borderColor('vorname') }}
      />

      <input
        placeholder="Nachname *"
        value={form.nachname}
        onChange={e => setForm({ ...form, nachname: e.target.value })}
        style={{ ...inputStyle, borderColor: borderColor('nachname') }}
      />

      <input
        placeholder="E-Mail *"
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        style={{ ...inputStyle, borderColor: borderColor('email') }}
      />

      <input
        placeholder="Telefon *"
        value={form.telefon}
        onChange={e => setForm({ ...form, telefon: e.target.value })}
        style={{ ...inputStyle, borderColor: borderColor('telefon') }}
      />

      <select
        value={form.mitarbeiter}
        onChange={e => setForm({ ...form, mitarbeiter: e.target.value })}
        style={{ ...selectStyle, borderColor: borderColor('mitarbeiter') }}
      >
        <option value="">Anzahl Mitarbeiter *</option>
        <option value="1–5">1–5</option>
        <option value="6–10">6–10</option>
        <option value="11–25">11–25</option>
        <option value="26–50">26–50</option>
        <option value="51–100">51–100</option>
        <option value="101–500">101–500</option>
        <option value="500+">500+</option>
      </select>

      <select
        value={form.lohnart}
        onChange={e => setForm({ ...form, lohnart: e.target.value })}
        style={{ ...selectStyle, borderColor: borderColor('lohnart') }}
      >
        <option value="">Lohnart *</option>
        <option value="Gehalt (Festgehalt)">Gehalt (Festgehalt)</option>
        <option value="Stundenlohn">Stundenlohn</option>
        <option value="Baulohn">Baulohn</option>
        <option value="Zeitarbeit">Zeitarbeit</option>
      </select>

      <textarea
        placeholder="Ihre Nachricht (optional)"
        rows={4}
        value={form.nachricht}
        onChange={e => setForm({ ...form, nachricht: e.target.value })}
        style={{ gridColumn: '1/-1', ...inputStyle, resize: 'none' }}
      />

      <label style={{
        gridColumn: '1/-1',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.6rem',
        fontSize: '0.85rem',
        color: err('datenschutz') ? '#e53e3e' : '#555',
        cursor: 'pointer',
      }}>
        <input
          type="checkbox"
          checked={form.datenschutz}
          onChange={e => setForm({ ...form, datenschutz: e.target.checked })}
          style={{ marginTop: '2px', accentColor: '#F97316', flexShrink: 0 }}
        />
        Ich stimme der <a href="/datenschutz" style={{ color: '#F97316', margin: '0 3px' }}>Datenschutzerklärung</a> zu. *
      </label>

      {fehler.length > 0 && (
        <p style={{ gridColumn: '1/-1', color: '#e53e3e', fontSize: '0.85rem', margin: 0 }}>
          Bitte füllen Sie alle Pflichtfelder aus.
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        style={{
          gridColumn: '1/-1',
          background: '#1a1a1a',
          color: '#fff',
          padding: '1rem',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: 'pointer',
          fontFamily: 'inherit',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Angebot anfragen'}
      </button>

      {status === 'error' && (
        <p style={{ gridColumn: '1/-1', color: '#e53e3e', fontSize: '0.9rem' }}>
          Fehler beim Senden – bitte versuche es erneut.
        </p>
      )}
    </div>
  );
}