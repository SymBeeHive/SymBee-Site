import { useNavigate } from "react-router-dom";
import "./Tags.css";
import React from "react";
import Lupasvg from "./img/lupasvg";

const Tags = () => {
  const navegar = useNavigate();
  const handlePremium = () => {
    navegar("/premium");
  };

  return (
    <section id="tags">
      <div className="tagsPage">
        <div className="layoutTags">
          <div className="tagsTitle">
            <h1>Escolha tags que são relevantes para você</h1>
          </div>
          <div className="SubtitleTags">
            <p>Seja o mais específico possível.</p>
          </div>
          <div className="search">
            <div className="input-icon">
              <Lupasvg />
            </div>
            <input type="text" placeholder="Outra..." class="input-field" />
          </div>
          <div className="tagsLanguages">
          
            <div class="tag">Java</div>
            <div class="tag">React</div>
            <div class="tag">API</div>
            <div class="tag">C++</div>
            <div class="tag">Kotlin</div>
            <div class="tag">Lua</div>
            <div class="tag">JavaScript</div>
            <div class="tag">Ruby</div>
            <div class="tag">TypeScript</div>
            <div class="tag">PHP</div>
            <div class="tag">MongoDB</div>
            <div class="tag">Bootstrap</div>
            <div class="tag">C</div>
            <div class="tag">Go Lang</div>
            <div class="tag">Design</div>
            <div class="tag">Cobol</div>
            <div class="tag">MySQL</div>
          </div>
        </div>
      </div>
      <div className="buttonArea">
        <div className="continueButton">
          <button onClick={handlePremium}>Continuar</button>
        </div>
      </div>
    </section>
  );
};

export default Tags;
