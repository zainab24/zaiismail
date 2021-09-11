import React from "react";
import projects from "../../data/projects.js";
import { Link } from "wouter";

export const Projects = () => {
  return projects.map((item, i) => (
    <div className="project" key={"item" + i}>
      <img src={item.thumbnail} alt={item.desc} />
      <h2><Link href={item.name}>{item.name}</Link> </h2>
      {item.desc}
    </div>
  ));
};
