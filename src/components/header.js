import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useRef, useState, useEffect } from "react"
// import Sidebar from "../components/sidebar";
// import DarkModeToggle from "../components/darkModeToggle";
// import SmoothCollapse from "react-smooth-collapse"
import useDarkMode from "use-dark-mode"
import NavDarkModeToggle from "../components/navDarkModeToggle";
import DarkModeAnim from "../animations/DarkModeToggleAnim";

function useOutsideAlerter(ref, fn) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
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
    setTimeout(() => fn(), 300)
  }

  return(
    <>
    <nav className="heightOffset navbar is-white-bg" style={{ zIndex: 100 }} ref={wrapperRef}>
      <div className="innerContainer" >
        <div className="margin-l-5 position-left">
          <Link to="/">
          <h2 className="name-text is-background-blue-text">Yannis Panagis</h2>
          </Link>
        </div>
        {/* Full Explanded Navbar - display:None when too small */}
        <div className="wideMenuParent">
          {menuLinks.map(link => (
            <Link 
              className="navLinks expanded-navbar is-background-blue-text" 
              to={link.link}  
              activeClassName="active"
            >
              <span className="squiggle nav-link-text">
                  {link.name}
              </span>
            </Link>
          ))}
          <button 
            className="expanded-navbar" 
            onClick={darkMode.value ? darkMode.disable : darkMode.enable}
          >
            {/* <DarkModeToggle/> */}
            <DarkModeAnim/>
          </button>
        </div>
        <div className="burger-navbar">
          <button 
            type="button" 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${
              menuOpen ? "nav-open-icon" : "nav-closed-icon"
            }`}
          />
        </div>
        <button 
          onClick={() => {
            delay(darkMode.value ? darkMode.disable : darkMode.enable)
          }}
          className="burger-navbar"
          style={{marginRight: '25px'}}
        >
          <DarkModeAnim/>
        </button>
      </div>
    </nav>
    <div className={`${
      menuOpen ? "nav-open-list" : "nav-closed-list"
    }`}>
      {menuLinks.map(link => (
        <div className="container__col-sm-12 burger-navlinks">
        <Link 
          className="is-background-blue-text" 
          to={link.link}  
          activeClassName="active"
        >              
          <span className="squiggle nav-link-text">
              {link.name}
          </span>
        </Link>
        </div>
      ))}
    </div>
    </>
  );
}