import { useState } from "react";

import marcas from "../data/marcas.json";
import "../styles/estilos.css";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  return (
    <div>

      {/* ⭐ ENCABEZADO PRINCIPAL */}
      <section className="header-content container">

        {/* Contenedor con imagen de fondo y el texto encima */}
        <div className="hero-container">
          <img
            className="hero-img"
            src="../../public/img/imagen-portada.jpg"
            alt="Cars"
          />

          <div className="hero-text">
            <h1>
              Descubre el <span>Mundo</span>
              <br />
              de los Hipercoches
            </h1>

            <p>
              ¡Bienvenido a la página donde los sueños sobre ruedas se hacen
              realidad! Explora y disfruta de los automóviles más increíbles del
              mundo. Admira los coches más lujosos, potentes y exclusivos que
              existen.
            </p>
          </div>
        </div>

      </section>

      {/* ⭐ CARRUSEL DE MARCAS */}
      <section className="catalogo">
        <h2 className="catalogo-titulo">Hipercoches Populares</h2>

        <div className="carousel-container">

          <button
            className="carousel-btn left"
            onClick={() =>
              document.querySelector(".carousel-track")!.scrollBy({
                left: -350,
                behavior: "smooth",
              })
            }
          >
            ❮
          </button>

          <div className="carousel-track">
            {marcas.map((marca) => (
              <div key={marca.id} className="catalogo-card horizontal-card">
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

          <button
            className="carousel-btn right"
            onClick={() =>
              document.querySelector(".carousel-track")!.scrollBy({
                left: 350,
                behavior: "smooth",
              })
            }
          >
            ❯
          </button>
        </div>
      </section>
    </div>
  );
}


// anterior

// import { useState } from "react";

// import marcas from "../data/marcas.json";
// import "../styles/estilos.css";

// export default function HomePage() {
//   const [email, setEmail] = useState("");
//   const [confirmacion, setConfirmacion] = useState("");

//   // const handleRegistro = (e: { preventDefault: () => void; }) => {
//   //   e.preventDefault();
//   //   if (email.trim() === "") {
//   //     setConfirmacion("Por favor, ingresa un correo válido.");
//   //     return;
//   //   }
//   //   // Aquí voy a agregar lógica real, por ahora solo mostramos confirmación
//   //   setConfirmacion("¡Gracias por registrarte! Bienvenido a la familia Luxury.");
//   //   setEmail("");
//   // };

//   return (
//     <div>
//       {/* ⭐ HERO SECTION */}
//       <section className="catalogo">
//         <h2 className="catalogo-titulo">Catálogo de Marcas</h2>

//         <div className="carousel-container">

//           <button className="carousel-btn left" onClick={() => {
//             document.querySelector(".carousel-track")!.scrollBy({ left: -350, behavior: "smooth" });
//           }}>
//             ❮
//           </button>

//           <div className="carousel-track">
//             {marcas.map((marca) => (
//               <div key={marca.id} className="catalogo-card horizontal-card">
//                 <img src={marca.imagen} alt={marca.nombre} />

//                 <div className="catalogo-info">
//                   <h3>{marca.nombre}</h3>
//                   <p>{marca.descripcion}</p>
//                   <a href={`/marca/${marca.id}`} className="btn-2">
//                     Ver modelos
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="carousel-btn right" onClick={() => {
//             document.querySelector(".carousel-track")!.scrollBy({ left: 350, behavior: "smooth" });
//           }}>
//             ❯
//           </button>
//         </div>
//       </section>


//       {/* ⭐ SECCIÓN REGISTRO PARA PERTENECER A LA FAMILIA LUXURY */}
//       {/* <section className="registro-familia container">
//         <h2>¿Quieres pertenecer a la familia Luxury? Regístrate gratis</h2>
//         <form onSubmit={handleRegistro}>
//           <input
//             type="email"
//             placeholder="Tu correo electrónico"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit" className="btn-2">
//             Registrarse
//           </button>
//         </form>
//         {confirmacion && <p className="confirmacion-msg">{confirmacion}</p>}
//       </section> */}
//     </div>
//   );
// }
