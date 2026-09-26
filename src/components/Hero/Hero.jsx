import Reveal from '../Reveal/Reveal.jsx';
import videoFondo from '../../assets/Img-vd/video.hero1.mp4';
import './Hero.css';

const WHATSAPP_NUMBER = '011 3684-3215';

function Hero() {
  // Convierte '011 3684-3215' en '541136843215'
  const cleanNumber =
    '54' + WHATSAPP_NUMBER.replace(/\D/g, '').replace(/^0/, '');

  // Mensaje que aparecerá escrito en WhatsApp
  const whatsappMessage =
    'Hola, quiero pedir un turno en CR Motors';

  // URL completa de WhatsApp
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="hero">

      {/* Video único de fondo que se expandirá horizontalmente */}
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoFondo} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Capa de gradiente oscuro para asegurar la lectura del texto */}
      <div className="hero__overlay" />

      <div className="container hero__content">

        <Reveal as="span" className="hero__eyebrow">
          CR Motors
        </Reveal>

        <Reveal as="h1" delay={80}>
          Mecánica Integral en Argentina
        </Reveal>

        <Reveal as="p" delay={160}>
          Más de 10 años dejando tu auto como nuevo. Especialistas en Audi y Volkswagen.
        </Reveal>

        <Reveal className="hero__actions" delay={240}>
          <a
            className="btn btn--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Pedir Turno por WhatsApp
          </a>
        </Reveal>

        {/* Chips de confianza */}
        <Reveal className="hero__badges" delay={300}>
          <span className="hero__badge">
            +10 años de experiencia
          </span>

          <span className="hero__badge">
            Calidad y Garantia
          </span>

          <span className="hero__badge">
            Atención personalizada
          </span>
        </Reveal>
  

      {/* Sección de Métodos de Pago */}
<section className="hero__payment">

  <span className="hero__payment-title">
    Medios de pago
  </span>

  <div className="hero__payment-methods">

    {/* VISA */}
    <span className="payment-badge">
      <svg
        viewBox="0 0 48 32"
        width="48"
        height="32"
        aria-label="Visa"
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="32"
          rx="4"
          fill="#ffffff"
        />

        <text
          x="24"
          y="21"
          textAnchor="middle"
          fill="#1a1f71"
          fontSize="12"
          fontWeight="700"
          fontStyle="italic"
        >
          VISA
        </text>
      </svg>
    </span>


    {/* MASTERCARD */}
    <span className="payment-badge">
      <svg
        viewBox="0 0 48 32"
        width="48"
        height="32"
        aria-label="Mastercard"
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="32"
          rx="4"
          fill="#ffffff"
        />

        <circle
          cx="20"
          cy="16"
          r="9"
          fill="#eb001b"
        />

        <circle
          cx="28"
          cy="16"
          r="9"
          fill="#f79e1b"
          fillOpacity="0.95"
        />
      </svg>
    </span>


    {/* AMERICAN EXPRESS */}
    <span className="payment-badge">
      <svg
        viewBox="0 0 48 32"
        width="48"
        height="32"
        aria-label="American Express"
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="32"
          rx="4"
          fill="#2e77bc"
        />

        <text
          x="24"
          y="14"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="5.5"
          fontWeight="700"
        >
          AMERICAN
        </text>

        <text
          x="24"
          y="21"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          fontWeight="700"
        >
          EXPRESS
        </text>
      </svg>
    </span>


    {/* CABAL */}
    <span className="payment-badge">
      <svg
        viewBox="0 0 48 32"
        width="48"
        height="32"
        aria-label="Cabal"
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="32"
          rx="4"
          fill="#ffffff"
        />

        <text
          x="24"
          y="21"
          textAnchor="middle"
          fill="#1b4f8a"
          fontSize="9"
          fontWeight="700"
        >
          CABAL
        </text>
      </svg>
    </span>


    {/* MERCADO PAGO */}
    <span className="payment-badge">
      <svg
        viewBox="0 0 48 32"
        width="48"
        height="32"
        aria-label="Mercado Pago"
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="32"
          rx="4"
          fill="#ffffff"
        />

        <circle
          cx="24"
          cy="16"
          r="11"
          fill="#009ee3"
        />

        <path
          d="M16 15c2.2-3 4.8-4.5 8-4.5s5.8 1.5 8 4.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M18 18c1.7-2 3.7-3 6-3s4.3 1 6 3"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>


    {/* MODO */}
    <span className="payment-badge">
      <svg
        viewBox="0 0 48 32"
        width="48"
        height="32"
        aria-label="MODO"
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="32"
          rx="4"
          fill="#ffffff"
        />

        <text
          x="24"
          y="21"
          textAnchor="middle"
          fill="#111111"
          fontSize="10"
          fontWeight="700"
        >
          MODO
        </text>
      </svg>
    </span>


    {/* QR */}
    <span className="payment-badge payment-badge--icon">

      <svg
        viewBox="0 0 32 32"
        width="25"
        height="25"
        aria-label="Pago con QR"
      >
        <rect
          x="3"
          y="3"
          width="10"
          height="10"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        <rect
          x="19"
          y="3"
          width="10"
          height="10"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        <rect
          x="3"
          y="19"
          width="10"
          height="10"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        <rect
          x="20"
          y="20"
          width="4"
          height="4"
          fill="#ffffff"
        />

        <rect
          x="26"
          y="20"
          width="3"
          height="3"
          fill="#ffffff"
        />

        <rect
          x="20"
          y="26"
          width="3"
          height="3"
          fill="#ffffff"
        />

        <rect
          x="26"
          y="26"
          width="3"
          height="3"
          fill="#ffffff"
        />
      </svg>

      <span>QR</span>

    </span>


    {/* TRANSFERENCIA */}
    <span className="payment-badge payment-badge--icon">

      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        aria-label="Transferencia"
      >
        <path
          d="M16 3L3 10v3h26v-3L16 3z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M6 13v10M12 13v10M20 13v10M26 13v10"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        <path
          d="M3 23h26v5H3z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>

      <span>Transferencia</span>

    </span>


    {/* EFECTIVO */}
    <span className="payment-badge payment-badge--icon">

      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        aria-label="Efectivo"
      >
        <rect
          x="3"
          y="8"
          width="26"
          height="16"
          rx="2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        <circle
          cx="16"
          cy="16"
          r="4"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        <path
          d="M8 13h1M23 19h1"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span>Efectivo</span>

    </span>

  </div>
</section>



      </div>
    </section>
  );
}

export default Hero;


