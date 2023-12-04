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
      <div id="sobrenosotros" className="aboutus">
        <div className="content-container-mobile">
          <img src={aboutUs} alt="about us image" />
          <SubtitleComp
            style={{
              textAlign: "left",
              marginBottom: "2rem",
              color: colorPalette.accentPurple,
            }}
          >
            Sobre ToniConecta
          </SubtitleComp>
          <div className="description-text">{paragraphs}</div>
        </div>
      </div>
    );
  }
  return (
    <div id="sobrenosotros" className="aboutus">
      <SubtitleComp
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Sobre ToniConecta
      </SubtitleComp>
      <div className="content-container">
        <img src={aboutUs} alt="about us image" />
        <div className="description-text">{paragraphs}</div>
      </div>
    </div>
  );
};
