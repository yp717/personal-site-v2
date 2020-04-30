import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import Sidebar from "../components/sidebar";
import DarkModeToggle from "../components/darkModeToggle";
import SmoothCollapse from "react-smooth-collapse"
import NavDarkModeToggle from "../components/navDarkModeToggle";
export default ({ siteTitle, menuLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
    <nav className="heightOffset navbar is-white-bg">
      <div className="innerContainer" >
        <div style={{left: '0px', marginLeft:"5%"}}>
          <Link to="/">
          <h2 className="name-text is-background-blue-text">{siteTitle}</h2>
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
          <div className="expanded-navbar">
            <DarkModeToggle/>
          </div>
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
      <div className="container__col-sm-12 burger-navlinks">
        <NavDarkModeToggle/>
      </div>
    </div>
    </>
  );
}