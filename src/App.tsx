import React, { useEffect, useState } from "react";
import { MainRoutes } from "./router/MainRoutes";

function App() {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth / window.innerHeight <= 3 / 4
    );

    // Function to handle window resize events and determine if the screen has a mobile-like (vertical) or desktop-like (horizontal) aspect ratio
    const handleResize = () => {
        setIsMobile(window.innerWidth / window.innerHeight <= 3 / 4);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="App"
            style={{
                position: "relative",
                fontFamily: "Roboto Mono",
            }}
        >
            <h1 style={{ display: "none" }}>
                Toni Conecta - Posicionar en Google numero 1 para talleres de
                reparacion - SEO para talleres de reparacion
            </h1>
            <h2 style={{ display: "none" }}>
                Toni Conecta - Aparecer numero 1 en Google para talleres de
                servicio tecnico
            </h2>
            <MainRoutes isMobile={isMobile} />
        </div>
    );
}

export default App;
