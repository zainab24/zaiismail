import React from "react";
import projects from "../data/projects.js";
import { Link } from "wouter";

export const Projects = () => {
  return (
    <>
  {projects.map((item, i) => (
    <div className="river-box" key={"item" + i}>
      <a href="http://hummingbird.zaiismail.net">
     <img className="project" src={item.thumbnail} alt={item.name}/></a>
      <h2><a href="http://hummingbird.zaiismail.net" target="_blank" rel="noreferrer">{item.name}</a></h2>
      <p>{item.desc}<br/>{item.date}<br/><Link href={item.name}>read more</Link></p>
    </div>
  ))}</>
  )}
