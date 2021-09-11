import * as React from "react";
import { Link } from "wouter";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <div className="page">
      <h1 className="hey">Hey! 👋🏽 I'm Zainab Ismail, a London-based poet and </h1>{" "}
      <div className="typewriter">
        <h1>software engineer.</h1>
      </div>
      
      <Projects/>
    </div>
  );
}
