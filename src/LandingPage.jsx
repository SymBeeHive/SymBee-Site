import "./App.css";
import React from "react";
import Secao from "./components/LandingPage/Section/Section";
import Section2 from "./components/LandingPage/Section 2/Section2";
import Footer from "./components/footer/Footer";
import NavBarResponsiva from "./components/NavBarResponsiva/NavBarResponsiva";
import Carrossel from "./components/LandingPage/Section 3 Rework/Section3";
import Section4Rework from "./components/LandingPage/Section 4 Rework/Section4";
import CarrosselParcerias from "./components/LandingPage/Parcerias/Parcerias";


function LandingPage() {

  return (
    <main id="landing-page">
      <NavBarResponsiva />
      <Secao />
      <Section2 />
      <Carrossel />
      <Section4Rework />
      <CarrosselParcerias/>
      <Footer stroke="#eaeaea"/>
    </main>
  );
}

export default LandingPage;
