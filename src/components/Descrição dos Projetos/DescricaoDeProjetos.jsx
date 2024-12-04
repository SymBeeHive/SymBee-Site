import React from "react";
import Devance from "./Assets/Devance.jsx";
import BeeProjects from "./Assets/BeeProjects";
import SymbeeLogo from "/public/img/Logo.png";
import Close from "./img/close.svg";
import aviso from "./img/denied.svg"
import salvar from "./img/salvar.svg"
import share from "./img/share.svg"
import mel from "./img/Vector.svg"
import dinheiro from "./img/dinheiro.svg"
import setaEsquerda from "./img/setaEsquerda.png"
import setaDireita from "./img/setaDireita.png"
import codigo from "./img/codigoSymbee.jpg"
import styles from "./DescricaoDeProjetos.module.css";

const DescricaoDeProjetos = () => {
  return (
    <main>
      <section className={styles.sectionDescriptionProjects}>
        {/* --------//----------- */}
        <div className={styles.principalProject}>
          <div className={styles.perfil}>
            <div className={styles.img}>
              <img src={SymbeeLogo} alt="Tevejoo" />
              <h2>Symbee</h2>
            </div>
            <p>Prazo: 5 Dias</p>
            <p>Publicado há: 10 minutos</p>
          </div>
          <div className={styles.informations}>
            <h1>Página de Captura de Leads para Campanha Publicitária </h1>
            <h2>Requisitos</h2>
            <div className={styles.ilustrations}>
              <Devance />
              <p>intermediário</p>
            </div>
            <div className={styles.ilustrations}>
              <BeeProjects />
              <p>nivel 3</p>
            </div>
          </div>
          <div className={styles.assets}>
            <div className={styles.closePage}>
              <img src={Close} alt="Close" />
            </div>
            <div className={styles.moneyAnHoney}>
              <div className={styles.money}>
              <img src={dinheiro} alt="mel" />
                <p>R$60/h</p>
              </div>
              <div className={styles.honey}>
                <img src={mel} alt="mel" />
                <p>500XP</p>
              </div>
              </div>
                <button>Aceitar</button>
              <div className={styles.icons}>
                <img src={aviso} alt="Aviso" />
                <img src={salvar} alt="Salvar" />
                <img src={share} alt="Share" />

              </div>
            
          </div>
        </div>
        <hr class="w-100 h-1 mx-auto my-4 bg-customPurple border-0 rounded md:my-10 opacity-80"></hr>

        {/* --------//----------- */}
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <h2>Sobre</h2>
            <p>
              O objetivo é criar uma página simples e moderna para captar
              e-mails de possíveis clientes interessados em nosso produto. A
              página precisa ter um design minimalista, ser responsiva e
              apresentar um formulário básico de captura de e-mail, com botão de
              chamada para ação. Queremos uma entrega rápida e funcional, que
              cause boa impressão ao visitante.
            </p>
          </div>
          <div className={styles.description}>
            <h2>Características</h2>
            <p>
              Design Limpo e Atraente: Criação de uma página visualmente
              agradável, usando uma paleta de cores simples e tipografia clara.
              Formulário de Captura: Implementar um formulário com campo para
              e-mail e botão de inscrição, com mensagens de validação e sucesso.
              Responsividade: A página precisa ser totalmente responsiva e
              otimizada para dispositivos móveis. Otimização para SEO: Código
              otimizado para SEO básico, incluindo meta tags e estrutura HTML
              organizada.
            </p>
          </div>

        
        <div className={styles.tags}>
          <h1>Competências</h1>
          <div className={styles.tagsContents}>
            <div class={styles.tag}>HTML</div>
            <div class={styles.tag}>CSS</div>
            <div class={styles.tag}>JavaScript</div>
            <div class={styles.tag}>React</div>
            <div class={styles.tag}>Node.js</div>
            <div class={styles.tag}>Rest API</div>
            <div class={styles.tag}>Spring Boot</div>
            <div class={styles.tag}>Front-end Integration</div>
            <div class={styles.tag}>API</div>
            <div class={styles.tag}>Sprinf Framework</div>
            <div class={styles.tag}>Bug Fixing</div>
          </div>
        </div>
        </div>

        <hr class="w-100 h-1 mx-auto my-4 bg-customPurple border-0 rounded md:my-10 opacity-80"></hr>

        {/* --------//----------- */}
        <div className={styles.imagesProjects}>
          <div className={styles.arrowleft}>
            <img src={setaEsquerda}  />
          </div>
          <div className={styles.img}>

            <img src={codigo}  />
          </div>
          <div className={styles.arrowRight}>
          <img src={setaDireita}  />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DescricaoDeProjetos;
