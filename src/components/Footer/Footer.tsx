import React from "react";
import { Linkedin } from "../LinkedinIcon/Linkedin";
import { colorPalette } from "../../styles/partials/colors";
import { GithubIcon } from "../GithubIcon/GithubIcon";

export const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <div className="mt-auto"></div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.05)" }}
      >
        <Linkedin
          height="25px"
          width="25px"
          color={colorPalette.strongestGreen}
        ></Linkedin>
        <GithubIcon
          height="25px"
          width="30px"
          color={colorPalette.strongestGreen}
        ></GithubIcon>
      </div>
    </footer>
  );
};
