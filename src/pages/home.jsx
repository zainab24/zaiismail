import * as React from "react";
import Contact from "./contact";

export default function Home() {
  return (
    <>
  <div className="home">
  <img className="me" src="/images/portrait.png"/>
  <p className="intro">Hey, I’m Zainab Ismail, a London-based software engineer and poet.</p>
  <p><a href="http://instagram.com/zai._i">instagram</a> <span className="pipe">|</span> <a href="https://www.linkedin.com/in/zainabismail">linkedin</a></p>
  </div>
  
<Contact/>
</>
  );
}
