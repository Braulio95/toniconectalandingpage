import React from "react";
import "./App.css";
import CardComp from "./components/CardComp/CardComp";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CardComp />
      </div>
    </ThemeProvider>
  );
}

export default App;
