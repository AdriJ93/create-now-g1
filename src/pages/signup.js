import React from "react"
import "../styles/signup.css"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"

function Contact() {
  return (
    <Layout>
      <div
        className="contact"
        style={{ backgroundImage: `url(${TitleWhite})` }}
      >
        <div className="rightContactSide">
          <div>
            <form
              name="signup"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="signup" />
              <label htmlFor="name">Wie möchtest du kontaktiert werden?</label>
              <input type="radio" value="E-Mail" name="gender" /> E-Mail
              <input type="radio" value="Telefon/Whatsapp" name="gender" />
              Telefon/Whatsapp
              <input type="radio" value="Skype" name="gender" /> Skype
              <button type="submit">Senden</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
