import * as React from "react";
import gif1 from  '../assets/on-earth/OnEarth1.gif';
import gif2 from  '../assets/on-earth/OnEarth2.gif';
import gif3 from  '../assets/on-earth/OnEarth3.gif';
import gif4 from  '../assets/on-earth/OnEarth4.gif';
import gif5 from  '../assets/on-earth/OnEarth5.gif';

export default function Home() {
  return (
    <div className="page">
      <div className="hey">
        Hey! 👋🏽 I'm Zainab Ismail, a <span>web developer</span> and poet based in London. I love exploring the intersections between technology, art and poetry.
      </div>
      <div className="on-earth">
      <img src={gif1} alt="The rain reminds me of my roots on Earth / A holy hush settles absolute on Earth"/>
      <img src={gif2} alt="Clouds heave in their heavenly bellies / mute rain destined to shoot on Earth"/>
      <img src={gif3} alt="Clouds come undone with petrichor / and nourish the thirsty fruit on Earth"/>
      <img src={gif4} alt="A floral fog births echoing promises / The echoing promises run loose on Earth"/>      
      <img src={gif5} alt="A round cradle sustains me. The rain reins me / back to this perfect truth on Earth"/>
      </div>
      <p>See more on my <a href="https://www.instagram.com/zai._i" target="_blank" rel="noreferrer">instagram</a>.</p>
    </div>    
  );
}
