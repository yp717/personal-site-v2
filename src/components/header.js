/* eslint-disable jsx-a11y/heading-has-content*/
import { Link } from "gatsby"
import React, { useRef, useEffect, useState } from "react"
import SmoothCollapse from "react-smooth-collapse"
// import { NavLinkSmall } from "./Root/NavLink"
import DarkModeToggle from "../components/darkModeToggle";

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

export default ({ siteTitle, menuLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false)
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
    setTimeout(() => fn(), 300)
  }

  return (
    <>
    <nav className="heightOffset navbar is-white-bg" style={{ zIndex: 100 }} ref={wrapperRef}>
      <div className="innerContainer" >
        <div className="margin-l-5 position-left">
          <Link to="/">
          <h2 className="name-text is-background-blue-text">Yannis Panagis</h2>
          </Link>
        </div>
        
        <div className="text-align-right position-right" style={{ display: 'flex', justifyContent: "right", alignItems: "center" }} >
          <DarkModeToggle/>
          <button 
            type="button" 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${
              menuOpen ? "nav-open-icon" : "nav-closed-icon"
            }`}
          />
        </div>
      </div>
    </nav>

    <div className="container__col-xs-12 pad-0">
    <SmoothCollapse expanded={menuOpen} className="">
      <div className={`${ menuOpen ? "nav-open-list" : "nav-closed-list"}`}>
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
    </SmoothCollapse>
    </div>
    </>
  );
}