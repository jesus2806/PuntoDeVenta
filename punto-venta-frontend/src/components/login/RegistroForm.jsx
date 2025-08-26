import React from "react";
import "./css/RegistroForm.css";

export default function RegistroForm({ onSwitch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    console.log("Registro datos:", data);
    // Reemplaza por tu lógica real (axios / validaciones)
    alert(`Simulación de registro: ${data.nombre}`);
  };

  return (
    <div className="register-card">
      <h2>Registro de usuario</h2>
      <p className="muted">Crea tu cuenta, es rápido y sencillo</p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          <span>Nombre</span>
          <input name="nombre" required placeholder="Tu nombre completo" />
        </label>

        <label>
          <span>Correo</span>
          <input
            name="correo"
            type="email"
            required
            placeholder="Tu correo electrónico"
          />
        </label>

        <label>
          <span>Contraseña</span>
          <input
            name="password"
            type="password"
            required
            placeholder="Crea una contraseña"
          />
        </label>

        <div className="form-row">
          <button type="submit" className="btn success">
            Registrarse
          </button>
        </div>
      </form>

      <div className="switch">
        ¿Ya tienes cuenta?{" "}
        <button onClick={onSwitch} className="link-btn">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
