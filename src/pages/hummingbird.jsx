import React from "react";
import landscape from  '../assets/hummingbird/landscape.png';
import portrait from  '../assets/hummingbird/portrait.png';


export default function Hummingbird() {
  return (
    <div className="page">
      <div className="river-box">
        <h2>
          <a href="http://hummingbird.zaiismail.net" target="_blank"
            rel="noreferrer">hummingbird</a>
        </h2>

        <p>
          This was my first foray into creating a React web app. I experimented
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
        <img
          src={portrait}
          className="screenshot--portrait"
        />
        <img
          src={landscape}
          className="screenshot--landscape"
        />
    </div>
  );
}
