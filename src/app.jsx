import React, {useState} from "react";
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

import Offcanvas from "react-bootstrap/Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';

// Home function that is reflected across the site
export default function Home() {

  function Nav() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="mobile-button"><button onClick={handleShow}>
        <span>☰</span> menu
        </button></div>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          
          <Offcanvas.Body>
          <h2><span className="home"><Link href="/" onClick={() => setShow(false)}>Home</Link></span> <span className="projects"><Link href="projects" onClick={() => setShow(false)}>Projects</Link></span>   <span className="publications" onClick={() => setShow(false)}><Link href="publications" onClick={() => setShow(false)}>Publications</Link></span>   <span className="writing" onClick={() => setShow(false)}><Link href="writing">Writing</Link></span></h2>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <Router hook={useHashLocation}>
      <Seo />

  <Nav/>


  <ThemeToggle/>

  <h1><Link href="/">zainab ismail</Link></h1>



    <div className="landscape-nav">
     <h2><span className="projects"><Link href="projects">PROJECTS</Link></span>   <span className="publications"><Link href="publications">PUBLICATIONS</Link></span>   <span className="writing"><Link href="writing">WRITING</Link></span></h2>
     </div>

      <main role="main" className="wrapper">

  <div className="page">
     
<PageRouter/>
</div>
      </main>
    </Router>
  );
}
