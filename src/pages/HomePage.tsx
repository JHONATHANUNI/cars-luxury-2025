export default function HomePage() {
  return (
    <div>
      <section className="header-content container">
        <div className="header-txt">
          <h1>
            Descubre el <span>Mundo</span>
            <br />
            de los Hipercoches
          </h1>

          <p>
            ¡Bienvenido a la página donde los sueños sobre ruedas se hacen
            realidad!
            <br />
            Explora y disfruta de los automóviles más increíbles del mundo.
            <br />
            Admira los coches más lujosos, potentes y exclusivos que existen.
          </p>

          <div className="buttons">
            <a href="#" className="btn-1">
              Información
            </a>
            <a href="#" className="btn-1">
              Historia
            </a>
          </div>
        </div>
      </section>

      {/* Aquí luego va la sección de catálogo */}
    </div>
  );
}
