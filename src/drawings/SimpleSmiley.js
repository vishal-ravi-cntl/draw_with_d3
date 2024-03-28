import { select } from "d3";
import React, { useEffect, useRef, useState } from "react";

function SimpleSmiley() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const svgRef = useRef(false);

  useEffect(() => {
    console.log("here");
    // const screenWidth = window.innerWidth;
    // const screenHeight = window.innerHeight;

    const svg = select(svgRef.current)
      .append("svg")
      .attr("height", "100vh")
      .attr("width", "100vw")
      .style("background-color", "F8FAE5");

    const circle = svg.append("circle");
    circle
      .attr("cx", "50vw")
      .attr("cy", "50vh")
      .attr("r", "25vh")
      .style("fill", "#ffde34");

    const eye1 = svg.append("circle");
    eye1
      .attr("cx", "44vw")
      .attr("cy", "42vh")
      .attr("r", "5vh")
      .style("fill", "#F5F7F8");

    const eye2 = svg.append("circle");
    eye2
      .attr("cx", "56vw")
      .attr("cy", "42vh")
      .attr("r", "5vh")
      .style("fill", "#F5F7F8");

    const eyeball1 = svg.append("circle");
    eyeball1
      .attr("cx", "44vw")
      .attr("cy", "42vh")
      .attr("r", "2vh")
      .style("fill", "#222831");

    const eyeball2 = svg.append("circle");
    eyeball2
      .attr("cx", "56vw")
      .attr("cy", "42vh")
      .attr("r", "2vh")
      .style("fill", "#222831");
  }, []);

  return <div ref={svgRef}></div>;
}

export default SimpleSmiley;
