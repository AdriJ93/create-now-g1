import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/Layout.css"

function Layout({ children }) {
  return (
    <div className="body">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
