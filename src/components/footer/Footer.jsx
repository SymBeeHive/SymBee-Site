import "./Footer.css";
import React from "react";
import iconeGit from "/img/iconeGit.png";
import iconeInsta from "/img/iconeInsta.png";
import iconeZap from "/img/iconeZap.png";

const Footer = (props) => {
  return (
    <footer className="footer" style={props.footer}>
      <div className="FooterLogo">
        <div className="logoFooterImg">
          <svg
            width="31"
            height="46"
            viewBox="0 0 31 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.0283 30.6339L15.8962 23.1917L28.7075 30.8862V23.444L15.8962 16.254L1.5 23.6962V15.7494L15.8962 8.30713L29.5 16.5062"
              stroke="#EE9B11"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99023 34.292L12.7261 38.0533L15.436 39.5669L18.2733 38.0533L25.0091 34.292"
              stroke={props.stroke}
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.877 6.41482C10.877 6.41482 9.92783 4.73327 9.02799 3.89202C8.17943 3.09872 6.51855 2.2522 6.51855 2.2522"
              stroke={props.stroke}
              strokestroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5185 6.16263C20.5185 6.16263 21.4677 4.48107 22.3675 3.63982C23.2161 2.84652 24.877 2 24.877 2"
              stroke={props.stroke}
              strokestroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="FooterSymbee" style={props.symbee}>
          <h3>SymBee</h3>
        </div>
      </div>
      <div className="icons" style={props.icones}>
        <div className="iconsSocialNetworks">
          <div>
            <a href="https://instagram.com/symbee_ofc">
              <img src={iconeInsta} alt="ícone clicável do instagram" />
            </a>
          </div>
          <div>
            <a href="https://github.com/symbee">
              <img src={iconeGit} alt="ícone clicável do github" />
            </a>
          </div>
          <div>
            <img src={iconeZap} alt="ícone clicável do whatsapp" />
          </div>
        </div>
      </div>
      <div className="FooterContents" style={props.links}>
        <div className="geral">
          <h4>Geral</h4>
          <div className="GeralLinks ">
            <a href="#" style={props.links}>
              Cadastre
            </a>
            <a href="#" style={props.links}>
              Central
            </a>
            <a href="#" style={props.links}>
              Sobre
            </a>
            <a href="#" style={props.links}>
              Imprensa
            </a>
            <a href="#" style={props.links}>
              Blog
            </a>
            <a href="#" style={props.links}>
              Carreiras
            </a>
            <a href="#" style={props.links}>
              Developers
            </a>
          </div>
        </div>
        <div className="symbeeContentFooter">
          <h4>SymBee</h4>
          <div className="symbeeContentFooterLinks">
            <a href="#" style={props.links}>
              Learning
            </a>
            <a href="#" style={props.links}>
              Vagas
            </a>
            <a href="#" style={props.links}>
              Jogos
            </a>
            <a href="#" style={props.links}>
              Salário
            </a>
            <a href="#" style={props.links}>
              Mobile
            </a>
            <a href="#" style={props.links}>
              Serviços
            </a>
            <a href="#" style={props.links}>
              Soluções
            </a>
          </div>
        </div>
        <div className="business">
          <h4>Business</h4>
          <div className="BusinessLinks">
            <a href="#" style={props.links}>
              Talentos
            </a>
            <a href="#" style={props.links}>
              Marketing
            </a>
            <a href="#" style={props.links}>
              Vendas
            </a>
            <a href="#" style={props.links}>
              Learning
            </a>
          </div>
        </div>
        <div className="Diretorio">
          <h4>Diretório</h4>
          <div className="DiretorioLinks">
            <a href="#" style={props.links}>
              Usuários
            </a>
            <a href="#" style={props.links}>
              Vagas
            </a>
            <a href="#" style={props.links}>
              Empresas
            </a>
            <a href="#" style={props.links}>
              Em destaque
            </a>
            <a href="#" style={props.links}>
              Publicações
            </a>
            <a href="#" style={props.links}>
              Antigos
            </a>
            <a href="#" style={props.links}>
              Notícias
            </a>
            <a href="#" style={props.links}>
              Newsletters
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
