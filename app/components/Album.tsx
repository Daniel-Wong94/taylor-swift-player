import React from "react";

const Album = () => {
  return (
    <section>
      <div className="hero-img"></div>

      <div className="emblem-container">
        <div className="emblem text"></div>
      </div>
      <h1 className="text" value="6">
        <span className="album-num"></span>
        <span className="album-title"></span>
        <span>Taylor Swift</span>
      </h1>
    </section>
  );
};

export default Album;
