import React from "react";
import { SubtitleCompProps } from "../../types/interfaces/SubtitleCompProps";
import { colorPalette } from "../../styles/partials/colors";

export const SubtitleComp = ({ children }: SubtitleCompProps) => {
  const subHeadingStyle = {
    color: colorPalette.strongestAzure,
    fontWeight: "lighter",
    marginInline: "auto",
  };
  return <h2 style={subHeadingStyle}>{children}</h2>;
};
