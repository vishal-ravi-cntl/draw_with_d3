import { pointer, select } from "d3";
import React, { useEffect, useRef, useState } from "react";

function SmileyEye() {
  const svgRef = useRef(false);

  const [mouse, setMouse] = useState({ x: 790, y: 420 });

  useEffect(() => {
    console.log("here");

    const svg = select(svgRef.current)
      .selectAll("svg")
      .data([null])
      .join("svg")
      .attr("height", "100vh")
      .attr("width", "100vw")
      .style("background-color", "F8FAE5")
      .on("mousemove", (event) => {
        const [x, y] = pointer(event);
        setMouse((mouse) => ({ ...mouse, x, y }));
        // console.log({ x, y });
      });

    const face = svg.selectAll(".face").data([null]);
    face
      .join("circle")
      .attr("class", "face")
      .attr("cx", 900)
      .attr("cy", 500)
      .attr("r", "25vh")
      .style("fill", "#ffde34");

    const eye1X = 790;
    const eye1Y = 420;
    const eye2X = 1000,
      eye2Y = 420;
    const eyeRadius = 50;
    const eyeData = [
      { name: "eye1", cx: eye1X, cy: eye1Y, r: eyeRadius, fill: "#F5F7F8" },
      { name: "eye2", cx: eye2X, cy: eye2Y, r: eyeRadius, fill: "#F5F7F8" },
    ];

    svg
      .selectAll(".eyes")
      .data(eyeData)
      .join("circle")
      .attr("class", "eyes")
      .attr("cx", (d) => d.cx)
      .attr("cy", (d) => d.cy)
      .attr("r", (d) => d.r)
      .attr("fill", (d) => d.fill);

    const { x, y } = mouse;

    let dx = x - eye1X;
    let dy = y - eye1Y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    const distanceOffset = Math.log(distance + 1) * 2;
    console.log({ distanceOffset });

    const new1X = eye1X + (dx / distance) * distanceOffset;
    const new1Y = eye1Y + (dy / distance) * distanceOffset;

    dx = x - eye2X;
    dy = y - eye2Y;
    distance = Math.sqrt(dx * dx + dy * dy);
    const new2X = eye2X + (dx / distance) * distanceOffset;
    const new2Y = eye2Y + (dy / distance) * distanceOffset;

    const eyeballRadius = 25;

    const eyeballData = [
      {
        name: "eyeball1",
        cx: new1X,
        cy: new1Y,
        r: eyeballRadius,
        fill: "#222831",
      },
      {
        name: "eyeball2",
        cx: new2X,
        cy: new2Y,
        r: eyeballRadius,
        fill: "#222831",
      },
    ];

    svg
      .selectAll(".eyeballs")
      .data(eyeballData)
      .join("circle")
      .attr("class", "eyeballs")
      .attr("cx", (d) => d.cx)
      .attr("cy", (d) => d.cy)
      .attr("r", (d) => d.r)
      .attr("fill", (d) => d.fill);
  }, [mouse]);

  return <div ref={svgRef}></div>;
}

export default SmileyEye;
