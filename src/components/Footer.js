import React from "react"
import { Link } from "gatsby"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="row1">
        <a
          className="social"
          href="https://www.instagram.com/creative_now_/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          className="social"
          href="https://www.facebook.com/Create-Now-112376451348354"
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </div>
      <div className="row2">
        <Link className="linkItem" to="/impressum">
          Impressum
        </Link>
        <Link className="linkItem" to="/datenschutz">
          Datenschutz
        </Link>
        <Link className="linkItem" to="/agb">
          Unsere AGBs
        </Link>
        <Link className="linkItem" to="/about">
          Über uns
        </Link>
      </div>
      <div className="row3">&copy; 2022 CREATE NOW</div>
    </footer>
  )
}

export default Footer
