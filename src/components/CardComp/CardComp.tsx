import Card from "react-bootstrap/Card";
import { GithubIcon } from "../Icons/GithubIcon/GithubIcon";
import { colorPalette } from "../../styles/partials/colors";
import { LiveDemo } from "../Icons/LiveDemo/LiveDemo";
import { StrongComp } from "../StrongComp/StrongComp";
import { useState } from "react";
import { CardCompProps } from "../../types/interfaces/CardCompProps";
import { ImageNotIcon } from "../Icons/ImageNotIcon/ImageNotIcon";

function CardComp({
  id,
  img,
  title,
  linkLiveDemo,
  LinkGitHubRepo,
}: CardCompProps) {
  const [LiveDemoHovered, setLiveDemoHovered] = useState(false);
  const [GithubHovered, setGithubDemoHovered] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleLiveDemoMouseEnter = () => {
    setLiveDemoHovered(true);
  };

  const handleLiveDemoMouseLeave = () => {
    setLiveDemoHovered(false);
  };

  const GithubDemoMouseEnter = () => {
    setGithubDemoHovered(true);
  };

  const GithubDemoMouseLeave = () => {
    setGithubDemoHovered(false);
  };

  const handleImageLoadError = () => {
    setImageLoadError(true);
  };
  return (
    <Card
      key={id}
      style={{
        width: "100%",
        maxHeight: "256px",
        border: "none",
        boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)`,
      }}
    >
      {imageLoadError ? (
        <ImageNotIcon
          width="180px"
          height="180px"
          color={colorPalette.strongestGreen}
          style={{ margin: "0 auto", paddingBlock: "10%" }}
        />
      ) : (
        <Card.Img
          variant="top"
          src={img}
          onError={handleImageLoadError}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
      )}
      <Card.Body style={{ display: "flex", maxHeight: "72px" }}>
        <Card.Title style={{ flexGrow: "1" }}>
          <StrongComp color={colorPalette.strongGreen}>{title}</StrongComp>
        </Card.Title>
        <div
          style={{
            maxHeight: "40px",
            maxWidth: "78px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href={linkLiveDemo}>
            <LiveDemo
              onMouseEnter={handleLiveDemoMouseEnter}
              onMouseLeave={handleLiveDemoMouseLeave}
              width={"40px"}
              height={"40px"}
              color={colorPalette.strongestGreen}
              style={{
                marginInline: "4px",
                cursor: "pointer",
                transform: LiveDemoHovered ? "scale(1.25)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            />
          </a>
          {LinkGitHubRepo ? (
            <a href={LinkGitHubRepo}>
              <GithubIcon
                onMouseEnter={GithubDemoMouseEnter}
                onMouseLeave={GithubDemoMouseLeave}
                width="28px"
                height="32px"
                color={colorPalette.strongestGreen}
                style={{
                  cursor: "pointer",
                  transform: GithubHovered ? "scale(1.25)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              />
            </a>
          ) : (
            <></>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
