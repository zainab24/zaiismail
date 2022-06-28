import * as React from "react";

export default function Doll(props) {
  return (
    <div className="doll">
          <div className="body" id={props.id}>
            <div className="face">
              <div className="fringe"></div>
              <div className="closed-eye closed-eye1"></div>
              <div className="closed-eye closed-eye2"></div>
              <div className="rosycheek rosycheek1"></div>
              <div className="rosycheek rosycheek2"></div>
              <div className="lips">
                <div className="separator"></div>
              </div>
            </div>
            <div className="flower">
              <div className="petal petal1"></div>
              <div className="petal petal2"></div>
              <div className="petal petal3"></div>
              <div className="petal petal4"></div>
              <div className="petal petal5"></div>
              <div className="petal petal6"></div>
              <div className="petal petal7"></div>
              <div className="petal petal8"></div>
            </div>
            <div className="line"></div>
          </div>
          </div>
  );
}
