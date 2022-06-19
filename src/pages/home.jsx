import * as React from "react";
import Contact from "./contact";

export default function Home() {
  return (
    <>
  <div className="intro"><p className="center"><img src="/images/portrait.png" alt="me" className="me"/></p><p>Hey, I’m Zainab Ismail, a London-based software engineer and poet.</p>
  <p className="center"><a href="http://instagram.com/zai._i"><img src="/images/social/insta.gif" alt="instagram" className="social"/></a> <a href="https://www.linkedin.com/in/zainabismail"><img src="/images/social/linkedin.gif" alt="linkedin" className="social"/></a></p></div>
  
<Contact/>
</>
  );
}
