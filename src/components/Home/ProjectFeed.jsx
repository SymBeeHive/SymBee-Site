import styles from "./ProjectFeed.module.css";
import React from "react";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <img src={props.foto} width={"300px"} height={"50px"} />
      <h3>{props.conteudo}</h3>
      <span>{props.descricao}</span>
    </div>
  );
};

const ProjectFeed = () => {
  const projetos = [
    {
      id: 1,
      foto: "nulo",
      conteudo: "Robrocha",
      descricao: "maldição na terra",
    },
    {
      id: 2,
      foto: "nulo",
      conteudo: "Konoia",
      descricao: "jogo foda",
    },
  ];

  return (
    <section className={styles.projectFeed}>
      {projetos.map((projeto) => (
        <Project
          key={projeto.id}
          foto={projeto.foto}
          conteudo={projeto.conteudo}
          descricao={projeto.descricao}
        />
      ))}
    </section>
  );
};

export default ProjectFeed;
