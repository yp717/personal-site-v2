import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Sidebar from "../components/sidebar";

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="heightOffset navbar">
    <div className="innerContainer" >
      <div className="col-sm-6" style={{marginLeft: "5%", width: "55%"}}>
        <Link to="/">
        <h2 className="name-text">{siteTitle}</h2>
        </Link>
      </div>
      {/* Full Explanded Navbar - display:None when too small */}
      
        {menuLinks.map(link => (
                <Link className="navLinks expanded-navbar" to={link.link}>
                    <div style={{display:'flex', alignItems:"center"}}>
                        <span className="nav-link-text">
                            {link.name}
                        </span>
                    </div>
                </Link>
            ))}
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;