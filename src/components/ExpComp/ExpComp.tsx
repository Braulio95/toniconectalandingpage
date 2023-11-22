import React from "react";
import { ExpProps } from "../../types/interfaces/ExpProps";

export const ExpComp = ({ experiences, isMobile }: ExpProps) => {
  if (isMobile) {
    return (
      <div>
        {experiences.map(({ id, autor, description, img }, index) => {
          const isImageOnLeft = index % 2 === 0;

          return (
            <div
              key={id}
              style={{
                display: "flex",
                marginBottom: isImageOnLeft ? "0.5rem" : "6rem",
              }}
            >
              <div
                style={{
                  textAlign: isImageOnLeft ? "center" : "right",
                  flex: "1",
                  marginBottom: isImageOnLeft ? "0.5rem" : "3rem",
                }}
              >
                <img
                  src={img}
                  alt={description}
                  style={{
                    width: isImageOnLeft ? "200px" : "300px",
                    margin: "0 auto",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "auto",
                  flex: "1",
                  textAlign: isImageOnLeft ? "left" : "right",
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
    <div className="container">
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
                  style={{ height: "120px", marginBlock: "0 auto" }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
