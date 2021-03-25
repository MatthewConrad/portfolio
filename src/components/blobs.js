import * as React from "react";
const Blobs = () => {
  const blobs = [];
  const minRadius = 35;
  const maxRadius = 65;

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const radiusPropReducer = (val, radius) =>
    val.concat(`${radius}% ${100 - radius}% `);

  for (let i = 0; i < 3; i++) {
    const radiusesA = new Array(2)
      .fill(0)
      .map(_val => randomInt(minRadius, maxRadius));
    const radiusesB = new Array(2)
      .fill(0)
      .map(_val => randomInt(minRadius, maxRadius));
    const borderRadiuses =
      `${radiusesA.reduce(radiusPropReducer, "")}` +
      `/ ${radiusesB.reduce(radiusPropReducer, "").trim()}`;

    const speed = [2, -4, 6];
    const style = {
      borderRadius: borderRadiuses,
    };
    blobs.push(
      <div
        className="blob"
        id={`blob${i + 1}`}
        style={style}
        data-speed={speed[i]}
      ></div>
    );
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
