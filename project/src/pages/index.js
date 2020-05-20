import React from "react"
import tw from "twin.macro"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "../landingpage/helper/AnimationRevealPage"
import Hero from "../landingpage/components/Hero"
import Features from "../landingpage/components/Features"
import Steps from "../landingpage/components/Steps"
import stepsImage from "../images/login.png"
import Footer from "../landingpage/components/Footer"

const LandingPage = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`
  const HighlightedText = tw.span`text-primary-500`

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features />
      <Steps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={stepsImage}
      />
      <Footer />
    </AnimationRevealPage>
  )
}

export default LandingPage
