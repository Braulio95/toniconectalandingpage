import React from "react";
import HomeImg from "../../assets/homeImg/giftoni.gif";
import { Button } from "../../components/Button/Button";
import "./Home.css";

interface HomeProps {
    isMobile: boolean;
}
export const Home = ({ isMobile }: HomeProps) => {
    return (
        <div id="inicio" className="home">
            <div className="container">
                <div
                    className={`background-gif ${
                        isMobile ? "background-gif-mobile" : ""
                    }`}
                ></div>
                <div
                    className="row"
                    style={{
                        display: "flex",
                        marginRight: isMobile ? 0 : "20%",
                    }}
                >
                    <div
                        className={`col format ${
                            isMobile ? "format-mobile" : ""
                        }`}
                    >
                        <p
                            className={`heading-style${
                                isMobile ? "heading-style-mobile" : ""
                            }`}
                        >
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos voluptas, quibusdam laudantium ratione
                            eius reiciendis. Eos repellat neque debitis iste
                            provident, quasi esse corporis eveniet voluptas
                            consequuntur qui aperiam obcaecati!
                        </p>
                        <div className="button-container">
                            <Button
                                text="Solicitar una prueba"
                                textColor="white"
                                color="#5c81eb"
                            />
                        </div>
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
