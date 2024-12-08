import React from "react";
import "./ArmarioHome.css";
import Home from "./components/Home/Home";
import Ranking from "./components/Home/Ranking/Ranking";
import Feed from "./components/Home/Feed";

const ArmarioHome = () => {
  return (
    <>
      <div className="LayoutHomePage">
        <Home />
        <Feed />
        <Ranking />
      </div>
    </>
  );
};

export default ArmarioHome;
