import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        Clique aqui para ver mais...
      </div>
      <div className={`texto-expandido ${isExpanded ? 'expandido' : ''}`}>
        <p>
          Este é o texto expandido que aparece abaixo quando você clica na
          frase. Aqui você pode adicionar qualquer conteúdo adicional que deseja
          revelar.
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
          Clique aqui para ver mais...
        </div>
        <div className={`texto-expandido ${isExpanded ? 'expandido' : ''}`}>
          <p>
            Este é o texto expandido que aparece abaixo quando você clica na
            frase. Aqui você pode adicionar qualquer conteúdo adicional que deseja
            revelar.
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
        <div className={`texto-expandido ${isExpanded ? 'expandido' : ''}`}>
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
        <h2 className="text-title">Quer ganhar uns frelas?</h2>
        <p className="text-paragraph">
          A Symbee oferece uma plataforma onde você pode encontrar projetos que
          se alinham com suas habilidades e começar a trabalhar rapidamente. Com
          uma variedade de opções, você pode aplicar seus conhecimentos em
          projetos desafiadores, tudo de forma prática e flexível, no seu próprio
          ritmo.
        </p>
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
