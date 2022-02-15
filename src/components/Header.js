import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/Header.css"
import Title from "../images/CN45.png"
import MenuIcon from "@mui/icons-material/Menu"

function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo-div">
            <img src={Title} className="nav-logo"></img>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/offers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Angebote
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Über uns
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/bewerbung"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bewerbung als Editor
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <MenuIcon sx={{ fontSize: 45 }} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
