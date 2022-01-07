import React from "react";
import digital from "../data/digital.js";
import print from "../data/print.js";
import collections from "../data/collections.js";
import anthologies from "../data/anthologies.js";

export default function Publications() {
  return (
    <>
      <div className="box">
        <h2>collections</h2>
        {collections.map((item, i) => {
          return (
            <>
              <p key={"collection" + i}>
                <a href={item.URL} target="_blank" rel="noreferrer">
                  {item.title} with {item.publisher}
                </a>
              </p>
              <p>{item.date}</p>
            </>
          );
        })}
      </div>

      <div className="box">
        <h2>anthologies</h2>
        {anthologies.map((item, i) => {
          return (
            <>
              <p key={"anthologies" + i}>
                <a href={item.URL} target="_blank" rel="noreferrer">
                  {item.title} in <i>{item.publication}</i>
                </a>
              </p>
              <p>{item.date}</p>
            </>
          );
        })}
      </div>

      <div className="box">
        <h2>print magazines</h2>
        {print.map((item, i) => {
          return (
            <>
              <p key={"print" + i}>
                <a href={item.URL} target="_blank" rel="noreferrer">
                  {item.title} in <i>{item.publication}</i>
                </a>
              </p>
              <p>{item.date}</p>
            </>
          );
        })}
      </div>

      <div className="box">
        <h2>digital magazines</h2>
        {digital.map((item, i) => {
          return (
            <>
              <p key={"digital" + i}>
                <a href={item.URL} target="_blank" rel="noreferrer">
                  {item.title} in <i>{item.publication}</i>
                </a>
              </p>
              <p>{item.date}</p>
            </>
          );
        })}
      </div>
      </>
  );
}
