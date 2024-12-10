import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import teclando from "./gif/gifAbelhaNotebook.gif";
import "./Frelas.css";

// Componente ExpandableText
const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-container">
      <div className="frase" onClick={handleClick}>
        Encontre projetos sob medida
      </div>
      <div className={`texto-expandido ${isExpanded ? "expandido" : ""}`}>
        <p>
          Descubra trabalhos que se encaixam nas suas habilidades, desenvolva
          sua experiência profissional e receba por cada entrega concluída com
          sucesso.
        </p>
      </div>
    </div>
  );
};

const ExpandableText2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-container">
      <div className="frase" onClick={handleClick}>
        Trabalhe no seu próprio ritmo
      </div>
      <div className={`texto-expandido ${isExpanded ? "expandido" : ""}`}>
        <p>
          Escolha os projetos que deseja realizar e trabalhe no seu próprio
          ritmo, sem horários fixos. Tenha total flexibilidade e liberdade para
          conciliar sua vida pessoal e profissional enquanto alcança seus
          objetivos.
        </p>
      </div>
    </div>
  );
};

const ExpandableText3 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-container">
      <div className="frase" onClick={handleClick}>
        Clique aqui para ver mais...
      </div>
      <div className={`texto-expandido ${isExpanded ? "expandido" : ""}`}>
        <p>
          Este é o texto expandido que aparece abaixo quando você clica na
          frase. Aqui você pode adicionar qualquer conteúdo adicional que deseja
          revelar.
        </p>
      </div>
    </div>
  );
};

function Frelas() {
  const navigate = useNavigate();
  const handleNavegar = () => {
    navigate("/cadastro");
  };

  return (
    <section className="container-text">
      <div className="box-text">
        <h2 className="text-title">Quer ganhar uns freelas?</h2>
        <div className="text-notebook">
          <p className="text-paragraph">
            A Symbee oferece uma plataforma onde você pode encontrar projetos
            que se alinham com suas habilidades e começar a trabalhar
            rapidamente. Com uma variedade de opções, você pode aplicar seus
            conhecimentos em projetos desafiadores, tudo de forma prática e
            flexível, no seu próprio ritmo.
          </p>
          <img className="computador" src={teclando} />
        </div>

        <a className="btn" onClick={handleNavegar} role="button">
          Conhecer agora! <br />
        </a>
        {/* Inserindo o ExpandableText dentro de Frelas */}
        <ExpandableText />
        <ExpandableText2 />
        <ExpandableText3 />
      </div>
    </section>
  );
}

export default Frelas;
