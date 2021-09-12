import React from "react";

export default function Hummingbird() {
  return (
    <div className="page">
      <div className="project">
        <h1>
          <a href="http://hummingbird.zaiismail.net">hummingbird</a>
        </h1>

        <p>
          This was my first foray into creating a React web app. I experimented
          with the <a href="http://poetrydb.org">poetrydb</a> API and{" "}
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
      <a href="http://hummingbird.zaiismail.net">
        <img
          src="https://cdn.glitch.com/d7f5d655-bedb-46ba-b8a6-d3a4253e0b8b%2Fhummingbird.jpeg?v=1631386834026"
          className="screenshot--portrait"
        />
      </a>
      <a href="http://hummingbird.zaiismail.net">
        <img
          src="https://cdn.glitch.com/d7f5d655-bedb-46ba-b8a6-d3a4253e0b8b%2Fhummingbird-landscape.png?v=1631399201623"
          className="screenshot--landscape"
        />
      </a>
    </div>
  );
}
