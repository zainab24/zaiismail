import React from "react";
import landscape from  '../assets/hummingbird/landscape.png';
import portrait from  '../assets/hummingbird/portrait.png';

import { Carousel } from "react-bootstrap"

export default function Hummingbird() {
  return (
    <section className="page-1">
      <div className="river-box">
        <h2>
          <a href="http://hummingbird.zaiismail.net" target="_blank"
            rel="noreferrer">hummingbird</a>
        </h2>

        <p>
          This was my first foray into creating React web apps. I experimented
          with the{" "}
          <a href="http://poetrydb.org" target="_blank" rel="noreferrer">
            poetrydb
          </a>{" "}
          API and{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/peterh32/react-drag-drop-container"
          >
            react-drag-drop-container
          </a>
          , and developed my responsive design skills.
        </p>
      </div>

      <Carousel nextLabel={null} prevLabel={null}>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={portrait}
            alt="portrait"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={landscape}
            alt="landscape"
          />
        </Carousel.Item>
      </Carousel>

    </section>
  );
}
