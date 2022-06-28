import React, { useState, forwardRef, useRef } from "react";
import { Link, Router } from "wouter";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

import Accordion from "react-bootstrap/Accordion";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

import Doll from "./components/doll.jsx";

// Home function that is reflected across the site
export default function App() {
  const page = useRef(null);

  const handleClickToggle = () => {
      //Handle Scroll here when opening
        page.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    }
      return (
        <Router hook={useHashLocation}>
          <Seo />
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header><span>☰</span> zai ismail</Accordion.Header>
              <Accordion.Body>
                <div><Link href="/"><Doll id="body1"/><a className="home" onClick={() => handleClickToggle()}>home</a></Link></div>
                <div><Link href="projects"><Doll id="body2"/><a className="projects" onClick={() => handleClickToggle()}>projects</a></Link></div>
                <div><Link href="publications"><Doll id="body3"/><a className="publications" onClick={() => handleClickToggle()}>publications</a></Link></div>
                <div><Link href="writing"><Doll id="body4"/><a className="writing" onClick={() => handleClickToggle()}>writing</a></Link></div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <main className="wrapper">
            <div className="page" ref={page}>
              <PageRouter />

              <div><a onClick={() => handleClickToggle()}>back to top</a></div>
            </div>
          </main>
        </Router>
      );
  }
