import React from "react";
import { Project } from "./project";

export const Projects = () => {
  const projects = ["hummingbird"];

  return (
    <div className="projects">
      {projects.map((project, i) => (
        <Project project={project} />
      ))}
    </div>
  );
};
