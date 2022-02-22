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
                to="/angebote"
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
                to="/ueberuns"
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
                to="/kontakt"
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
                className="nav-links-box"
                onClick={handleClick}
              >
                Werde Editor (m/w/d)
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
