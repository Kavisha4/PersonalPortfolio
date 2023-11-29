import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg';
import paper from '../assets/img/paper.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Use HashLink for smooth scrolling */}
          {/* <Navbar.Brand as={HashLink} to="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Use HashLink for smooth scrolling */}
              <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* Provide actual URLs or use placeholders */}
                  {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/kavisha-mathur-0524741b0/" target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/Kavisha4" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            {/* Google Drive */}
            <a href="https://drive.google.com/drive/folders/1QEYzKrV91UiTiK6tdLMKeRUUcCA5BrP9?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={paper} alt="Google Drive" />
            </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
