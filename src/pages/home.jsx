import * as React from "react";
import {Link} from 'wouter';

export default function Home() {
  return (
  <div className="home page">
  <h1>Zainab Ismail</h1><h2><span className="projects"><Link href="projects">Projects</Link></span> <span className="pipe">|</span> <span className="publications"><Link href="publications">Publications</Link></span> <span className="pipe">|</span> <span className="writing"><Link href="writing">Writing</Link></span></h2>
  
  <img className="me" src="/images/portrait.png"/>
  <p className="intro">Hey, I’m Zainab Ismail, a London-based software engineer and poet.</p>
  <p><a href="mailto:zainabismail024@gmail.com">email</a> <span className="pipe">|</span> <a href="http://instagram.com/zai._i">instagram</a> <span className="pipe">|</span> <a href="https://www.linkedin.com/in/zainabismail">linkedin</a></p>
  </div>
  );
}
