import * as React from "react";
import { Link } from "wouter";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <div className="page">
      <h1>
        Hey! 👋🏽 I'm Zainab Ismail, a London-based poet and software engineer.
      </h1>

      <div className="projects">
        <Projects />
      </div>
    </div>
  );
}
