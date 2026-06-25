import Image from 'next/image';
import Navigation from '../components/Navigation';
import KontaktSection from '../components/KontaktSection';
import Footer from '../components/Footer';

export default function LohnbuchhaltungMuenchen() {
  return (
    <main style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", background: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .grid3 { grid-template-columns: 1fr !important; }
          .grid2 { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 2rem !important; }
          .city-image { height: 220px !important; }
          .ansprechpartner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '480px', position: 'relative', overflow: 'hidden' }}>
          <Image
            src="/images/muenchen-hero.jpg"
            alt="München Frauenkirche Stadtansicht"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.75rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#fff', marginBottom: '1.25rem', fontWeight: 700 }}>📍 Standort München</div>
            <h1 className="hero-title" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.3)', maxWidth: '800px' }}>
              Lohnabrechnung München –{' '}
              <span style={{ color: '#F97316' }}>digital & rechtssicher</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}>
              Ihr Lohnbüro für München und Umgebung. Wir übernehmen Ihre komplette Lohn- und Gehaltsabrechnung – pünktlich, fehlerfrei und zu einem fairen Festpreis.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#kontakt" style={{ background: '#F97316', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', boxShadow: '0 4px 16px rgba(249,115,22,0.4)' }}>Jetzt Angebot anfragen</a>
              <a href="#leistungen" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', border: '1px solid rgba(255,255,255,0.4)' }}>Unsere Leistungen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#e5e5e5', overflow: 'hidden' }}>
        {[
          { zahl: 'ab 7€', label: 'Festpreis pro Abrechnung' },
          { zahl: 'bis 80%', label: 'Kostenersparnis' },
          { zahl: '99,8%', label: 'Fehlerfreie Abrechnungen' },
          { zahl: '100%', label: 'Digital & DSGVO-konform' },
        ].map((item) => (
          <div key={item.label} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F97316' }}>{item.zahl}</div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>{item.label}</div>
          </div>
        ))}
      </section>

      {/* Warum lokal */}
      <section style={{ padding: '3.5rem 1.75rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>München & Umgebung</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>Lohnabrechnung für Münchner Unternehmen</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
          München ist ein starker Wirtschaftsstandort – von internationalen Konzernen bis hin zu lokalen Handwerksbetrieben. Der Arbeitsmarkt ist dynamisch, die Lohnstrukturen oft komplex. Ob Tarifverträge im Baugewerbe, TVöD für den öffentlichen Dienst oder flexible Vergütungsmodelle für Tech-Startups – wir kennen die Besonderheiten des Münchner Marktes und rechnen rechtssicher ab. Vollständig digital, ohne Vor-Ort-Termine und zu einem festen monatlichen Preis.
        </p>
      </section>

      {/* Ansprechpartner München */}
      <section style={{ background: '#fff', padding: '3.5rem 1.75rem', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Ihr Ansprechpartner</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Persönlich für Sie da – in München</h2>
          <div className="ansprechpartner-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Foto */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', position: 'relative', border: '4px solid #F97316', flexShrink: 0 }}>
                <Image
                  src="/images/AndreasPortrait.jpeg"
                  alt="Andreas Thierauf"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a1a' }}>Andreas Thierauf</div>
                <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.25rem' }}>Dipl. Betriebswirt (FH)</div>
                <div style={{ fontSize: '0.85rem', color: '#F97316', fontWeight: 700, marginTop: '0.25rem' }}>Geschäftsführer</div>
              </div>
            </div>
            {/* Text */}
            <div>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Als Ihr persönlicher Ansprechpartner für den Standort München stehe ich Ihnen direkt zur Verfügung – kein Callcenter, keine Warteschleife. Sie erreichen mich per Telefon, E-Mail oder über unser Kontaktformular. Ich begleite Sie von der ersten Anfrage bis zur laufenden Abrechnung.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:08944311820" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>
                  <div style={{ width: '36px', height: '36px', background: '#FFF7ED', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  </div>
                  089 – 44 31 11 82 0
                </a>
                <a href="tel:015151733233" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>
                  <div style={{ width: '36px', height: '36px', background: '#FFF7ED', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  </div>
                  0151 51 73 32 33
                </a>
                <a href="mailto:a.thierauf@hevelio.de" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>
                  <div style={{ width: '36px', height: '36px', background: '#FFF7ED', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  a.thierauf@hevelio.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bürobild */}
      <div className="city-image" style={{ width: '100%', height: '380px', overflow: 'hidden', position: 'relative' }}>
        <Image
          src="/images/buero-1.png"
          alt="Unser Büro in München"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }} />
      </div>

      {/* Leistungen */}
      <section id="leistungen" style={{ background: '#fff', padding: '3.5rem 1.75rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Leistungsumfang</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Was wir für Sie übernehmen</h2>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { titel: 'Monatliche Abrechnung', text: 'Pünktliche Lohn- und Gehaltsabrechnung für alle Mitarbeiter – egal ob Vollzeit, Teilzeit oder Minijob.' },
              { titel: 'SV-Meldungen', text: 'Alle Sozialversicherungsmeldungen an Krankenkassen und Rentenversicherung – fristgerecht erledigt.' },
              { titel: 'Lohnsteueranmeldung', text: 'Monatliche oder quartalsweise Anmeldung beim Finanzamt – korrekt und pünktlich.' },
              { titel: 'An- & Abmeldungen', text: 'Neue Mitarbeiter anmelden, ausscheidende abmelden – wir kümmern uns.' },
              { titel: 'Digitale Personalakte', text: 'Alle Dokumente sicher digital – kein Papierchaos, jederzeit abrufbar.' },
              { titel: 'Persönliche Beratung', text: 'Fester Ansprechpartner für alle Fragen – kein Callcenter, keine Warteschleife.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#f5f5f5', border: '0.5px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.titel}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section style={{ padding: '3.5rem 1.75rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#F97316', marginBottom: '0.5rem' }}>Preise</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Transparent & fair</h2>
          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Digital</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>ab 7€</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Mitarbeiter · monatlich · zzgl. MwSt.</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {['Monatliche Abrechnung', 'SV-Meldungen', 'Lohnsteueranmeldung', 'Digitalportal für Mitarbeiter', 'Fester Ansprechpartner'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                    <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
                {['Bescheinigungen', 'Jahresendarbeiten'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>
                    <span style={{ color: '#aaa', fontWeight: 700 }}>+</span> {f} <span style={{ fontSize: '0.8rem' }}>(gegen Aufpreis)</span>
                  </li>
                ))}
              </ul>
              <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.8rem', color: '#888', marginTop: '1.25rem', lineHeight: 1.5 }}>
                Bescheinigungen & Sonderleistungen werden separat berechnet.
              </div>
              <a href="/preise" style={{ display: 'block', marginTop: '1rem', background: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Alle Preise ansehen</a>
            </div>
            <div style={{ background: '#fff', border: '2px solid #1a1a1a', borderRadius: '16px', padding: '2rem', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F97316', color: '#fff', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Beliebteste Wahl</div>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Vollservice</div>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>17€</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem' }}>pro Mitarbeiter · monatlich · zzgl. MwSt.</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {['Alles aus Digital', 'Alle Bescheinigungen inklusive', 'Jahresendarbeiten inklusive', 'Behördenkorrespondenz inklusive', 'Controlling & Auswertungen', 'Digitale Personalakte'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                    <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <div style={{ background: '#FFF7ED', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.8rem', color: '#F97316', marginTop: '1.25rem', fontWeight: 700 }}>
                Alle Leistungen inklusive – keine Zusatzkosten.
              </div>
              <a href="/preise" style={{ display: 'block', marginTop: '1rem', background: '#1a1a1a', color: '#fff', padding: '0.85rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Alle Preise ansehen</a>
            </div>
          </div>
        </div>
      </section>

      <KontaktSection />
      <Footer />
    </main>
  );
}
