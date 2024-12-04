import React from 'react'
import "./section3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';





function Carrossel() {
  
  return (
    <section className="section3-Swiper">
      <Swiper
      effect={ 'coverflow' }
      grabCursor={ true }
      centeredSlides={ true }
      loop={ false }
      
      slidesPerView={ '5' }
      initialSlide={5}
      coverflowEffect={
        {
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 2.5,
        }
      }   

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        
       className="swiper_container">
        
        
        <SwiperSlide >
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Facilidade</span> de Acessolidade</h3>
            <p className='swiper-cards-paragrph'>A SymBee oferece uma interface intuitiva e fácil de usar, permitindo que empresas e desenvolvedores se conectem rapidamente. Com um sistema simplificado, o processo de encontrar e publicar projetos é ágil, tornando a plataforma acessível para todos.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'>Benefícios para <span className='swiper-cards-title-palavra'>Empresas</span></h3><p className='swiper-cards-paragrph'>Empresas podem publicar seus projetos e gerenciar suas demandas com eficiência. A plataforma oferece uma visão clara do progresso e a possibilidade de interagir diretamente com desenvolvedores qualificados, garantindo que os projetos sejam realizados de forma eficaz e dentro do prazo.</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Benefícios</span> para Desenvolvedores</h3><p className='swiper-cards-paragrph'>Desenvolvedores têm acesso a uma ampla gama de projetos que correspondem às suas habilidades e interesses. A plataforma assegura pagamentos justos e transparentes, além de proporcionar oportunidades de crescimento profissional e experiência prática.</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'>Modelos de <span className='swiper-cards-title-palavra'>Monetização</span></h3><p className='swiper-cards-paragrph'>A SymBee oferece planos pagos para empresas e desenvolvedores, com benefícios exclusivos em cada categoria. Esses planos são desenhados para maximizar a colaboração entre as partes, incentivando o sucesso tanto para empresas quanto para desenvolvedores.</p></div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='swiper-cards'><h3 className='swiper-cards-title'>Projetos <span className='swiper-cards-title-palavra'>Simbióticos</span></h3>
            <p>O conceito por trás do nome "SymBee" é a simbiose: uma colaboração mútua entre empresas e desenvolvedores. A plataforma visa criar um ambiente em que ambas as partes se beneficiam igualmente, simbolizando uma troca de valor que fortalece o ecossistema.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Suporte </span>total ao Usuário</h3><p className='swiper-cards-paragrph'>A SymBee se compromete a oferecer suporte contínuo para garantir que todos os usuários tenham a melhor experiência possível. Nossa equipe de atendimento está disponível para esclarecer dúvidas e ajudar tanto empresas quanto desenvolvedores a aproveitar ao máximo a plataforma.
          </p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'>Segurança e<span className='swiper-cards-title-palavra'> Confiança</span></h3><p className='swiper-cards-paragrph'>A SymBee prioriza a segurança e a confiabilidade de todas as transações e interações na plataforma. Com sistemas de pagamento seguros e uma política rigorosa de proteção de dados, garantimos que tanto empresas quanto desenvolvedores se sintam seguros ao utilizar nossos serviços.</p></div>
        </SwiperSlide>
       

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>

      </Swiper>
    </section>
  )
}

export default Carrossel;