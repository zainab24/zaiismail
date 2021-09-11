import React from "react";
import * as data from "../../data/projects.json";

export const Project = props => {
  return props.map((item, i) => (
    <div key={"block-" + i}>
      <h1>
        {data.name} {data.date}
      </h1>
      <img src={data.URL} alt={data.name} />
      {data.lines.map((line, i) => (
        <div key={"line-" + i}>{line}</div>
      ))}
    </div>
  ));
};
