# CR Motors — Plantilla React

Base de proyecto en React (Vite + React Router) para la web de CR Motors -
Mecánica Racing. Es una plantilla: la estructura y los estilos están
armados, pero faltan tus contenidos reales (logo, fotos, videos, textos
finales, número de WhatsApp, links de redes, ubicación).

## Cómo correrla

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Estructura

```
src/
  assets/
    logo/      -> poné acá tu logo (CR Motors)
    marcas/    -> poné acá los logos de cada marca del carrusel
  components/  -> un componente por carpeta, con su .jsx y su .css
  data/
    services.js  -> lista de servicios (usado por la sección "Nuestro servicio")
    brands.js    -> lista de marcas (usado por el carrusel)
  pages/       -> une los componentes en cada ruta
  router/      -> definición de rutas (React Router)
  styles/
    variables.css -> paleta de colores y tipografías del sitio
    global.css     -> estilos base compartidos
```

## Lo que ya está resuelto

- **Nuestro servicio**: grilla de tarjetas que lee de `src/data/services.js`.
  Para agregar o sacar un servicio, editá ese archivo — no hace falta tocar
  el componente.
- **Carrusel de marcas**: loop infinito hecho solo con CSS (sin librerías),
  lee de `src/data/brands.js`. Mientras no cargues logos reales, muestra el
  nombre de la marca como placeholder; apenas pongas la imagen en
  `src/assets/marcas/` y la referencies en `brands.js`, se usa sola.

## Pendientes marcados con TODO

Buscá el comentario `TODO` en el código para encontrar todo lo que falta
completar: logo del header, número de WhatsApp, links de redes, imagen de
fondo del hero, mapa y horarios, galería de trabajos, reseñas, etc.

## Paleta

| Uso | Color |
|---|---|
| Principal / acción | `#D71920` |
| Fondo oscuro | `#0B0B0B` |
| Superficie oscura | `#1C1C1C` |
| Texto secundario | `#8A8A8A` |
| Fondo claro | `#F5F5F5` |
| Acento puntual | `#F5C400` |
