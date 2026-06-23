'use client';

import { useState } from 'react';

export default function KontaktFormular() {
  const [form, setForm] = useState({ name: '', email: '', unternehmen: '', mitarbeiter: '', nachricht: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
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

  if (status === 'success') return (
    <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '0.5px solid #e5e5e5' }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
      <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Nachricht gesendet!</h3>
      <p style={{ color: '#666' }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
    </div>
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
      <input placeholder="Ihr Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', fontSize: '0.95rem', fontFamily: 'inherit' }} />
      <input placeholder="Ihre E-Mail *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', fontSize: '0.95rem', fontFamily: 'inherit' }} />
      <input placeholder="Unternehmen" value={form.unternehmen} onChange={e => setForm({...form, unternehmen: e.target.value})} style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', fontSize: '0.95rem', fontFamily: 'inherit' }} />
      <input placeholder="Mitarbeiterzahl" value={form.mitarbeiter} onChange={e => setForm({...form, mitarbeiter: e.target.value})} style={{ padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', fontSize: '0.95rem', fontFamily: 'inherit' }} />
      <textarea placeholder="Ihre Nachricht" rows={4} value={form.nachricht} onChange={e => setForm({...form, nachricht: e.target.value})} style={{ gridColumn: '1/-1', padding: '0.85rem 1rem', borderRadius: '8px', border: '0.5px solid #ddd', background: '#fff', fontSize: '0.95rem', resize: 'none', fontFamily: 'inherit' }} />
      <button onClick={handleSubmit} disabled={status === 'loading'} style={{ gridColumn: '1/-1', background: '#1a1a1a', color: '#fff', padding: '1rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
      {status === 'error' && <p style={{ gridColumn: '1/-1', color: 'red', fontSize: '0.9rem' }}>Fehler beim Senden – bitte versuche es erneut.</p>}
    </div>
  );
}