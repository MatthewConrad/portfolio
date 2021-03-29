import * as React from "react";
const Blobs = () => {
  const blobs = [];
  const minRadius = 35;
  const maxRadius = 65;
  const speeds = [1, -2, 3];
  const topPositions = [-96, 288, 48];

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

    const style = {
      borderRadius: borderRadiuses,
      top: `${topPositions[i]}px`,
    };
    blobs.push(
      <div
        className="blob"
        id={`blob${i + 1}`}
        key={i}
        style={style}
        data-speed={speeds[i]}
      ></div>
    );
  }

  const parallaxMovement = event => {
    document.querySelectorAll(".blob").forEach(blob => {
      const speed = blob.getAttribute("data-speed");
      const x = (window.innerWidth - event.pageX * speed) / 100;
      const y = (window.innerHeight - event.pageY * speed) / 100;

      blob.style.transform = `translateX(${x}px)translateY(${y}px)`;
    });
  };

  const scrollMovement = event => {
    const maxPositionBasis = topPositions[1];
    const currentScroll = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentageScroll = currentScroll / maxScroll;

    document.querySelectorAll(".blob").forEach((blob, index) => {
      const top = topPositions[index];
      const maxTop = window.innerHeight - 48 - maxPositionBasis;
      blob.style.top = `${
        top + (maxTop - maxPositionBasis) * percentageScroll
      }px`;
    });
  };

  document.addEventListener("mousemove", parallaxMovement);
  document.addEventListener("scroll", scrollMovement);

  return <div className="blobs">{blobs}</div>;
};

export default Blobs;
