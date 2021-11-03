import React from "react";
import { Router } from "wouter";
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
import { Navbar, Nav, Container } from 'react-bootstrap'

// Home function that is reflected across the site
export default function Home() {

  return (
    <Router hook={useHashLocation}>
      <Seo />
<DarkModeToggle/>

      <Navbar expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#publications">Publications</Nav.Link>
        <Nav.Link href="#writing">Writing</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <main role="main" className="wrapper">
    
<PageRouter/>

      </main>
    </Router>
  );
}
