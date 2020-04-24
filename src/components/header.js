import { Link } from "gatsby"
import React from "react"

import URLs from "../data/URLs.json";

const Header = () => (
  <div className="container">
      <div className="container__row">
        <nav className="heightOffset navbar">
          <div className="innerContainer" >
            <div className="col-sm-6" style={{marginLeft: "5%", width: "55%"}}>
            <Link to={"/"}>
              <h2>Yannis Panagis</h2>
            </Link>
            </div>
              {URLs.map(link => (
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

export default Header;