import React from "react";
import { Router, Link } from "wouter";
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
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";
import { DarkModeToggle } from './components/dark-mode-toggle'

import 'bootstrap/dist/css/bootstrap.min.css';

// Home function that is reflected across the site
export default function Home() {

  return (
    <Router hook={useHashLocation}>
      <Seo />
      <DarkModeToggle/>
      <main role="main" className="wrapper">
        <div className="main-wrapper">
          <Link href="/">
            <div id="box-wrapper">
              <div id="box">
                <div class="river river--1"></div>
              </div>  
            </div>
            </Link>
          <svg>
            <filter id="turbulence" x="0" y="0">
              <feTurbulence baseFrequency="0.025 0.015"></feTurbulence>
              <feDisplacementMap
                scale="45"
                in="SourceGraphic"
              ></feDisplacementMap>
            </filter>
          </svg>
          <section className="main">
          <div className="nav-bar"><ul><li><Link href="/publications">writing ✍🏽</Link></li>
          <li><Link href="/projects">coding 💻</Link></li>
          <li><Link href="/contact">contact ✉️</Link></li></ul>
          </div>
          </section>
            <PageRouter />
  
        </div>
      </main>
    </Router>
  );
}
