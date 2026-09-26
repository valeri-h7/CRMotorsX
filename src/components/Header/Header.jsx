import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo/cr-motors-logo-header.png';
import { whatsappUrl } from '../../utils/whatsapp.js';
import './Header.css';

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Trabajos', to: '/trabajos' },
  { label: 'Repuestos', to: '/repuestos' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // El header es transparente solamente en el Home
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${
        isHome ? 'header--home' : 'header--inner-page'
      } ${scrolled ? 'header--scrolled' : ''}`}
    >
      <div className="container header__inner">

        <Link
          to="/"
          className="header__logo"
          onClick={() => setOpen(false)}
        >
          <img src={Logo} alt="CR Motors" />
        </Link>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">

          <a
            className="btn btn--primary"
            href={whatsappUrl(
              'Hola, quiero consultar por un turno en CR Motors'
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <button
            className="header__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;