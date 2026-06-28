export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid #e5e5e5', padding: '1.5rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>L<span style={{ color: '#F97316' }}>0</span>hn.de</div>
      <p style={{ fontSize: '0.8rem', color: '#888' }}>© 2026 L0hn.de · Alle Rechte vorbehalten</p>
      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem' }}>
        <a href="/impressum" style={{ color: '#888', textDecoration: 'none' }}>Impressum</a>
        <a href="/datenschutz" style={{ color: '#888', textDecoration: 'none' }}>Datenschutz</a>
        <a href="/agb" style={{ color: '#888', textDecoration: 'none' }}>AGB</a>
      </div>
    </footer>
  );
}


