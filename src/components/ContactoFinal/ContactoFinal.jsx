import { useState } from 'react';
import { whatsappUrl } from '../../utils/whatsapp.js';
import TurnoForm from '../TurnoForm/TurnoForm.jsx';
import './ContactoFinal.css';

function ContactoFinal() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const abrirFormulario = () => {
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  return (
    <>
      <section className="contacto-final section">

        <div className="container contacto-final__inner">

          <h2>¿Listo para dejar tu auto en manos expertas?</h2>

          <div className="contacto-final__actions">

            <button
              type="button"
              className="btn btn--primary btn--grande"
              onClick={abrirFormulario}
            >
              Formulario de Turnos
            </button>

            <a
              className="btn btn--outline"
              href={whatsappUrl(
                'Hola, quiero consultar por un turno en CR Motors'
              )}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>

          </div>

        </div>

      </section>

      {mostrarFormulario && (
        <div className="turno-modal">

          <div
            className="turno-modal__overlay"
            onClick={cerrarFormulario}
          />

          <div
            className="turno-modal__content"
            role="dialog"
            aria-modal="true"
            aria-label="Formulario de turnos"
          >

            <button
              type="button"
              className="turno-modal__close"
              onClick={cerrarFormulario}
              aria-label="Cerrar formulario"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <TurnoForm />

          </div>

        </div>
      )}
    </>
  );
}

export default ContactoFinal;
