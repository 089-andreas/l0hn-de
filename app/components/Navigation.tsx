'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdowns = {
    leistungen: [
      { label: 'Lohnabrechnung', href: '/lohnabrechnung' },
      { label: 'Gehaltsabrechnung', href: '/gehaltsabrechnung' },
      { label: 'Baulohn', href: '/baulohn' },
      { label: 'Lohnbuchhaltung outsourcen', href: '/lohnbuchhaltung-outsourcen' },
      { label: 'Controlling', href: '/controlling' },
      { label: 'Digitale Personalakte', href: '/personalakte' },
    ],
    info: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog' },
      { label: 'Brutto-Netto-Rechner', href: '/brutto-netto-rechner' },
      { label: 'Lexikon', href: '/lexikon' },
      { label: 'Ressourcen', href: '/ressourcen' },
    ],
    standorte: [
      { label: 'München', href: '/lohnabrechnung-muenchen' },
      { label: 'Berlin', href: '/lohnabrechnung-berlin' },
      { label: 'Hamburg', href: '/lohnabrechnung-hamburg' },
      { label: 'Frankfurt', href: '/lohnabrechnung-frankfurt' },
      { label: 'Köln', href: '/lohnabrechnung-koeln' },
      { label: 'Stuttgart', href: '/lohnabrechnung-stuttgart' },
      { label: 'Düsseldorf', href: '/lohnabrechnung-duesseldorf' },
      { label: 'Leipzig', href: '/lohnabrechnung-leipzig' },
      { label: 'Dresden', href: '/lohnabrechnung-dresden' },
      { label: 'Nürnberg', href: '/lohnabrechnung-nuernberg' },
    ],
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
        .nav-wrapper { font-family: 'Atkinson Hyperlegible', sans-serif; }
        .nav-item { position: relative; }
        .nav-btn { color: #444; text-decoration: none; font-size: 1.7rem; font-weight: 400; padding: 0.5rem 0; cursor: pointer; display: flex; align-items: center; gap: 4px; background: none; border: none; font-family: inherit; }
        .nav-btn::after { content: ' ▾'; font-size: 1.4rem; color: #999; }
        .nav-btn:hover { color: #1a1a1a; }
        .dropdown { position: absolute; top: calc(100% + 8px); left: 0; background: #fff; border: 0.5px solid #e5e5e5; border-radius: 10px; padding: 0.5rem; min-width: 240px; z-index: 200; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .dropdown a { display: block; color: #444; text-decoration: none; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.95rem; }
        .dropdown a:hover { background: #f5f5f5; color: #F97316; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #1a1a1a; border-radius: 2px; }
        .mobile-menu { display: none; flex-direction: column; background: #fff; border-top: 0.5px solid #e5e5e5; }
        .mobile-menu.open { display: flex; }
        .mobile-section { padding: 0.75rem 1.5rem; border-bottom: 0.5px solid #f0f0f0; }
        .mobile-section-title { color: #F97316; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; }
        .mobile-section a { display: block; color: #444; text-decoration: none; padding: 0.4rem 0; font-size: 0.95rem; }
        .mobile-cta { margin: 1rem 1.5rem 1.5rem; background: #1a1a1a; color: #fff; padding: 0.85rem; border-radius: 8px; text-decoration: none; font-weight: 700; text-align: center; display: block; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <nav className="nav-wrapper" style={{ background: '#fff', borderBottom: '0.5px solid #e5e5e5', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1.75rem', maxWidth: '1200px', margin: '0 auto' }}>

          <Link href="/">
            <Image src="/logo-light.png" alt="L0hn.de" width={400} height={125} style={{ objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>

            {/* Leistungen */}
            <div className="nav-item" onMouseEnter={() => setActiveDropdown('leistungen')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="nav-btn">Leistungen</button>
              {activeDropdown === 'leistungen' && (
                <div className="dropdown">
                  {dropdowns.leistungen.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="nav-item" onMouseEnter={() => setActiveDropdown('info')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="nav-btn">Info</button>
              {activeDropdown === 'info' && (
                <div className="dropdown">
                  {dropdowns.info.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                </div>
              )}
            </div>

            {/* Standorte */}
            <div className="nav-item" onMouseEnter={() => setActiveDropdown('standorte')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="nav-btn">Standorte</button>
              {activeDropdown === 'standorte' && (
                <div className="dropdown" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minWidth: '320px' }}>
                  {dropdowns.standorte.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link href="#kontakt" style={{ background: '#1a1a1a', color: '#fff', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap' }}>
              Angebot anfragen
            </Link>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <div className="mobile-section">
            <div className="mobile-section-title">Leistungen</div>
            {dropdowns.leistungen.map(item => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}
          </div>
          <div className="mobile-section">
            <div className="mobile-section-title">Info</div>
            {dropdowns.info.map(item => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}
          </div>
          <div className="mobile-section">
            <div className="mobile-section-title">Standorte</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
              {dropdowns.standorte.map(item => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}
            </div>
          </div>
          <Link href="#kontakt" className="mobile-cta" onClick={() => setMobileOpen(false)}>Angebot anfragen</Link>
        </div>
      </nav>
    </>
  );
}