import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";
import Publications from "../pages/publications";
import Projects from "../pages/projects";
import Writing from "../pages/writing";
import Success from "../pages/success";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="publications" component={Publications} />
    <Route path="projects" component={Projects} />
    <Route path="writing" component={Writing} />
    <Route path="success" component={Success} />
  </Switch>
);
