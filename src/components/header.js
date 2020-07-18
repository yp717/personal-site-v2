import { Link } from "gatsby"
import React, { useRef, useState, useEffect } from "react"
// import SmoothCollapse from "react-smooth-collapse"
import useDarkMode from "use-dark-mode"
import DarkModeAnim from "../animations/DarkModeToggleAnim";
import DarkModeToggle from "./darkModeToggle";

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
  const darkMode = useDarkMode(false) //defaults to false 
  
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
            onClick={darkMode.value ? darkMode.disable : darkMode.enable}
          >
            <DarkModeToggle/>
          </div>
        </div>
        <div className="burger-navbar">
          <button 
            type="button"
            aria-label="burger menu icon" 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${
              menuOpen ? "nav-open-icon" : "nav-closed-icon"
            }`}
          />
        </div>
        <div 
          onClick={() => {
            delay(darkMode.value ? darkMode.disable : darkMode.enable)
          }}
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