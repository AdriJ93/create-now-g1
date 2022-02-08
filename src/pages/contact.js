import React from "react"
import "../styles/Contact.css"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"

function Contact() {
  return (
    <Layout>
      <div
        className="contact"
        style={{ backgroundImage: `url(${TitleWhite})` }}
      >
        <div className="leftContactSide">
          <h1> Hast du Fragen?</h1>
        </div>
        <div className="rightContactSide">
          <div>
            <form id="contact-form" method="POST">
              <label htmlFor="name">Dein Name</label>
              <input name="name" placeholder="" type="text" required />
              <label htmlFor="email">Deine E-Mail Adresse</label>
              <input name="email" placeholder="" type="email" required />
              <label htmlFor="message">Deine Nachricht</label>
              <textarea name="message" placeholder="" required></textarea>
              <button type="submit"> Senden</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
