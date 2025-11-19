import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMsg(data.message);

    if (data.message === "Login exitoso") {
      localStorage.setItem("user", email);
      window.location.href = "/";
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}
