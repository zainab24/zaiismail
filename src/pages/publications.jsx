import React from "react";
import digital from "../../data/digital.js";
import print from "../../data/print.js";
import collections from "../../data/collections.js";

export default function Publications() {
  return (
    <div>
      {print.map((item, i) => {
        return (
          <>
            <p key={"item" + i}>
              <a href={item.URL}>
                {item.title} in <i>{item.publication}</i>
              </a>
            </p>
            <p>{item.date}</p>
          </>
        );
      })}
    </div>
  );
}
