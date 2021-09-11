import React from "react";
import projects from "../../data/projects.js";

export const Projects = () => {
  return projects.map((index) => (
    <div key={"block-" + index}>
      <h1>
        {projects.name} {projects.date}
      </h1>
      <img src={projects.URL} alt={projects.name} />
      {projects.lines.map((line, i) => (
        <div key={"line-" + i}>{line}</div>
      ))}
    </div>
  ));
};
