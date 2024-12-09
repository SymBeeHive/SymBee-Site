import React from "react";
import styles from "./Assinaturas.module.css";
import Footer from "../footer/Footer";

const Assinaturas = () => {
  return (
    <main>
      <section className={styles.plansSection}>
        <h1>
          Eleve sua jornada de desenvolvimento e conquiste as melhores
          oportunidades com o plano premium!
        </h1>
        <hr className="w-40 h-4 mx-auto my-4 bg-customBlack border-0 rounded md:my-10 opacity-100" />
        <div className={styles.plansContainer}>
          <div className={styles.planWorker}>
            <h2>Operários</h2>
            <hr />
            <div className={styles.iconBee}></div>
            <p className={styles.price}>Gratuito</p>
            <ul className={styles.featuresWorker}>
              <li>🐝 Acesso a 3 projetos mensais</li>
              <li>🎮 Gamificação básica</li>
              <li>💬 Feedback limitado</li>
            </ul>
            <p className={styles.currentLevel}>Você está aqui...</p>
          </div>
          <div className={styles.planQueen}>
            <h2>Rainha</h2>
            <hr />
            <div className={styles.iconBee}></div>
            <p className={styles.price}>Apenas por: <strong>R$39,90!</strong></p>
            <ul className={styles.features}>
              <li>📂 Acesso ilimitado a projetos</li>
              <li>🎮 Gamificação avançada</li>
              <li>💬 Feedback ilimitado</li>
              <li>📧 Prioridade de convites</li>
              <li>🌟 Perfil destacado</li>
              <li>📊 Estatísticas avançadas</li>
            </ul>
            <button className={styles.upgradeButton}>Subir de nível!</button>
          </div>
        </div>
      </section>
      <Footer
        symbee={{ color: "black" }}
        footer={{ backgroundImage: "none" }}
        links={{ color: "black" }}
        icones={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        stroke="black"
      />
    </main>
  );
};

export default Assinaturas;
