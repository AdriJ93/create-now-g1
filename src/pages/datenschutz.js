import React from "react"
import "../styles/datenschutz.css"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"

function Contact() {
  return (
    <Layout>
      <div
        className="contact"
        style={{ backgroundImage: `url(${TitleWhite})` }}
      >
        <div>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
