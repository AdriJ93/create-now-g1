import React from "react"
import "../styles/bewerbung.css"
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
          <h1>Bald verfügbar</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
