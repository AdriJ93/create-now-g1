import React from "react"
import "../styles/Offers.css"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"

function Offers() {
  return (
    <Layout>
      <div className="offers" style={{ backgroundImage: `url(${TitleWhite})` }}>
        <div className="cards">
          <div className="leftCard">
            <h1>
              Einsteiger-Paket <br />
              <br />
            </h1>
            <p>
              Ideal für: Instagram Reels, Tik Tok Clips, Trailer oder als
              Unterstützung für größere Beiträge (max. bis zu 3h Arbeitsaufwand)
              <br />
              <br />
            </p>
            <ul>
              <li>Material sichten</li>
              <li>Rough Cut</li>
              <li>Chronologische Anordnung</li>
              <li>Ton</li>
              <li>Color Correction</li>
              <li>Color Grading</li>
            </ul>
            <div className="cardBottomLeft">
              <h2>179,00 €</h2>
              <div className="buttonDiv">
                <a
                  href="https://form.jotform.com/220421165410338"
                  target="_blank"
                >
                  <button className="buttonOffers"> Jetzt buchen </button>
                </a>
              </div>
            </div>
          </div>
          <div className="middle">
            <h1>
              Standard-Paket <br />
              <br />
            </h1>
            <p>
              Ideal für: Youtube, Instagram, Commercial Ads, Trailer, Vlogs,
              Musik Videos, Gaming und mehr (max. halber Schnitttag / bis zu 6h
              Arbeitsaufwand)
              <br />
              <br />
            </p>
            <ul>
              <li>Material sichten</li>
              <li>Rough Cut</li>
              <li>Chronologische Anordnung</li>
              <li>Übergänge</li>
              <li>Wunschmusik importieren</li>
              <li>Sound Design</li>
              <li>Color Correction</li>
              <li>Color Grading</li>
              <li>Effekte</li>
              <li>Subtitles</li>
            </ul>
            <div className="cardBottomMiddle">
              <h2>359,00 €</h2>
              <div className="buttonDiv">
                <a
                  href="https://form.jotform.com/220406887236055"
                  target="_blank"
                >
                  <button className="buttonOffers"> Jetzt buchen </button>
                </a>
              </div>
            </div>
          </div>
          <div className="rightCard">
            <h1>
              Premium-Paket <br />
              <br />
            </h1>
            <p>
              Ideal für: größere Videobeiträge z.B. für Hochzeitvideos,
              Fernsehbeiträge, Werbekampagnen und Folgeaufträge (mehrere
              Schnitttage möglich)
              <br />
              <br />
            </p>
            <div className="cardBottomRight">
              <h2>Preis individell</h2>
              <div className="buttonDiv">
                <button className="buttonOffers"> bald verfügbar </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Offers
