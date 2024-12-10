import React, { useEffect, useState } from "react";
import img1 from "../images/Ad360_Header.svg";


import "./navbar.css";
function Navbar() {
  const [stick, setStick] = useState(false);
  const [isMobile, setIsMobile] =useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    if(isMobile ){
    setOpen(!isOpen)
    setMenuOpen(!menuOpen)
  } else{
  
    setMenuOpen(menuOpen);
  }
  }
console.log(isOpen)
console.log(isMobile)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };

  return (
    <div>
      <div id="appNavbar" className={`${stick ? "sticky" : ""}`}>
        <a href="/">
          <img src={img1} alt="logo-img" className="appNavbar__logo" />
        </a>
        <style>
          {`
            astro-island,
            astro-slot,
            astro-static-slot {
              display: contents;
            }
          `}
        </style>

        <astro-island
          client="only"
          component-export="default"
          component-url="/_astro/Sidebar.UnYHrlUk.js"
          opts='{"name":"sidebar","value":"react"}'
          props='{"page":[0,"main"]}'
          renderer-url="/_astro/client.AorvF5L6.js"
          ssr=""
          uid="bID3X"
        ></astro-island>

        <ul
          className={`appNavbar__navLinks anim-nav ${
            menuOpen
              ? "w-full h-[100vh] top-0 motion__ul motion-ul12 appNavbar__navLinksResponsive  bg-slate-50 "
              : ""
          }`}
        >
          <li>
            <a href="#home" className="inter appNavbar__navLink" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="inter appNavbar__navLink" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="inter appNavbar__navLink"
              data-astro-reload=""
              data-astro-transition="back"
              data-astro-transition-scope="astro-gjjrnpmp-1"
              onClick={handleClick}
            >
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className="inter appNavbar__navLink"  onClick={handleClick}>
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://blog.ad360.ai/"
              className="inter appNavbar__navLink"
              rel="noopener noreferrer"
              target="_blank"
              onClick={handleClick}
            >
              Blogs
            </a>
          </li>
          <div
            className={`appNavbar__btn1 flex justify-center w-230px ${
              isMobile ? "" : "hidden"
            }`}
          >
            <a
              href="https://ad360.ai/book-a-demo/"
              className="dflexr justifycenter bookademo inter "
            >
              Book a Demo
            </a>
          </div>
        </ul>
        {isMobile && (
          <button
            className="motion__button dflexr justifycenter "
            title="humburger-menu-button"
            onClick={toggleMenu}
          >
            <Menu handleClick={handleClick} isOpen={isOpen} setOpen={setOpen}></Menu>
          </button>
        )}
        <div className="appNavbar__btn">
          <a
            href="https://ad360.ai/book-a-demo/"
            className="dflexr justifycenter bookademo inter"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export function Menu({handleClick, isOpen, setOpen}) {
 
  return (
    <div className="menubox" onClick={handleClick}>
      <span className={`menubar ${isOpen ? 'anim1' : 'anim21'}`} id="bars1"></span>
      <span className={`menubar ${isOpen ? 'anim2' : ''}`} id="bars2"></span>
      <span className={`menubar ${isOpen ? 'anim3' : 'anim22'}`} id="bars3"></span>
    </div>
  );
}




export default Navbar;
