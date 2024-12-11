import "./Parcerias.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tevejo from "./img/tevejo.jpg";
import devance from "./img/Devance.png";
import noolar from './img/noolar.png'

function CarrosselParcerias() {
  // Lista de imagens
  const imagens = [
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
    tevejo,
    devance,
    noolar,
  ];

  // Duplique a lista para criar um efeito de looping
  const imagensDuplicadas = [...imagens, ...imagens];

  return (
    <section className="logos">
      <h3>Quem está conosco?</h3>
      <div className="logos-slide">
        {imagensDuplicadas.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default CarrosselParcerias;
