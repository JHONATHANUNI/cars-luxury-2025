import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import RedesPage from "../pages/RedesPage";
import DesignersPage from "../pages/DesignersPage";
import NoticiasPage from "../pages/NoticiasPage";
import CatalogoPage from "../pages/CatalogoPage";
import MarcaPage from "../pages/MarcaPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "redes",
        element: <RedesPage />,
      },
      {
        path: "diseñadores",
        element: <DesignersPage />,
      },
      {
        path: "noticias",
        element: <NoticiasPage />,
      },
      {
        path: "catalogo",
        element: <CatalogoPage />,
      },
      {
        path: "marca/:id",
        element: <MarcaPage />,
      },
    ],
  },
]);
