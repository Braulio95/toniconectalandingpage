import React from "react";
import { FooterProps } from "../../types/interfaces/FooterProps";

export const Footer = ({ ToolsUsed, Contacts }: FooterProps) => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tools Used</h6>
              {ToolsUsed.map(({ label }) => {
                return (
                  <p>
                    <a href="#!" className="text-reset">
                      {label}
                    </a>
                  </p>
                );
              })}
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              {Contacts.map(({ label }) => {
                return (
                  <p>
                    <i className="fas fa-home me-3">{label}</i>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ background: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};
