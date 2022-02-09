import React from "react"
import "../styles/Home.css"
import Title from "../images/EditorDesktopMatt.jpg"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"
import { Helmet, helmet } from "react-helmet"

function Home() {
  return (
    <>
      <Helmet>
        <title>CREATE NOW</title>
      </Helmet>
      <Layout>
        <div className="home" style={{ backgroundImage: `url(${Title})` }}>
          <div className="container">
            <h1> Cutter oder Video Editor Freelancer gesucht?</h1>
            <p> Unkompliziert und schnell Videoschnitt Projekte umsetzen!</p>
            <Link to="/offers">
              <button className="button"> Unsere Angebote </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
