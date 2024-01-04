import React from "react";
import "./HowItWorks.css";
import Logo from "../../assets/navIcon/logo.png";

export const HowItWorks = () => {
    return (
        <div id="how-it-works" className="how">
            <div className="wrapper">
                <div className="title-panel">
                    <div className="title-banner">
                        <img src={Logo} alt="toniconecta-logo" />
                    </div>
                    <div>Title content</div>
                </div>
                <div className="info-panel">Mundo</div>
            </div>
        </div>
    );
};
