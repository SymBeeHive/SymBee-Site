import React from "react";
import styles from "./Section2.module.css";
import mel from "../img/lower-liquify-section2.svg";
import Num from "../../Home/Ranking/Num";
import Rank from "../../Home/Ranking/Ranking2";

function Section2() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.info}>
          <h1 className={styles.subTitle}>Alcance o topo!</h1>
          <span id={styles.description}>
            Mostre que você é o melhor no que faz:
          </span>
          <div className={styles.beehive}>
            <span className={styles.honey}>Fazendo projetos;</span>
            <span className={styles.honey}>Praticando a simbiose;</span>
            <span className={styles.honey}>Participando de eventos;</span>
            <span className={styles.honey}>Interagindo com a comunidade;</span>
            <span className={styles.honey}>Ganhando conquistas;</span>
            <span className={styles.honey}>Mantendo-se ativo;</span>
            <span className={styles.honey}>Desafiando-se;</span>
          </div>
        </div>
        <div className={styles.users_ranking}>
          <Rank/>
        </div>
      </section>
      <img src={mel} style={{position: 'relative', zIndex: '1'}} />
    </>
  );
}

export default Section2;