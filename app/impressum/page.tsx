import Navigation from '../components/Navigation';

export default function Impressum() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <Navigation />

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.75rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', color: '#1a1a1a' }}>Impressum</h1>
<p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
  <strong>L0hn.de</strong> ist eine Marke der <strong>Hevelio Personal GmbH</strong>.
</p>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '0.5px solid #e5e5e5', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Angaben gemäß § 5 TMG</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>
              <strong>Hevelio Personal GmbH</strong><br />
              Jahnplatz 4<br />
              82166 Gräfelfing
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Besucheradresse</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>
              Gleichmannstraße 9<br />
              81241 München
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Kontakt</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>
              Telefon: 089 – 21 52 54 56 0<br />
              E-Mail: <a href="mailto:info@hevelio-personal.de" style={{ color: '#F97316', textDecoration: 'none' }}>info@hevelio-personal.de</a>
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Vertretungsberechtigter Geschäftsführer</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>Andreas Thierauf</p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Handelsregister</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>
              Amtsgericht München<br />
              HRB 279343
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Umsatzsteuer-Identifikationsnummer</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>DE 355 993 064</p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</div>
            <p style={{ lineHeight: 1.8, color: '#444' }}>
              Andreas Thierauf<br />
              Jahnplatz 4, 82166 Gräfelfing
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Haftungsausschluss</div>
            <p style={{ lineHeight: 1.8, color: '#555', fontSize: '0.9rem' }}>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Urheberrecht</div>
            <p style={{ lineHeight: 1.8, color: '#555', fontSize: '0.9rem' }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </section>

      <footer style={{ borderTop: '0.5px solid #e5e5e5', padding: '1.5rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>L<span style={{ color: '#F97316' }}>0</span>hn.de</div>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>© 2025 L0hn.de · Alle Rechte vorbehalten</p>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem' }}>
          <a href="/impressum" style={{ color: '#888', textDecoration: 'none' }}>Impressum</a>
          <a href="/datenschutz" style={{ color: '#888', textDecoration: 'none' }}>Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
