import styles from "./ProjectFeed.module.css";
import React from "react";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <img src={props.foto} />
      <h3>{props.conteudo}</h3>
      <span>{props.descricao}</span>
    </div>
  );
};

const ProjectFeed = () => {

  const projetos = [
    {foto: "", }
  ]

  return <section className={styles.projectFeed}>
    {}
  </section>;
};

export default ProjectFeed;
