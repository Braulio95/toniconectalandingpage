import React from "react";
import { ExpProps } from "../../types/interfaces/ExpProps";
import "./ExpComp.css";

export const ExpComp = ({ experiences, isMobile }: ExpProps) => {
    if (isMobile) {
        return (
            <div id="exp-container">
                {experiences.map(({ id, autor, description, img }, index) => {
                    return (
                        <div
                            key={id}
                            style={{
                                textAlign: "center",
                                marginBottom: "6rem",
                            }}
                        >
                            <div
                                style={{
                                    textAlign: "center",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <img
                                    src={img}
                                    alt={description}
                                    style={{
                                        height: "100px",
                                        margin: "0 auto",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "auto",
                                }}
                            >
                                <p
                                    style={{
                                        color: "white",
                                        fontSize: "1rem",
                                        fontWeight: 400,
                                        marginBottom: 0,
                                    }}
                                >
                                    {description}
                                </p>
                                <p
                                    style={{
                                        color: "white",
                                        fontSize: "1.2rem",
                                        fontWeight: 700,
                                        marginBottom: 0,
                                    }}
                                >
                                    {autor}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <div id="exp-container" className="container">
            {experiences.map(({ id, autor, description, img }, index) => {
                const isImageOnLeft = index % 2 === 0;
                return (
                    <div
                        className="row"
                        key={id}
                        style={{
                            display: "flex",
                            marginBottom: "6rem",
                        }}
                    >
                        <div
                            className="col"
                            style={{
                                textAlign: "right",
                            }}
                        >
                            {isImageOnLeft ? (
                                <img
                                    src={img}
                                    alt={description}
                                    style={{
                                        height: "120px",
                                        margin: "0 auto",
                                    }}
                                />
                            ) : (
                                <div>
                                    <p
                                        style={{
                                            color: "white",
                                            fontSize: "1rem",
                                            fontWeight: 400,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {description}
                                    </p>
                                    <p
                                        style={{
                                            color: "white",
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {autor}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div
                            className="col"
                            style={
                                isImageOnLeft
                                    ? {
                                          display: "flex",
                                          flexDirection: "column",
                                          overflow: "auto",
                                          marginBlock: "auto",
                                      }
                                    : { textAlign: "left" }
                            }
                        >
                            {isImageOnLeft ? (
                                <>
                                    <p
                                        style={{
                                            color: "white",
                                            fontSize: "1rem",
                                            fontWeight: 400,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {description}
                                    </p>
                                    <p
                                        style={{
                                            color: "white",
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {autor}
                                    </p>
                                </>
                            ) : (
                                <img
                                    alt=""
                                    src={img}
                                    style={{
                                        height: "120px",
                                        marginBlock: "0 auto",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
