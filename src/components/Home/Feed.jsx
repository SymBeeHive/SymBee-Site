import "./Feed.css";
import Bee from "./assets/Bee.jsx";
import React from "react";
import Kay from "./img/kay.png";
import PaperPlane from "./img/aviãoDePapel.png";
import Heart from "./img/coração.png";
import Ballon from "./img/balão.png";
import Verify from "./img/verify.png";
import Flag from "./img/bandeira.webp"
import Ehxis from "./img/ehxis.png"
import Third from "./img/terceiro.jpg"

const Feed = () => {
  return (
    <section className="feed">
      <div className="feedLayout">
        <div className="post">
          <div className="postHeader">
            <div className="imagePerfil">
              <Bee stroke="#000000" />
            </div>
            <div className="namePerfil">
              <p>Kay_boujour</p>
            </div>
            <div className="decorationNamePerfil">
              <p>.</p>
            </div>
            <div className="explication">
              <p>Atingiu a marca de 5 dias em primeiro lugar em nosso pódio!</p>
            </div>
          </div>
          <div className="publication">
            <img src={Kay} alt="Imagem exemplo de uma publicação" />
            <div className="iconComents">
              <div className="leftIcons">
                <img src={Ballon} alt="icone de balão de diálogo" />
                <img src={PaperPlane} alt="icone de avião de papel" />
              </div>
              <div className="rightIcon">
                <img src={Flag} alt="icone de Bandeira" />
              </div>
            </div>
            <div className="coments">
              <div className="nameComents">
                <p>Kay_bonjour</p>
                <img
                  src={Verify}
                  alt="icone de verificado"
                  className="verificatedIcon"
                />
              </div>
              <div className="comentsText">
                <p>
                  Muito feliz de seguir em primeiro, gratidão a deus e a frase
                  é: “9,5 não me contenta quero o maldito primeiro lugar do
                  pódio”. #TantasBrigasSemNescessidade
                </p>
              </div>
            </div>
            <div className="moreComents">
              <p>Ver todos os 1250 comentários</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="postHeader">
            <div className="imagePerfil">
              <Bee stroke=" blue" />
            </div>
            <div className="namePerfil">
              <p>KyanMaloca</p>
            </div>
            <div className="decorationNamePerfil">
              <p>.</p>
            </div>
            <div className="explication">
              <p>Atingiu o segundo lugar no ranking!</p>
            </div>
          </div>
          <div className="publication">
            <img src={Ehxis} alt="Imagem exemplo de uma publicação" />
            <div className="iconComents">
              <div className="leftIcons">
                <img src={Heart} alt="icone de coração" />
                <img src={Ballon} alt="icone de balão de diálogo" />
                <img src={PaperPlane} alt="icone de avião de papel" />
              </div>
              <div className="rightIcon">
                <img src={Flag} alt="icone de Bandeira" />
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="postHeader">
            <div className="imagePerfil">
              <Bee stroke="green" />
            </div>
            <div className="namePerfil">
              <p>takeshi_SixNine</p>
            </div>
            <div className="decorationNamePerfil">
              <p>.</p>
            </div>
            <div className="explication">
              <p>Tem a honra de dizer que conseguiu alcançar o ranking, parabéns!</p>
            </div>
          </div>
          <div className="publication">
            <img src={Third} alt="Imagem exemplo de uma publicação" />
            <div className="iconComents">
              <div className="leftIcons">
                <img src={Heart} alt="icone de coração" />
                <img src={Ballon} alt="icone de balão de diálogo" />
                <img src={PaperPlane} alt="icone de avião de papel" />
              </div>
              <div className="rightIcon">
                <img src={Flag} alt="icone de Bandeira" />
              </div>
            </div>
            <div className="coments">
              <div className="nameComents">
                <p>takeshi_SixNine</p>
                <img
                  src={Verify}
                  alt="icone de verificado"
                  className="verificatedIcon"
                />
              </div>
              <div className="comentsText">
                <p>
                  Todo o esforço feito sempre será recompensado,obrigado Symbee por ser tão completa #buzzbuzz
                </p>
              </div>
            </div>
            <div className="moreComents">
              <p>Ver todos os 500 comentários</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
