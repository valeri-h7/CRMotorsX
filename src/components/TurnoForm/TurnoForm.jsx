import { useState } from 'react';
import './TurnoForm.css';

const initialState = {
  nombre: '',
  whatsapp: '',
  vehiculo: '',
  patente: '',
  servicio: '',
  problema: '',
  fotos: null,
};

function TurnoForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Turno solicitado:', form);
  };

  return (
    <div className="turno" id="contacto">

      <div className="container turno__inner">

        <div className="turno__intro">
          <h2>Solicitá tu turno</h2>

          <p>
            Contanos qué le pasa a tu auto y te confirmamos por WhatsApp.
          </p>
        </div>

        <form
          className="turno__card"
          onSubmit={handleSubmit}
        >

          <div className="turno__ticket">
            <span>ORDEN DE TRABAJO</span>
            <span>N.º 00284</span>
          </div>

          <label>
            Nombre

            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            WhatsApp

            <input
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              required
            />
          </label>

          <div className="turno__row">

            <label>
              Vehículo

              <input
                name="vehiculo"
                value={form.vehiculo}
                onChange={handleChange}
              />
            </label>

            <label>
              Patente

              <input
                name="patente"
                value={form.patente}
                onChange={handleChange}
              />
            </label>

          </div>

          <label>
            Servicio

            <input
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
            />
          </label>

          <label>
            Contanos el problema

            <textarea
              name="problema"
              rows={4}
              value={form.problema}
              onChange={handleChange}
            />
          </label>

          <label>
            Fotos del vehículo (opcional)

            <input
              type="file"
              name="fotos"
              multiple
              accept="image/*"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="btn btn--primary"
          >
            Enviar solicitud
          </button>

        </form>

      </div>

    </div>
  );
}

export default TurnoForm;
