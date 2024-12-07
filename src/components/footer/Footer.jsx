import "./Footer.css";
import React from "react";
import SymBee from "./img/SymBee";
import Ball from "./img/Ball";
import Instagram from "./img/Instagram";
import GitHub from "./img/Github";
import Linkedin from "./img/Linkedin";

const Footer = (props) => {
  return (
    <footer className="footer" style={props.footer}>
      <div className="logo-nome">
        <SymBee />
        <Ball />
        <h1>SymBee</h1>
      </div>

      <div className="social-icons">
        <a href="https://instagram.com/symbee_ofc" target="_blank">
          <Instagram />
        </a>
        <a href="https://github.com/symbeehive" target="_blank">
          <GitHub />
        </a>
        <a href="https://linkedin.com/company/symbeehive/" target="_blank">
          <Linkedin />
        </a>
      </div>

      <span>Projetos que crescem, talentos que enriquecem.</span>

      <div className="links">
        <div className="topic">
          <h2>
            <strong>Geral</strong>
          </h2>
          <a href="#">Cadastrar</a>
          <a href="#">Sobre</a>
          <a href="#">Carreiras</a>
        </div>
        <div className="topic">
          <h2>
            <strong>SymBee</strong>
          </h2>
          <a href="#">Planos</a>
          <a href="#">Serviços</a>
          <a href="#">Ranking</a>
          <a href="#">Contato</a>
        </div>
      </div>

      <hr className="w-48 h-1 my-4 opacity-100 bg-black border-0 rounded md:my-10" />

      <div className="terms">
        <a href="#">Termos de serviço</a>
        <span> &copy; 2024 - SymBee - Inc.</span>
        <a href="#">Politica de privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;
