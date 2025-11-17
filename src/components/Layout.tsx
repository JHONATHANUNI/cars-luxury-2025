import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="header">
        <div className="menu container">
          <a href="/" className="logo">LUXURY SPORT VEHICLES</a>

          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src="/img/menu.png" className="menu-icono" alt="Menú" />
          </label>

          <nav className="navbar">
            <ul>
              <li><a href="/redes">Redes sociales</a></li>
              <li><a href="/noticias">Noticias</a></li>
              <li><a href="/diseñadores">Diseñadores</a></li>
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
