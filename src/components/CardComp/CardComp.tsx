import Card from "react-bootstrap/Card";
import { GithubIcon } from "../Icons/GithubIcon/GithubIcon";
import { colorPalette } from "../../styles/partials/colors";
import { LiveDemo } from "../Icons/LiveDemo/LiveDemo";
import { StrongComp } from "../StrongComp/StrongComp";
import { useState } from "react";

function CardComp() {
  const [LiveDemoHovered, setLiveDemoHovered] = useState(false);
  const [GithubHovered, setGithubDemoHovered] = useState(false);

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
  return (
    <Card
      style={{
        width: "100%",
        border: "none",
        boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)`,
      }}
    >
      <Card.Img
        variant="top"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a9104d840%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a9104d840%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      />
      <Card.Body style={{ display: "flex", maxHeight: "72px" }}>
        <Card.Title style={{ flexGrow: "1" }}>
          <StrongComp color={colorPalette.strongGreen}>Card Title</StrongComp>
        </Card.Title>
        <div
          style={{
            maxHeight: "40px",
            maxWidth: "78px",
            display: "flex",
            alignItems: "center",
          }}
        >
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
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
