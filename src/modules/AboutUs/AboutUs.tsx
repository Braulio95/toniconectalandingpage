import React from "react";
import "./AboutUs.css";
import aboutUs from "../../assets/aboutUs/aboutus.png";
import { SubtitleComp } from "../../components/SubtitleComp/SubtitleComp";
import { colorPalette } from "../../styles/partials/colors";

interface AboutUsProps {
  isMobile: Boolean;
}

export const AboutUs = ({ isMobile }: AboutUsProps) => {
  const descriptionText =
    "Inspirados por la misión de combatir la complejidad y empoderar a la industria de reparación de dispositivos móviles, ToniConecta nació en 2023 con una visión clara de reinventar la forma en que operan los talleres.\n" +
    "Nos esforzamos por ser líderes en la industria de servicios digitales. Con un enfoque en la simplicidad, la eficiencia y la innovación tecnológica. Nuestra plataforma busca ser la referencia en soluciones simples y intuitivas para propietarios y técnicos, impulsando la transformación digital en el sector.\n" +
    "Con una base tecnológica sólida, ToniConecta se posiciona como un aliado confiable y apasionado. Nuestra misión es fomentar el acceso a servicios de reparación de calidad en todo México, llevando a los talleres a un futuro digital.\n" +
    "ToniConecta, tu socio en la revolución de la reparación, donde la simplicidad y el empoderamiento se encuentran.\n" +
    "Con una base tecnológica sólida, ToniConecta se posiciona como un aliado confiable y apasionado. Nuestra misión es fomentar el acceso a servicios de reparación de calidad en todo México, llevando a los talleres a un futuro digital.\n" +
    "ToniConecta, tu socio en la revolución digital de la reparación de dispositivos móviles en México.";

  const paragraphs = descriptionText
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  if (isMobile) {
    return (
      <div id="sobrenosotros" className="aboutus-mobile">
        <div className="content-container-mobile">
          <div className={`background-video-mobile`}></div>
          <img src={aboutUs} alt="about us" className="video-comp" />
          <SubtitleComp
            style={{
              textAlign: "left",
              marginBottom: "2rem",
              color: colorPalette.accentPurple,
            }}
          >
            Sobre ToniConecta
          </SubtitleComp>
          <div className="description-text">
            {paragraphs}
            <div
              className="description-footer"
              style={{ color: colorPalette.accentPurple, textAlign: "center" }}
            >
              ¡Somos una cultura que repara!
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      id="sobrenosotros"
      className="aboutus"
      style={{ minHeight: "calc(100vh - 80.28px)" }}
    >
      <SubtitleComp
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Sobre ToniConecta
      </SubtitleComp>
      <div className="content-container">
        <div className={`background-video`}></div>
        <img src={aboutUs} alt="about us" />
        <div className="description-text" style={{ maxWidth: 1280 / 2 }}>
          {paragraphs}
          <div
            className="description-footer"
            style={{ color: colorPalette.accentPurple }}
          >
            ¡Somos una cultura que repara!
          </div>
        </div>
      </div>
    </div>
  );
};
