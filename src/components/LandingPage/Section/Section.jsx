import React from "react";
import styles from "./Section.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Anim(props) {
  return (
    <>
      <div className={styles.beeCard}>
        <img
          src={props.sprite}
          width="-250px"
          style={{ transform: "rotateY(180deg)" }}
        />
        <div className={styles.content}>
          <span className={styles.title}>{props.titulo}</span>
          <span className={styles.desc}>{props.description}</span>
        </div>
      </div>
    </>
  );
}

function Secao() {
  const navegar = useNavigate();
  const handleNavegar = () => {
    navegar("/cadastro");
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1>Comece agora e descubra o poder da simbiose.</h1>
          <span>Projetos que crescem, talentos que enriquecem.</span>
          <a class="btn" onClick={handleNavegar} role="button">
            Conhecer agora! <br />
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className={styles.group}>
          <Anim
            sprite="./img/gifs/BeeIdle.webp"
            titulo="Está sem seu girassol?"
            description="Não precisa trabalhar sozinho! você pode convidar outras pessoas para colaborar nos projetos."
          />
          <Anim
            sprite="./img/gifs/BeeHurt.webp"
            titulo="Quem está na colmeia?"
            description="A SymBee nasceu para diminuir a dificuldade dos desenvolvedores em encontrarem um freelance."
          />
          <Anim
            sprite="./img/gifs/BeeDizzy.webp"
            titulo="Não sabe onde está a colmeia?"
            description="Apenas aperte o botão acima e comece sua jornada na melhor plataforma de freelance dev!"
          />
        </div>
      </section>
    </>
  );
}

export default Secao;
