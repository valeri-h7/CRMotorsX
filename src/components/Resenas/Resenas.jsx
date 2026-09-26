import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Reveal from '../Reveal/Reveal.jsx';
import resenas from '../../data/resenas.js';
import './Resenas.css';

const AUTOPLAY_MS = 8000;

function inicial(nombre) {
  return nombre.trim().charAt(0).toUpperCase();
}

// Agrupa las reseñas según la cantidad que se muestra por página
function agruparEnPaginas(lista, porPagina) {
  const paginas = [];

  for (let i = 0; i < lista.length; i += porPagina) {
    paginas.push(lista.slice(i, i + porPagina));
  }

  return paginas;
}

function ResenaCard({
  resena,
  globalIndex,
  expandido,
  onToggle,
}) {
  const esLarga = resena.texto.length > 220;

  // Creamos una versión corta del texto
  const textoCorto = resena.texto.slice(0, 220);

  // Evitamos cortar una palabra por la mitad
  const ultimoEspacio = textoCorto.lastIndexOf(' ');

  const textoVisible =
    ultimoEspacio > 0
      ? textoCorto.slice(0, ultimoEspacio)
      : textoCorto;

  return (
    <article className="resena-card">

      <span className="card-quote" aria-hidden="true">
        &rdquo;
      </span>

      {/* ESTRELLAS */}
      <div
        className="card-stars"
        aria-label="5 de 5 estrellas"
      >
        {'★★★★★'}
      </div>

      {/* TEXTO */}
      <div className="card-text">

        {resena.titulo && (
          <strong className="card-text__titulo">
            {resena.titulo}
          </strong>
        )}

        <p className="review-content">
          “
          {expandido || !esLarga
            ? resena.texto
            : `${textoVisible}...`}
          ”

          {esLarga && (
            <button
              type="button"
              className="view-more"
              onClick={() => onToggle(globalIndex)}
            >
              {expandido ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>

      </div>

      {/* PIE DE TARJETA */}
      <div className="card-footer">

        <div className="card-author">

          <span className="card-avatar-text">
            {inicial(resena.nombre)}
          </span>

          <div className="card-meta">
            <span className="card-name">
              {resena.nombre}
            </span>

            <span className="card-date">
              Cliente de Google
            </span>
          </div>

        </div>

        <span
          className="google-icon-link"
          aria-hidden="true"
        >
          <i className="bi bi-google"></i>
        </span>

      </div>

    </article>
  );
}

function Resenas() {

  const [pagina, setPagina] = useState(0);

  const [expandidas, setExpandidas] = useState(
    () => new Set()
  );

  const [porPagina, setPorPagina] = useState(
    () => (window.innerWidth <= 768 ? 1 : 3)
  );

  const timerRef = useRef(null);

  /* ========================================
     CAMBIO DE CANTIDAD SEGÚN PANTALLA
  ======================================== */

  useEffect(() => {

    const handleResize = () => {

      const nuevoPorPagina =
        window.innerWidth <= 768 ? 1 : 3;

      setPorPagina((prev) => {

        if (prev !== nuevoPorPagina) {
          setPagina(0);
          return nuevoPorPagina;
        }

        return prev;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  /* ========================================
     CREAR LAS PÁGINAS
  ======================================== */

  const paginas = useMemo(
    () => agruparEnPaginas(resenas, porPagina),
    [porPagina]
  );

  const totalPaginas = paginas.length;

  /* ========================================
     CAMBIAR DE PÁGINA
  ======================================== */

  const goTo = useCallback(
    (i) => {

      if (totalPaginas === 0) {
        return;
      }

      setPagina(
        ((i % totalPaginas) + totalPaginas) %
          totalPaginas
      );
    },
    [totalPaginas]
  );

  /* ========================================
     SIGUIENTE
  ======================================== */

  const next = useCallback(() => {
    goTo(pagina + 1);
  }, [goTo, pagina]);

  /* ========================================
     ANTERIOR
  ======================================== */

  const prev = useCallback(() => {
    goTo(pagina - 1);
  }, [goTo, pagina]);

  /* ========================================
     AUTOPLAY
  ======================================== */

  const restartTimer = useCallback(
    (paused) => {

      clearInterval(timerRef.current);

      if (!paused && totalPaginas > 0) {

        timerRef.current = setInterval(() => {

          setPagina((p) =>
            (p + 1) % totalPaginas
          );

        }, AUTOPLAY_MS);
      }
    },
    [totalPaginas]
  );

  useEffect(() => {

    restartTimer(false);

    return () => {
      clearInterval(timerRef.current);
    };

  }, [restartTimer]);

  /* ========================================
     VER MÁS / VER MENOS
  ======================================== */

  const toggleExpandida = useCallback(
    (globalIndex) => {

      setExpandidas((prev) => {

        const nuevoSet = new Set(prev);

        if (nuevoSet.has(globalIndex)) {
          nuevoSet.delete(globalIndex);
        } else {
          nuevoSet.add(globalIndex);
        }

        return nuevoSet;
      });
    },
    []
  );

  /* ========================================
     RESEÑAS DE LA PÁGINA ACTUAL
  ======================================== */

  const itemsPagina = paginas[pagina] || [];

  return (
    <section
      className="resenas-section"
      id="testimonios"
    >

      <div className="container">

        {/* ========================================
            ENCABEZADO
        ======================================== */}

        <div className="resenas-header">

          <Reveal
            as="span"
            className="resenas-subtitle"
          >
            Testimonios
          </Reveal>

          <Reveal as="h2">
            Lo que dicen nuestros{' '}
            <span className="resenas-heading-accent">
              clientes
            </span>
          </Reveal>

          <div className="resenas-google-stars">
            <span className="stars">
              ★★★★★
            </span>
          </div>

        </div>

        {/* ========================================
            CARRUSEL
        ======================================== */}

        <div
          className="resenas-carousel-wrapper"
          onMouseEnter={() => restartTimer(true)}
          onMouseLeave={() => restartTimer(false)}
        >

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            className="carousel-arrow arrow-left"
            onClick={prev}
            aria-label="Reseñas anteriores"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* RESEÑAS */}

          <div
            className="resenas-grid"
            key={`${pagina}-${porPagina}`}
          >

            {itemsPagina.map((resena, i) => {

              const globalIndex =
                pagina * porPagina + i;

              return (
                <ResenaCard
                  key={globalIndex}
                  resena={resena}
                  globalIndex={globalIndex}
                  expandido={expandidas.has(
                    globalIndex
                  )}
                  onToggle={toggleExpandida}
                />
              );
            })}

          </div>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            className="carousel-arrow arrow-right"
            onClick={next}
            aria-label="Siguientes reseñas"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

        {/* ========================================
            DOTS
        ======================================== */}

        <div className="resenas__dots">

          {paginas.map((_, i) => (

            <button
              key={i}
              type="button"
              className={`resenas__dot ${
                i === pagina
                  ? 'resenas__dot--activo'
                  : ''
              }`}
              onClick={() => goTo(i)}
              aria-label={`Ir a la página ${
                i + 1
              } de reseñas`}
            />

          ))}

        </div>

        {/* ========================================
            BOTÓN GOOGLE
        ======================================== */}

        <div className="resenas-footer-action">

          <a
            href="https://share.google/RsRt4V57juG4KMaWs"
            target="_blank"
            rel="noreferrer"
            className="btn-google-reviews"
          >
            Dejar opiniones en Google
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resenas;

