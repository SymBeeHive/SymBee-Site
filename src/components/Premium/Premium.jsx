import { useNavigate } from "react-router-dom";
import "./Premium.css";
import Design from "./img/design.png";
import React from "react";

const Premium = () => {
  const navegar = useNavigate();
  const handleBack = () => {
    navegar("/tags");
  };
  const handleEnd = () => {
    navegar("/end");
  };

  return (
    <section className="PremiumPage">
      <div className="PremiumPageLayout">
        <div className="PremiumPageContent">
          <div className="instruction">
            <div className="instructionTxt">
              <p>
                Membros do nosso plano têm uma análise profissional de agentes
                qualificados e uma IA, além de um aumento de perfil!
              </p>
            </div>
            <div className="garanta">
              <h2>Apenas por R$ 39,90</h2>
              <button onClick={handleEnd}>Garanta já</button>
            </div>
          </div>
        </div>
        <div className="contentImage">
          <img src={Design} alt="image security" />
            <p>
              Nosso sistema de pagamento garante a total confiabilidade ao nosso
              usuário, todas as transações são rigorosamente verificadas!
            </p>
        </div>
        <div className="btnText text-white">
          <button onClick={handleEnd}>Não obrigado!</button>
        </div>
      </div>
      <div className="buttonDiv">
        <button className="button" onClick={handleBack}>
          Voltar
        </button>
      </div>
    </section>
  );
};

export default Premium;
