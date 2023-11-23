import React from "react";
import { ExpComp } from "../../components/ExpComp/ExpComp";
import { SubtitleComp } from "../../components/SubtitleComp/SubtitleComp";
import centroDeServicioApple from "../../assets/testimonies/centrodeservicio.png";
import fixCity from "../../assets/testimonies/fixcity.png";
import servicioHuawei from "../../assets/testimonies/seviciotecnicohw.png";
import caremobile from "../../assets/testimonies/caremobile.png";
import "./Testimonies.css";
interface TestimoniesProps {
  isMobile: boolean;
}
export const Testimonies = ({ isMobile }: TestimoniesProps) => {
  const workExperience = [
    {
      id: 1,
      autor: "- Pedro, Director de Ventas.",
      description:
        "“Lo que nos hemos ahorrado en pagar anuncios comparado con la inversión en nuestro tráfico orgánico y cuántas ventas nos ha generado hace que valga la pena sin duda alguna”",
      img: caremobile,
    },
    {
      id: 2,
      autor: "- Eliuth, SEO Manager.",
      description:
        "“La cantidad de clientes que nos llegan digitalmente aumentó de 15 a casi 1,000 clientes potenciales al mes”",
      img: fixCity,
    },
    {
      id: 3,
      autor: "- Mario, Director de Ventas",
      description:
        "“El cotizador en línea que ahora tenemos en nuestra página web es sin duda alguna el mejor CRM/Software para obtener más clientes y ventas”",
      img: centroDeServicioApple,
    },

    {
      id: 4,
      autor: "- Karina, Gerente de Ventas.",
      description:
        "“La manera en la que ahora estamos posicionados en Google y las consultas que hacen a nuestro negocio de reparaciones nos ha ayudado a sobrevivir la cuarentena”",
      img: servicioHuawei,
    },
  ];

  return (
    <div id="testimonios" className="testimonios">
      <SubtitleComp
        style={{
          textAlign: isMobile ? "center" : "left",
          marginBottom: "3rem",
        }}
      >
        Lo que nuestros clientes opinan
      </SubtitleComp>

      <ExpComp experiences={workExperience} isMobile={isMobile} />
    </div>
  );
};
