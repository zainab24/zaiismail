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

      <div className="dark-mode-toggle">
 

<div className="menu">
      
      <input type="checkbox" id="theme-toggle" defaultChecked={isDark}
        onChange={() => toggleThemeChange()} />
      <label for="theme-toggle"></label>
      <Menu/>
      </div>
      </div>

      <div className="zainab"> <Link href="/">Zainab Ismail</Link>

      <div className="nav">          <Link href="/">HOME</Link>

<Link href="#projects">PROJECTS</Link> 
<Link href="#publications">PUBLICATIONS</Link> 
<Link href="#writing">WRITING</Link></div>
        </div>
        
      </>
  )
}
