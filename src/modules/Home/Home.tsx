import React from "react";

export const Home = () => {
  return (
    <div className="home">
      <h1>
        Hi my name is <strong>Braulio Estrada</strong>, I am a web developer in
        Mexico and I offer my programming web services in{" "}
        <strong>Front-end</strong> projects.
      </h1>
      <h2>
        I help you to build your UI, getting more visibility and relevance in
        the internet.
        <a href="/contact">Contact me</a>
      </h2>
      <section className="last-works">
        <h2>Check some of my projects</h2>
        <p>This are some of the projects I have work with:</p>
        <div className="works">Some Works</div>
      </section>
    </div>
  );
};
