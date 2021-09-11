import React from "react";
import * as data from './projects.json';

export const Project = (props) => {

  return (
          props.map((item, i) => (
        <div key={"block-" + i}>
          <img src={data.URL}""
          {data.lines.map((line, i) => (
            <div key={"line-" + i}>
              {line}
            </div>
          ))}
          <div className="poem-data">— <span>{item.title}</span> by {item.author}</div>
        </div>
  );
};
