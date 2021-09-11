import React from "react";
import projects from "../../data/projects.js";

export const Projects = () => {

  return projects.map((item, i) => (
    <div className="project" key={"item" + i}>
      <h2>{item.name}</h2>
      <h3>{item.desc}</h3>
      <img src={item.URL} alt={item.desc} />
      <h3>{item.desc}</h3>
      {item.lines.map((line, i) => (
        <div key={"line-" + i}>{line}</div>
      ))}
    </div>
  ));
};
