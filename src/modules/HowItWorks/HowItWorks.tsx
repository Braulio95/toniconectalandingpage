import React, { useState } from "react";
import "./HowItWorks.css";
import Logo from "../../assets/navIcon/logo.png";
import { SectionTab } from "../../components/SectionTab/SectionTab";
import Carousel from "../../components/Carousel/Carousel";

interface MobileProps {
  isMobile: boolean;
}

const services = [
  {
    name: "Webs y leads",
    description: "Descripcion de webs y leads y mas texto",
  },
  {
    name: "CRM",
    description: "Descripcion del CRM",
  },
];

export const HowItWorks = ({ isMobile }: MobileProps) => {
  const [activeTab, setActiveTab] = useState(services[0].name);
  const [activeDescription, setActiveDescription] = useState(
    services[0].description
  );

  const handleSetActiveDescription = (serviceName: string) => {
    const activeService = services.find(
      (service) => service.name === serviceName
    );
    if (activeService) {
      setActiveDescription(activeService.description);
    }
  };

  const handleActiveTab = (active: string) => {
    return active === activeTab ? true : false;
  };

  const renderSectionTabs = () => {
    return services.map((service) => (
      <SectionTab
        key={service.name}
        title={service.name}
        isActive={handleActiveTab(service.name)}
        onClick={() => {
          setActiveTab(service.name);
          handleSetActiveDescription(service.name);
        }}
      />
    ));
  };

  const titleContainerClass = `title-container ${
    isMobile ? "title-container-mobile" : ""
  }`;
  const titleTextClass = `title-text ${isMobile ? "title-text-mobile" : ""}`;

  return (
    <div id="how-it-works" className="how">
      <div className={`wrapper ${isMobile ? "wrapper-mobile" : ""}`}>
        <div className="title-panel">
          <div className="title-banner">
            <img src={Logo} alt="toniconecta-logo" />
          </div>
          <div className={titleContainerClass}>
            <div className={titleTextClass}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consequuntur laudantium cum aliquid explicabo.
              </p>
              {isMobile ? (
                <Carousel isMobile={isMobile}>{renderSectionTabs()} </Carousel>
              ) : (
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {renderSectionTabs()}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="info-panel">
          <div className="info-container">
            <div className="info-text">{activeDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
