import * as React from "react";
import { Link } from "wouter";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <div className="page">
      <h1>
        Hey! 👋🏽 I'm Zainab Ismail, a software engineer and poet based in London.
      </h1>
      <div className="projects">
        <Projects />
        
        <div className="project"><h2><Link href="/publications">publications</Link> ✍🏽</h2></div>

        <div className="project"><h2><Link href="/contact">contact me</Link> 📝</h2></div>
      </div>
    </div>
  );
}
