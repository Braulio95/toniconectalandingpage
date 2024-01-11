import React from "react";
import "./TestimonieCard.css";

interface TestimonieCardProps {
  description: string;
  author: string;
  image: string;
  isMobile: boolean;
}

export const TestimonieCard = ({
  description,
  author,
  image,
  isMobile,
}: TestimonieCardProps) => {
  return (
    <div
      style={{
        width: isMobile ? "85%" : "360px",
        height: "300px",
        background: "white",
        borderRadius: "15px",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        padding: "24px",
      }}
    >
      <p>{description}</p>
      <div className="linea-negra"></div>
      <p>{author}</p>
      <img src={image} alt="" style={{ height: "70px" }} />
    </div>
  );
};
