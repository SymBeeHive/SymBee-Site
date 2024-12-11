import { createRoot } from "react-dom/client";
import LandingPage from "./components/LandingPage/LandingPage";
import Cadastro from "./components/Cadastro/Cadastro";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EscolhaDePerfil from "./components/EscolhadePerfil/EscolhaDePerfil";
import Premium from "./components/Premium/Premium";
import Login from "./components/Login/Login";
import Cargo from "./components/Cargo/Cargo";
import CargoEstudante from "./components/CargoEstudante/CargoEstudante";
import Bio from "./components/Bio/Bio";
import FimJornada from "./components/FimJornada/FimJornada";
import Armario from "../Armario";
import ArmarioHome from "./ArmarioHome";
import ArmarioPerfil from "./ArmarioPerfil"
import SobreNos from "./components/Sobre nós/SobreNos";
import DescricaoDeProjetos from "./components/Descrição dos Projetos/DescricaoDeProjetos";
import Contato from "./components/Contato/Contato";
import Error from "./components/404/Error";
import Tags from "./components/Assinaturas/Tags/Tags";
import OutletProjectFeed from "./OutletProjectFeed";
import Rank from "./components/Home/Ranking/Ranking2";


createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Armario />}>
        <Route index element={<LandingPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-choice" element={<EscolhaDePerfil />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/estudante" element={<CargoEstudante />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/tags" element={<Tags/>} />
        <Route path="/end" element={<FimJornada />} />
        <Route path="/home" element={<ArmarioHome />} />
        <Route path="/perfil" element={<ArmarioPerfil />} />
        <Route path="/aboutUs" element={<SobreNos />}/>
        <Route path="/projectDescription" element={<DescricaoDeProjetos />}/>
        <Route path="*" element={<Error />}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/dev" element={<OutletProjectFeed/>}/>
        <Route path="/Rank" element={<Rank/>}/>
      </Route>
    </Routes>
  </Router>
);
