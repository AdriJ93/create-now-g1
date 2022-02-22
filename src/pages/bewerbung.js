import React from "react"
import "../styles/bewerbung.css"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"
import CheckIcon from "@mui/icons-material/CheckCircleOutline"

function Contact() {
  return (
    <Layout>
      <div
        className="bewerbung"
        style={{ backgroundImage: `url(${TitleWhite})` }}
      >
        <div className="container-offer">
          <h1>Was bietet dir Create Now?</h1>
          <div className="offer1">
            <div className="check-offer">
              <CheckIcon fontSize="large" />
            </div>
            <div className="text-offer">
              <h3>Flexibilität</h3>
              <p>
                Arbeite bequem von Zuhause, wann und welchen Auftrag du annehmen
                möchtest bestimmst alleine du.
              </p>
            </div>
          </div>
          <div className="offer1">
            <div className="check-offer">
              <CheckIcon fontSize="large" />
            </div>
            <div className="text-offer">
              <h3>Schnelles Einkommen</h3>
              <p>
                Arbeite so viel wie du möchtest, umso mehr Projekte du
                abschließt, desto mehr verdienst du! Oder lass es ganz locker
                angehen und betreue nur vereinzelt Aufträge.
              </p>
            </div>
          </div>
          <div className="offer1">
            <div className="check-offer">
              <CheckIcon fontSize="large" />
            </div>
            <div className="text-offer">
              <h3>Atmosphäre</h3>
              <p>
                Bleibe dein eigener Chef und arbeite wie gewohnt in deiner
                eigenen Umgebung.
              </p>
            </div>
          </div>
        </div>
        <div className="bewerbung-bottom">
          <div className="container-function">
            <h1> Wie funktioniert Create Now?</h1>
            <p>
              Das Prinzip ist einfach: Egal ob für Youtube oder für die große
              Leinwand, ein Problem vereint alle Regisseure - Der Schnitt! Und
              da wird es dann nochmal richtig teuer und aufwändig, denn was
              bringt einem das gesammelte Material ohne es richtig formen zu
              können? Nichts! Da kommen wir ins Spiel, unsere Cutter kümmern
              sich um ALLE Projekte die der Kunde möchte und das zu einem festen
              Tarif. Ganz einfach aus einem der 3 Pakete wählen und schon kann
              die Datenmenge per Upload auf unseren Server geladen werden.
              Anschließend werden alle Freelancer in unserer Kartei darüber
              informiert und wem das Projekt gefällt, kann sich dem ganz einfach
              per Klick annehmen.{" "}
            </p>
          </div>
          <div className="container-join">
            <div>
              <h1> Du willst bei uns mitmachen?</h1>
            </div>
            <div className="button-div-join">
              <a
                href="https://form.jotform.com/220475386767064"
                target="_blank"
              >
                <button className="button">Jetzt bewerben</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
