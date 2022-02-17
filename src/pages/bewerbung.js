import React from "react"
import "../styles/bewerbung.css"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"

function Contact() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${TitleWhite})` }}>
        <div className="container">
          <h1> Du willst bei uns mitmachen?</h1>
          <a href="https://form.jotform.com/220475386767064" target="_blank">
            <button className="button"> Jetzt bewerben </button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
