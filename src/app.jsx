import React from "react";
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

import Splash from "./components/splash.jsx";

// Home function that is reflected across the site
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Router hook={useHashLocation}>
          <Seo />
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header><span>☰</span> zai ismail</Accordion.Header>
              <Accordion.Body>
                <Link href="/"><a className="home">home</a></Link>
                <Link href="projects"><a className="projects">projects</a></Link>
                <Link href="publications"><a className="publications">publications</a></Link>
                <Link href="writing"><a className="writing">writing</a></Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <main className="wrapper">
            <div className="page">
              <PageRouter />
            </div>
          </main>
        </Router>
      );
  }
}
