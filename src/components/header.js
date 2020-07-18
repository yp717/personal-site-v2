import { Link } from "gatsby"
import React, { useRef, useState, useEffect } from "react"
// import SmoothCollapse from "react-smooth-collapse"
import DarkModeToggle from "./darkModeToggle";
import ClosedBurger from "../images/icons/closed-burger.svg"
import OpenBurger from "../images/icons/open-burger.svg"

function useOutsideAlerter(ref, fn) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [ref, fn])
}

export default ({ menuLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setMenuOpen)
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (menuOpen) {
        setMenuOpen(false)
      }
    })
  })

  const delay = (fn) => {
    fn()
  }

  return(
    <>
    <nav className="heightOffset navbar is-white-bg" style={{ zIndex: 100 }} ref={wrapperRef}>
      <div className="innerContainer" >
        <div className="position-left" style={{marginLeft: '5%'}}>
          <Link to="/">
          <h2 className="name-text is-background-blue-text">Yannis Panagis</h2>
          </Link>
        </div>
        {/* Full Expanded Navbar - display:None when too small */}
        <div className="wideMenuParent">
          {menuLinks.map(link => (
            <Link 
              className="navLinks bold expanded-navbar is-background-blue-text" 
              to={link.link}  
              activeClassName="active"
              key={link.name}
            >
              <span className="underline nav-link-text">
                  {link.name}
              </span>
            </Link>
          ))}
          <div 
            className="expanded-navbar" 
          >
            <DarkModeToggle/>
          </div>
        </div>
        <div className="burger-navbar">
          {
            menuOpen ? (
              <button 
                type="button"
                aria-label="burger menu open"
                onClick={() => setMenuOpen(!menuOpen)}
                className="nav-button"
              >
                <img className="nav-open-icon" src={OpenBurger} />
              </button>
            ) :
            (
              <button 
                type="button"
                aria-label="burger menu closed"
                onClick={() => setMenuOpen(!menuOpen)}
                className="nav-button"
              >
                <img className="nav-closed-icon" src={ClosedBurger} />
              </button>
            )
          }
          {/* <button 
            type="button"
            aria-label="burger menu icon" 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${
              menuOpen ? "nav-open-icon" : "nav-closed-icon"
            }`}
          /> */}
        </div>
        <div 
          className="burger-navbar"
          style={{marginRight: '35px'}}
        >
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
    {/* Menu on Narrow Screens */}
    <div className={`${
      menuOpen ? "nav-open-list" : "nav-closed-list"
    }`}>
      {menuLinks.map(link => (
        <div className="col-sm-12 bold burger-navlinks" key={link.name}>
        <Link 
          className="is-background-blue-text" 
          to={link.link}  
          activeClassName="active"
        >              
          <span className="underline nav-link-text is-nav-color-text">
              {link.name}
          </span>
        </Link>
        </div>
      ))}
    </div>
    </>
  );
}