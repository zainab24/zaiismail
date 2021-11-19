import React from "react";

import {Link} from 'wouter';

export default function Publications() {
  return (
   
  <div className="page">
    <h2><span className="projects"><Link href="projects">Projects</Link> <span className="pipe">|</span> <Link href="/">back</Link></span></h2>

    <div className="box">
   <p>Lately I’ve been seeking ways to explore all the things I love from within little online spaces. I’ve developed a React app I’ve called <a href="http://hummingbird.zaiismail.net">hummingbird</a>. Fascinated by how randomness and fridge magnet poetry can drive inspiration, I wanted to see what is creatively possible with this concept, done digitally.</p>
  
    <p>Also check out <a href="http://tajweed.zaiismail.net">a reference tool for Tajweedt</a> (correct pronunciation of the Arabic alphabet) and <a href="http://alifba.zaiismail.net">Alifba</a>, an educational game for children.</p>
   </div>

   </div>
  );
}
