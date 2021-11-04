import React, {useState, useEffect} from 'react';
import '../styles/dark-theme.css';
import '../styles/light-theme.css';
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "wouter";

export const Header = () => {
const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
        document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
    }
    else {
        document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    }
  },[]);

  const toggleThemeChange = () => {
    if (isDark === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
        setIsDark(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
        setIsDark(false);
    }
  }

  function Menu() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
 <div className="button"><button onClick={handleShow}>
        ☰
        </button></div>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          
          <Offcanvas.Body>
          <Link href="/" onClick={handleClose}>HOME</Link> 

<Link href="#projects" onClick={handleClose}>PROJECTS</Link> 
<Link href="#publications" onClick={handleClose}>PUBLICATIONS</Link> 
<Link href="#writing" onClick={handleClose}>WRITING</Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a8a7e6" fill-opacity="1" d="M0,320L34.3,298.7C68.6,277,137,235,206,234.7C274.3,235,343,277,411,272C480,267,549,213,617,197.3C685.7,181,754,203,823,229.3C891.4,256,960,288,1029,298.7C1097.1,309,1166,299,1234,277.3C1302.9,256,1371,224,1406,208L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>

      <div className="dark-mode-toggle">
 

<div className="menu">
      
      <input type="checkbox" id="theme-toggle" defaultChecked={isDark}
        onChange={() => toggleThemeChange()} />
      <label for="theme-toggle"></label>
      <Menu/>
      </div>
      </div>

      <div className="zainab"> <Link href="/">Zainab Ismail</Link>
        </div>
      </>
  )
}
