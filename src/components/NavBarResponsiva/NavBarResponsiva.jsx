import React, { useState } from "react";
import "./NavBarResponsiva.css";
import iconeMenu from "./img/iconeMenuHamburguerBranco.png";
import { Route, useNavigate } from "react-router-dom";

const Logo = () => {
  return (
    <svg
      width="39.5"
      height="55.75"
      viewBox="0 0 114 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 117.5L58.5 88L107 118.5V89L58.5 60.5L4 90V58.5L58.5 29L110 61.5"
        stroke="#EE9B11"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 132L46.5 146.909L56.7589 152.909L67.5 146.909L93 132"
        stroke="#EAEAEA"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.5 21.5C39.5 21.5 35.9065 14.8346 32.5 11.5C29.2876 8.35548 23 5 23 5"
        stroke="#EAEAEA"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M76 20.5C76 20.5 79.5935 13.8346 83 10.5C86.2124 7.35548 92.5 4 92.5 4"
        stroke="#EAEAEA"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const NavBarResponsiva = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navegar = useNavigate();
  const handleCadastro = () => {
    navegar("/Cadastro");
  };

  const handleLogin = () => {
    navegar("/Login");
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="imageLogo">
            <Logo />
            <div className="navbar-brand">SymBee</div>
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a href="/home" className="nav-link">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a href="aboutUs" className="nav-link">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <div className="login-button">
              <button onClick={handleLogin}>Entrar</button>
            </div>
            <div className="btn-registrar">
              <button onClick={handleCadastro}>Registrar</button>
            </div>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={toggleMenu}>
              <img className="icon" src={iconeMenu} alt="Menu" />
            </button>
          </div>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sobre
              </a>
            </li>
          </ul>
          <div className="login-button">
            <button onClick={handleLogin}>
              <a>Entrar</a>
            </button>
          </div>
          <div className="btn-registrar">
            <button>
              <a onClick={handleCadastro}>Registrar</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBarResponsiva;
