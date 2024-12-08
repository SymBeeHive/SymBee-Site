import { useNavigate } from "react-router-dom";
import "./Bio.css";
import React, { useState } from "react";
const Bio = () => {
  const [bioText, setBioText] = useState("");
  const maxLength = 500;

  const navegar = useNavigate();
  const handleTags = () => {
    navegar("/tags");
  };
  const handleBack = () => {
    navegar("/cargo");
  };

  return (
    <section>
      <div className="PositionContainer">
        <div className="LayoutContainer">
          <div className="TitleContainerBio">
            <h1>Nos fale um pouco sobre você</h1>
          </div>
          <div className="Biograph">
            <p>Biográfia</p>
            <div className="BioContainer">
              <textarea
                id="bioTextarea"
                className="BioTextarea"
                placeholder="Escreva sua biografia..."
                maxLength={maxLength}
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
              />
              <span className="CharCount">
                {bioText.length}/{maxLength}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ButtonContainer">
        <button onClick={handleBack} className="botao" >Voltar</button>
        <button onClick={handleTags} className="botao" >Pular</button>
        <button onClick={handleTags} className="botao" >Continuar</button>
      </div>
    </section>
  );
};

export default Bio;
