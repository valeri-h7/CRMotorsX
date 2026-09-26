
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo/cr-motors-logo-inclinado.png';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__inner">

        <div className="footer__logo">
          <Link to="/">
            <img
              src={Logo}
              alt="CR Motors"
            />
          </Link>
        </div>

        <div className="footer__col footer__nav">
          <h4>Navegación</h4>

          <Link
            to="/"
            className="footer__nav-inicio"
          >
            Inicio
          </Link>

          <Link to="/servicios">
            Servicios
          </Link>

          <Link to="/trabajos">
            Trabajos
          </Link>

          <Link to="/nosotros">
            Nosotros
          </Link>

          <Link
            to="/contacto"
            className="footer__nav-contacto"
          >
            Contacto
          </Link>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>

          <p>
            Terrero 3147, C1417 Villa del Parque,
            Ciudad Autónoma de Buenos Aires
          </p>

          <p>
            Lunes a viernes de 9:00 a 18:00 hs.
            <br />
            Sábados y domingos cerrado.
          </p>

          <p>
            11 3684-3215
          </p>
        </div>

        <div className="footer__col">
          <h4>Redes</h4>

          <a
            href="https://www.instagram.com/tallermecanico.cr/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram: @tallermecanico.cr
          </a>

          <a
            href="https://www.facebook.com/Tallercrmotors/?rdid=oXk5GWxNu88C4DwX"
            target="_blank"
            rel="noreferrer"
          >
            Facebook: @crtaller.mecanico
          </a>

          <a
            href="https://www.tiktok.com/@tallermecanico.cr"
            target="_blank"
            rel="noreferrer"
          >
            TikTok: @tallermecanico.cr
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} CR Motors.
          Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;



