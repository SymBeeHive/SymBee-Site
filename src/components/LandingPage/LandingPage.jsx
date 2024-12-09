import "../../../src/App.css";
import styles from "./LandingPage.module.css";
import React from "react";
import Secao from "./Section/Section";
import Section2 from "./Section 2/Section2";
import Footer from "../footer/Footer";
import NavBarResponsiva from "../NavBarResponsiva/NavBarResponsiva";
import Carrossel from "./Section 3 Rework/Section3";
import Section4Rework from "./Section 4 Rework/Section4";
import CarrosselParcerias from "./Parcerias/Parcerias";
import ParallaxText from "../ParallaxText/ParallaxText";
import Comercial from "../Comercial/Comercial";
import Assinaturas from "../Assinaturas/Assinaturas";

function LandingPage() {
  return (
    <main>
      <NavBarResponsiva />
      <Secao />
      <Section2 />
      <Section4Rework />
      <Comercial />
      <Carrossel />

      <section className={styles.daisySection}>
        <Assinaturas />
        <CarrosselParcerias />
        <Footer stroke="#eaeaea" />
      </section>
    </main>
  );
}

export default LandingPage;
