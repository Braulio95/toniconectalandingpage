import React from "react";
import { SubtitleCompProps } from "../../types/interfaces/SubtitleCompProps";

export const SubtitleComp = ({ children }: SubtitleCompProps) => {
  const subHeadingStyle = {
    color: "#5c81eb",
    fontSize: "3rem",

    marginInline: "auto",
  };
  return <h2 style={subHeadingStyle}>{children}</h2>;
};
