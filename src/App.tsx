import React from "react";
import { MainRoutes } from "./router/MainRoutes";
import { ParticleBg } from "./components/ParticleBg/ParticleBg";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <ParticleBg />
      <MainRoutes />
    </div>
  );
}

export default App;
