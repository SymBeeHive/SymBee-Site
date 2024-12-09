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
      foto: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRMumG71OhgkIirdNYpGh77y8DIWUzITNaBwFHQ5iLNkTP2pSF6seFF4OoWjTl4LFpbOplAVAe8FLQCDdOj_eB8VSiDfpuJl1UiBIKgi2h",
      conteudo: "Robrocha",
      descricao: "maldição na terra",
    },
    {
      id: 2,
      foto: "https://play-lh.googleusercontent.com/2lTR_1TZ2SFI85eGuUNcsjZwOxvmFysENztKY4Yaivgvd2d5cF_N17Y-XRSk4uQNErk",
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
