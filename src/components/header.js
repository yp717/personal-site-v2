import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <div className="container">
      <div className="container__row">
        <nav className="heightOffset navbar">
          <div className="innerContainer" >
            <div className="col-sm-6" style={{marginLeft: "5%", width: "55%"}}>
              <h2>{siteTitle}</h2>
            </div>
              {menuLinks.map(link => (
                    <Link className="navLinks" to={link.link}>
                        <div className="col-sm-2" style={{display:'flex', alignItems:"center"}}>
                            <span>
                                {link.name}
                            </span>
                        </div>
                    </Link>
                ))}
          </div>
        </nav>
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

{/* <header>  
  <div className="container">
    <div className="container__row">
      <div className="container__col-sm-2">
        <h3>
          <Link to="/">{siteTitle}</Link>
        </h3>
      </div>
        {menuLinks.map(link => (
          <div className="container__col-sm-1">
            <p className="text-align-center">
              <Link style={{ color: `black` }} to={link.link}>
                {link.name}
              </Link>
            </p>
          </div>
        ))}
    </div>  
  </div>
</header> */}