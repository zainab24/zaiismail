import React from "react";
import { Router } from "wouter";

import {Link} from 'wouter';

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

import { ThemeToggle } from "./components/theme-toggle";
import 'bootstrap/dist/css/bootstrap.min.css';

// Home function that is reflected across the site
export default function Home() {

  return (
    <Router hook={useHashLocation}>
      <Seo />
      <div className="header">

      <div className="header_content">
      <h1><Link href="/">Zainab Ismail</Link></h1>

      <h2><span className="projects"><Link href="projects">Projects</Link></span>   <span className="publications"><Link href="publications">Publications</Link></span>   <span className="writing"><Link href="writing">Writing</Link></span></h2>
      </div>

      <ThemeToggle/>
      </div>
      <main role="main" className="wrapper">

  <div className="page">
     
<PageRouter/>
</div>
      </main>
    </Router>
  );
}
