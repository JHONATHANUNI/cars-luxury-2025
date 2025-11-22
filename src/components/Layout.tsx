import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="header">
        <div className="menu container">
          <div>
            <a href="/" className="logo-header">LUXURY SPORT VEHICLES</a>
          </div>
            
           

          {/* <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src="/img/menu.png" className="menu-icono" alt="Menú" />
          </label> */}

          <nav className="navbar"> 
            <ul>
              <li className="botones-header"><a href="/redes" >Redes sociales</a></li>
              <li className="botones-header"><a href="/diseñadores" >Diseñadores</a></li>
              <li className="botones-header"><a href="/noticias" >Noticias</a></li>
              <li className="botones-header"><Link to="/catalogo" >Catálogo</Link></li>
              <li><a href="/"><img src="/public/img/icono_inicio.jpg" alt="" className="icono-session" /></a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <p>© 2025 CARS LUXURY - Todos los derechos reservados</p>
      </footer>

    </div>
  );
}
