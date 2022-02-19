import React from "react"
import "../styles/Impressum.css"
import Layout from "../components/Layout.js"
import TitleWhite from "../images/whiteBackground.jpg"

function Impressum() {
  return (
    <Layout>
      <div
        className="impressum"
        style={{ backgroundImage: `url(${TitleWhite})` }}
      >
        <div className="impressum-container">
          <h1>Impressum</h1>
          <h2>Angaben gemäß § 5 TMG:</h2>
          <p>
            Adrian Wulf
            <br />
            Einsteinstraße 104
            <br />
            81675 München
          </p>
          <h2>Streitschlichtung:</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            <a
              className="impressum-link"
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
            >
              {" "}
              Online-Streitbeilegung (OS){" "}
            </a>
            bereit. Unsere E-Mail Adressen finden sie im Impressum. Wir sind
            nicht bereit oder verpflichtet, an Steigbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <h2>Kontakt:</h2>
          <p>E-Mail: info@create-now.net</p>
          <h2>Redaktionell verantwortlich:</h2>
          <p>
            Adrian Wulf
            <br />
            Einsteinstraße 104
            <br />
            81675 München
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Impressum
