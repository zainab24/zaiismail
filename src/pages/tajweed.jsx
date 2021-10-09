import React from "react";
import portrait from  '../assets/tajweed/portrait.png';

export default function Tajweed() {
  return (
    <section className="page-1">
        <h2>
          <a href="http://tajweed.zaiismail.net" target="_blank"
            rel="noreferrer">tajweed</a>
        </h2>
        
        <p>
          To help students of Arabic, I created a study reference as a progressive web app in React. It collects notes, sound files, diagrams and a voice recorder for comparison in one place. The app can be added to the home screen and also used offline.
        </p>

     
          <img
            className="d-block w-50 mx-auto"
            src={portrait}
            alt="portrait"
          />

    </section>
  );
}
