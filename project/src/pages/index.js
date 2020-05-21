import React from "react"
import tw from "twin.macro"
import AnimationRevealPage from "../landingpage/helper/AnimationRevealPage"
import Hero from "../landingpage/components/Hero"
import Features from "../landingpage/components/Features"
import Steps from "../landingpage/components/Steps"
import WhyUs from "../landingpage/components/WhyUs"
import AboutUs from "../landingpage/components/AboutUs"
import Footer from "../landingpage/components/Footer"
import theme from "../themes"
import { MuiThemeProvider } from "@material-ui/core/styles"

const LandingPage = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <AnimationRevealPage>
        <Hero roundedHeaderButton={true} />
        <Features />
        <Steps />
        <WhyUs />
        <AboutUs />
        <Footer />
      </AnimationRevealPage>
    </MuiThemeProvider>
  )
}

export default LandingPage
