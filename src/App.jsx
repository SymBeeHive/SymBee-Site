import React from "react";
import "./App.css"; // Importando estilos do App, se houver
import Login from "./components/Login/Login";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Cadastro from "./components/Cadastro/Cadastro";
import NavBar from "./components/NavBar/NavBar";// Certifique-se de que o caminho está correto


function App() {
  return (
    <>
    <div>
      <NavBar />
       <Login />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
