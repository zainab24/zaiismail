import React from "react";
import projects from "../../data/projects.js";

export const Projects = () => {
  return Object.entries(prohect).forEach(([key, value]) => {
    <div key={"block-" + key}>
      <h1>
        {key.name} {key.date}
      </h1>
      <img src={key.URL} alt={key.name} />
      {key.lines.map((line, index) => (
        <div key={"line-" + index}>{line}</div>
      ))}
    </div>
  });
};
