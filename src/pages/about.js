import React from "react"
import "../styles/About.css"
import AdrianWulf from "../images/Adrian_Wulf.jpg"
import NicolausKastner from "../images/Nicolaus_Kastner.jpg"
import TitleWhite from "../images/whiteBackground.jpg"
import Layout from "../components/Layout.js"

function About() {
  return (
    <Layout>
      <div className="about" style={{ backgroundImage: `url(${TitleWhite})` }}>
        <div className="aboutLeft">
          <div className="aboutContainer3">
            <h2>Das Team</h2>
            <div className="box">
              <div className="boxItem1">
                <div className="boxContent1">
                  <img src={AdrianWulf} />
                  <h3>Adrian Wulf</h3>
                  <p>Gründer von Create Now</p>
                </div>
              </div>
              <div className="boxItem2">
                <div className="boxContent1">
                  <img src={NicolausKastner} />
                  <h3>Nicolaus Kastner</h3>
                  <p>Gründer von Create Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutRight">
          <div className="aboutContainer1">
            <h2>
              CREATE NOW – Die Geschichte <br />
              <br />
            </h2>
            <p>
              Seinen Anfang nahm alles vor ca. 10 Jahren, eine Freundschaft
              wurde geknüpft, doch die beruflichen Wege verliefen getrennt.
              Adrian Wulf absolvierte zunächst an der Friedrich-Alexander
              Universität in Nürnberg seinen Bachelor in
              Wirtschaftswissenschaften und arbeitete anschließend als
              “Marketing Consultant” für einen Zulieferer von BMW. Nicolaus
              Kastner stieg in die Fußstapfen seiner Eltern und begann nach dem
              schulischen Abschluss eine Ausbildung zum Redakteur und arbeitet
              über die Jahre für verschiedene Sender wie Kabel1, Pro7 und DMAX.
            </p>
          </div>
          <div className="aboutContainer2">
            <h2>
              Unsere Vision <br />
              <br />
            </h2>
            <p>
              In der heutigen Zeit spielt sich ein Großteil des Lebens “online”
              und “visuell” ab, sei es das alt bekannte Fernsehen oder moderne
              Streaming Plattformen wie Twitch und Youtube. Doch im Wandel der
              Zeit ist auch der Zuschauer anspruchsvoller geworden, immer mehr
              Effekte, schnellere und bessere Schnitttechniken gehören zum guten
              Ton und sind eine Voraussetzung um erfolgreich den eigenen Content
              zu vermarkten. Doch wie genau geht das? An diesem Punkt übernehmen
              wir! C-NOW vermittelt dir den passenden Editor für deine
              gewünschten Ansprüche! Verschwende keine Zeit, lass es die Profis
              machen!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
