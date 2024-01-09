import React from "react";
import "./HowItWorks.css";
import Logo from "../../assets/navIcon/logo.png";
import { SectionTab } from "../../components/SectionTab/SectionTab";
import Carousel from "../../components/Carousel/Carousel";
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
          <div
            className={`title-container ${
              isMobile ? "title-container-mobile" : ""
            }`}
          >
            <div
              className={`title-text ${isMobile ? "title-text-mobile" : ""}`}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consequuntur laudantium cum aliquid explicabo.
              </p>
              {isMobile ? (
                <Carousel isMobile={isMobile}>
                  <SectionTab title="Webs y leads" />
                  <SectionTab title="CRM" />
                </Carousel>
              ) : (
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <SectionTab title="Webs y leads" />
                  <SectionTab title="CRM" />
                </div>
              )}
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
