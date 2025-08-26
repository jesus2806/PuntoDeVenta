import React from "react";
import "./css/Login.css";

export default function Login({ onSwitch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    console.log("Login datos:", data);
    // Reemplaza por tu lógica real (axios / contexto)
    alert(`Simulación de inicio de sesión: ${data.usuario}`);
  };

  return (
    <div className="login-card">
      <h2>Iniciar sesión</h2>
      <p className="muted">Accede con tu cuenta para continuar</p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          <span>Usuario</span>
          <input name="usuario" required placeholder="Ingresa tu usuario" />
        </label>

        <label>
          <span>Contraseña</span>
          <input
            name="password"
            type="password"
            required
            placeholder="Ingresa tu contraseña"
          />
        </label>

        <div className="form-row space-between">
          <button type="submit" className="btn primary">
            Entrar
          </button>
          <a href="/" className="link">Olvidé mi contraseña</a>
        </div>
      </form>

      <div className="switch">
        ¿No tienes una cuenta?{" "}
        <button onClick={onSwitch} className="link-btn">
          Registrarte
        </button>
      </div>
    </div>
  );
}
