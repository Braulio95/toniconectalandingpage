import React from "react";
import "./App.css";
import NavBarComp from "./components/NavBar/NavBarComp";
import CarrouselComp from "./components/CarrouselComp/CarrouselComp";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <CarrouselComp></CarrouselComp>
    </div>
  );
}

export default App;
