import KontaktFormular from './KontaktFormular';

export default function KontaktSection() {
  return (
    <section id="kontakt" style={{ padding: '3.5rem 1.75rem', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Kontakt</div>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>Jetzt Angebot anfragen</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Kostenloses Erstgespräch – unverbindlich und unkompliziert.</p>
      <KontaktFormular />
    </section>
  );
}