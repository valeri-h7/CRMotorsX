import brands from '../../data/brands.js';

import './BrandCarousel.css';

function BrandCarousel() {
  // Duplicamos las marcas para que el carrusel
  // pueda hacer un movimiento continuo.
  const loopBrands = [...brands, ...brands];

  return (
    <div className="brand-carousel">
      <div className="brand-carousel__viewport">

        <div className="brand-carousel__track">

          {loopBrands.map((brand, index) => (
            <div
              className="brand-carousel__item"
              key={`${brand.id}-${index}`}
            >
              <div
                className="brand-carousel__logo"
                dangerouslySetInnerHTML={{
                  __html: brand.svg,
                }}
              />

              <span className="brand-carousel__name">
                {brand.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default BrandCarousel;