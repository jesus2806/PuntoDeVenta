import React, { useState } from "react";
import Login from "../../components/login/Login";
import RegistroForm from "../../components/login/RegistroForm";
import "./css/Home.css";

export default function Home() {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Panel visual izquierdo (oculto en pantallas pequeñas) */}
        <aside className="auth-visual">
          <h1>
            Bienvenido a <span>Punto de Venta</span>
          </h1>
          <p>Accede o crea una cuenta para comenzar.</p>
          <ul>
            <li>Interfaz moderna</li>
            <li>Seguridad</li>
            <li>Soporte</li>
          </ul>
        </aside>

        {/* Área de autenticación */}
        <main className="auth-area">
          <div className="auth-toggle">
            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={mode === "register" ? "active" : ""}
              onClick={() => setMode("register")}
            >
              Registro
            </button>
          </div>

          <div className="auth-form">
            {mode === "login" ? (
              <Login onSwitch={() => setMode("register")} />
            ) : (
              <RegistroForm onSwitch={() => setMode("login")} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
