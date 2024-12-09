import React from "react";
import styles from "./Assinaturas.module.css";
import abelhaTriste from "./img/abelha.png";
import abelhaFeliz from "./img/abelhaFeliz.png";
import { twMerge } from "tailwind-merge";

const Assinaturas = () => {
  return (
    <section className={styles.plansSection}>
      <h1>
        Eleve sua jornada de desenvolvimento e conquiste as melhores
        oportunidades com o plano premium!
      </h1>
      <hr
        className={twMerge(
          "w-40 h-1 mx-auto my-4 bg-customBlack border-0 rounded md:my-10 opacity-100"
        )}
      />
      <div className={styles.plansContainer}>
        <div className={styles.plan}>
          <h2>Operários</h2>

          <div
            className={twMerge(
              "inline-flex items-center justify-center w-full"
            )}
          >
            <hr className={twMerge("w-64 h-1 my-8 rounded")} />
            <span
              className={twMerge(
                "absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white"
              )}
            >
              <img src={abelhaTriste} alt="" />
            </span>
          </div>

          <p className={styles.price}>Gratuito</p>
          <ul className={styles.featuresWorker}>
            <li>🐝 3 projetos mensais</li>
            <li>🎮 Gamificação básica</li>
            <li>💬 Feedback limitado</li>
          </ul>
          <p className={styles.currentLevel}>Você está aqui...</p>
        </div>
        <div className={styles.plan}>
          <h2>Rainha</h2>

          <div
            className={twMerge(
              "inline-flex items-center justify-center w-full"
            )}
          >
            <hr className={twMerge("w-64 h-1 bg-orange-600 my-8 rounded")} />
            <span
              className={twMerge(
                "absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white"
              )}
            >
              <img src={abelhaFeliz} style={{ transform: "scale(0.65)" }} />
            </span>
          </div>

          <p className={styles.price}>
            Apenas por: <strong>R$39,90!</strong>
          </p>
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
  );
};

export default Assinaturas;
