import marcas from "../data/marcas.json";
import "../styles/estilos.css"; // Asegúrate de que tus estilos estén aquí

export default function HomePage() {
  return (
    <div>
      {/* ⭐ HERO SECTION */}
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
            Explora y disfruta de los automóviles más increíbles del mundo.  
            Admira los coches más lujosos, potentes y exclusivos que existen.
          </p>
        </div>
      </section>

      {/* ⭐ CATÁLOGO DE MARCAS */}
      <section className="catalogo">
        <h2 className="catalogo-titulo">Catálogo de Marcas</h2>

        <div className="catalogo-grid">  {/* <----- IMPORTANTE */}
          {marcas.map((marca) => (
            <div key={marca.id} className="catalogo-card">
              <img src={marca.imagen} alt={marca.nombre} />

              <div className="catalogo-info">
                <h3>{marca.nombre}</h3>
                <p>{marca.descripcion}</p>

                <a href={`/marca/${marca.id}`} className="btn-2">
                  Ver modelos
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
