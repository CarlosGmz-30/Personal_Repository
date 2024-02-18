import { useState } from "react";
import "./App.css";
import "./assets/styles/Login.css";

function App() {
  return (
    <>
      <div className="ripple-background">
        {/* Animación esquina inferior izquierda */}
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>

        {/* Animación esquina superior derecha */}
        <div
          id="circle-right"
          className="circle-right xxlarge-right shade1"
        ></div>
        <div
          id="circle-right"
          className="circle-right xlarge-right shade2"
        ></div>
        <div
          id="circle-right"
          className="circle-right large-right shade3"
        ></div>
        <div
          id="circle-right"
          className="circle-right medium-right shade4"
        ></div>
        <div
          id="circle-right"
          className="circle-right small-right shade5"
        ></div>
      </div>
      <div className="generalContainer">
        <div className="loginContainer">
          <div className="titleContainer">
            <h1 id="title">Inicia sesión en SIBBAI</h1>
          </div>
          <div className="formsContainer">
            <label htmlFor="">Correo Electrónico:</label>
            <input type="text" placeholder="Correo electrónico" />
            <label htmlFor="">Contraseña:</label>
            <input type="password" placeholder="Contraseña" />
            <div className="remindContainer">
              <button>Recuerdame</button>
              <p id="remind">Recuérdame</p>
            </div>
            <button id="btnLogin" type="submit">
              Iniciar Sesión
            </button>
            <a id="btnForget" href="">
              ¿Se te ha olvidado la contraseña?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
