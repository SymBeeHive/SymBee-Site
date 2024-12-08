import React from "react";
import "./OutletProjectFeed.css";
import Home from "./components/Home/Home";
import Ranking from "./components/Home/Ranking/Ranking";
import Feed from "./components/Home/ProjectFeed";
import ProjectFeed from "./components/Home/ProjectFeed";

const OutletProjectFeed = () => {
  return (
    <>
      <div className="LayoutHomePage">
        <Home />
        <ProjectFeed/>
        <Ranking />
        
      </div>
    </>
  );
};

export default OutletProjectFeed;
