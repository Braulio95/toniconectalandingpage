import React from "react";
import HomeImg from "../../assets/homeImg/giftoni.gif";
import number1 from "../../assets/homeImg/number1.png";
import "./Home.css";

interface HomeProps {
  isMobile: boolean;
}
export const Home = ({ isMobile }: HomeProps) => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: "4rem",
    color: "white",
  };

  const headingStyleMobile = {
    fontWeight: 600,
    fontSize: "3rem",
    color: "white",
  };

  return (
    <div
      id="inicio"
      className="home"
      style={{
        paddingInline: "5%",
        display: "flex",
        height: "100%",
        paddingBlock: "10%",
        marginBottom: "10%",
      }}
    >
      <div
        className="container"
        style={{
          paddingBlock: "3%",
          height: "min-content",
        }}
      >
        <div className="row" style={{ display: "flex" }}>
          <div
            className="col"
            style={
              isMobile
                ? {
                    marginBlock: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }
                : {
                    marginBlock: "5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "right",
                    textAlign: "right",
                  }
            }
          >
            <p style={isMobile ? headingStyleMobile : headingStyle}>
              ¡Tu taller
              <span
                style={{
                  color: "blue",
                  fontWeight: 700,
                  fontSize: "2rem",
                  display: "inline-block",
                  marginInlineStart: "4px",
                }}
              >
                <img
                  src={number1}
                  alt="Number 1"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    marginInlineStart: "4px",
                    objectFit: "contain",
                    verticalAlign: "middle",
                  }}
                />
              </span>{" "}
              en <span style={{ color: "#5c81eb" }}>Google</span>!
            </p>
          </div>
          <div className="col img-container">
            <img
              src={HomeImg}
              alt="Home"
              style={
                isMobile
                  ? {
                      width: "30%",
                      height: "30%",
                      margin: "0 auto",
                      marginTop: "4px",
                      objectFit: "contain",
                      transform: "rotate(-2deg)",
                    }
                  : {
                      width: "291px",
                      margin: "0 auto",
                      marginTop: "4px",
                      objectFit: "contain",
                      transform: "rotate(-5deg)",
                    }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
