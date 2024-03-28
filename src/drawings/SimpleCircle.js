import { select } from "d3";
import React, { useEffect, useRef, useState } from "react";

function SimpleCircle() {
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
      .style("background-color", "lightblue");

    const circle = svg.append("circle");
    circle
      .attr("cx", "50vw")
      .attr("cy", "50vh")
      .attr("r", "25vh")
      .style("fill", "red");
  }, []);

  return <div ref={svgRef}></div>;
}

export default SimpleCircle;
