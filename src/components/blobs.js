import * as React from "react";
const Blobs = () => {
  const blobs = [];
  const hexColors = [
    "ffadad",
    "ffd6a5",
    "fdffb6",
    "caffbf",
    "9bf6ff",
    "a0c4ff",
    "bdb2ff",
    "ffc6ff",
  ];

  const minRadius = 25;
  const maxRadius = 75;

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const radiusPropReducer = (val, radius) =>
    val.concat(`${radius}% ${100 - radius}% `);

  for (let i = 0; i < hexColors.length; i++) {
    const radiusesA = new Array(2)
      .fill(0)
      .map(_val => randomInt(minRadius, maxRadius));
    const radiusesB = new Array(2)
      .fill(0)
      .map(_val => randomInt(minRadius, maxRadius));
    const borderRadiuses =
      `${radiusesA.reduce(radiusPropReducer, "")}` +
      `/ ${radiusesB.reduce(radiusPropReducer, "").trim()}`;

    const speed = i % 2 !== 0 ? randomInt(-4, -2) : randomInt(2, 4);
    const style = {
      borderRadius: borderRadiuses,
      backgroundColor: `#${hexColors[i]}`,
    };
    blobs.push(<div className="blob" style={style} data-speed={speed}></div>);
  }

  const parallax = event => {
    document.querySelectorAll(".blob").forEach(blob => {
      const speed = blob.getAttribute("data-speed");
      const x = (window.innerWidth - event.pageX * speed) / 100;
      const y = (window.innerHeight - event.pageY * speed) / 100;

      blob.style.transform = `translateX(${x}px)translateY(${y}px)`;
    });
  };

  document.addEventListener("mousemove", parallax);

  return <div className="blobs">{blobs}</div>;
};

export default Blobs;
