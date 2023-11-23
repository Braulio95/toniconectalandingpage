import React from "react";
import { SubtitleCompProps } from "../../types/interfaces/SubtitleCompProps";

export const SubtitleComp = ({ children, style }: SubtitleCompProps) => {
  const subHeadingStyle = {
    color: "#5c81eb",
    fontSize: "3rem",
    marginInline: "auto",
    ...style,
  };
  return <h2 style={subHeadingStyle}>{children}</h2>;
};
