import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  // Si NO hay usuario → lo devuelve al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children; // Si hay usuario → renderiza la página normal
}
