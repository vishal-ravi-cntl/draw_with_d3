import { select } from "d3";
import React, { useEffect, useRef } from "react";

function SimpleTable() {
  const svgRef = useRef(false);

  const dataPoints = [
    { name: "Vishal", mark: 50 },
    { name: "Vishal", mark: 50 },
    { name: "Vishal", mark: 50 },
    { name: "Vishal", mark: 50 },
    { name: "Vishal", mark: 50 },
    { name: "Vishal", mark: 50 },
  ];

  useEffect(() => {
    const svg = select(svgRef.current)
      .selectAll("svg")
      .data([null])
      .join("svg")
      .attr("height", "100vh")
      .attr("width", "100vw")
      .style("background-color", "#D7EDEE");

    const containerWidth = 1000;
    const containerHeight = 600;

    const container = svg.selectAll("container").data([null]);

    container
      .join("rect")
      .attr("class", "container")
      .attr("height", containerHeight)
      .attr("width", containerWidth)
      .attr("x", 440)
      .attr("y", 280)
      .style("fill", "#FFFFFF")
      .style("stroke", "#67C6E3")
      .style("stroke-width", 2)
      .attr("rx", 15);

    svg
      .append("thead")
      .append("tr")
      .selectAll("th")
      .data(["Name", "Mark"])
      .enter()
      .append("th")
      .text((d) => d);

    const rowLine = svg.selectAll("rowLine").data(dataPoints);

    rowLine
      .join("line")
      .attr("class", "rowline")
      .attr("x1", 440)
      .attr("y1", (d, i) => 330 + i * 120)
      .attr("x2", containerWidth + 440)
      .attr("y2", (d, i) => 330 + i * 120)
      .style("stroke", "#67C6E3")
      .style("stroke-width", 2);
  }, []);

  return <div ref={svgRef}></div>;
}

export default SimpleTable;
