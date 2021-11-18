import * as React from "react";
import {Link} from 'wouter';

export default function Home() {
  return (
  <div className="home">
  <h1>Zainab Ismail</h1><h2><Link href="projects">Projects</Link> <span className="pipe">|</span> <Link href="publications">Publications</Link> <span className="pipe">|</span> <Link href="writing">Writing</Link></h2>
  
  <img className="me" src="/images/portrait.png"/>
  <p>Hey 👋🏽 I’m Zainab Ismail, a London-based software engineer and poet.</p>
  <p><a href="mailto:zainabismail024@gmail.com">email</a> <span className="pipe">|</span> <a href="http://instagram.com/zai._i">instagram</a> <span className="pipe">|</span> <a href="https://www.linkedin.com/in/zainabismail">linkedin</a></p>
  </div>
  );
}
