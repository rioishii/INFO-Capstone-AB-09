import React from "react"
import theme from "../themes"
import Navbar from "../components/Navbar"
import Hero from "../sections/hero"
import Features from "../sections/features"
import Whyus from "../sections/whyus"
import Aboutus from "../sections/aboutus"
import CssBaseline from "@material-ui/core/CssBaseline"
import Footer from "../components/Footer"
import { MuiThemeProvider } from "@material-ui/core/styles"

const LandingPage = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Whyus />
        <Aboutus />
      </main>
      <Footer />
    </MuiThemeProvider>
  )
}

export default LandingPage
