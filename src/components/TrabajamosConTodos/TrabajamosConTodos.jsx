import { useEffect, useRef } from 'react';

import './TrabajamosConTodos.css';

import BrandCarousel from '../BrandCarousel/BrandCarousel.jsx';

function TrabajamosConTodos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="trabajamos-todos section section--dark"
    >
      <div className="container">

        <div className="trabajamos-todos__head">
          <h2>MARCAS CON LAS QUE TRABAJAMOS</h2>

          <p>
            Especialista en Volkswagen y Audi, con experiencia en todas las marcas.
          </p>
        </div>

      </div>

      <BrandCarousel />

      <div className="container">

        <div className="trabajamos-todos__grid">

          <div className="trabajamos-todos__item">
            <h3>Todas las marcas</h3>

            <p>
              Aunque nos destacamos en Audi y Volkswagen, atendemos todas.
            </p>
          </div>

          <div className="trabajamos-todos__item">
            <h3>Todos los seguros</h3>

            <p>
              Te asesoramos y te ayudamos con todos los trámites.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrabajamosConTodos;
