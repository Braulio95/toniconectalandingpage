import React from "react";
import HomeImg from "../../assets/homeImg/giftoni.gif";
import "./Home.css";

interface HomeProps {
    isMobile: boolean;
}
export const Home = ({ isMobile }: HomeProps) => {
    const headingStyle = {
        fontWeight: 400,
        fontSize: "2.5rem",
        color: "black",
        width: "content",
    };

    const headingStyleMobile = {
        fontWeight: 600,
        fontSize: "3rem",
        color: "black",
    };

    return (
        <div id="inicio" className="home">
            <div className="container">
                <div
                    style={{
                        position: "absolute",
                        zIndex: "-1",
                        width: "45%",
                        height: "620px",
                        backgroundColor: "#BFBFBF",
                        opacity: "50",
                        right: "0",
                    }}
                ></div>
                <div
                    className="row"
                    style={{ display: "flex", marginRight: "20%" }}
                >
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
                                      alignItems: "left",
                                      textAlign: "left",
                                  }
                        }
                    >
                        <p style={isMobile ? headingStyleMobile : headingStyle}>
                            ¡Tu taller{" "}
                            <span
                                style={{
                                    fontWeight: 700,
                                    fontSize: "4rem",
                                    display: "inline-block",
                                    color: "#5c81eb",
                                }}
                            >
                                #1
                            </span>{" "}
                            en <span style={{ color: "#5c81eb" }}>Google</span>!
                        </p>
                    </div>
                    <img
                        className={
                            isMobile ? "animated-gif-mobile" : "animated-gif"
                        }
                        src={HomeImg}
                        alt="Home"
                    />
                </div>
            </div>
        </div>
    );
};
