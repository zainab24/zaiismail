import React from "react";
import json from "../../data/projects.json";

const data = JSON.parse(JSON.stringify(json));

export const Projects = () => {
  return( 
    
     Object.keys(data).map((item, i) => (
    <div key={"block-" + i}>
      <h1>
        {data.name} {data.date}
      </h1>
      <img src={data.URL} alt={data.name} />
      {data.lines.map((line, i) => (
        <div key={"line-" + i}>{line}</div>
      ))}
    </div>
  )));
};
