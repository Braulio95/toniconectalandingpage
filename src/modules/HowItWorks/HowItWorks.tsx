import React from "react";
import "./HowItWorks.css";
import Logo from "../../assets/navIcon/logo.png";
import { SectionTab } from "../../components/SectionTab/SectionTab";
interface MobileProps {
  isMobile: boolean;
}

export const HowItWorks = ({ isMobile }: MobileProps) => {
  return (
    <div id="how-it-works" className="how">
      <div className={`wrapper ${isMobile ? "wrapper-mobile" : ""}`}>
        <div className="title-panel">
          <div className="title-banner">
            <img src={Logo} alt="toniconecta-logo" />
          </div>
          <div className="title-container">
            <div className="title-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consequuntur laudantium cum aliquid explicabo.
              </p>
              <SectionTab />
              <SectionTab />
              <SectionTab />
            </div>
          </div>
        </div>
        <div className="info-panel">
          <div className="info-container">
            <div className="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              asperiores itaque, a rerum vitae non omnis fuga excepturi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
