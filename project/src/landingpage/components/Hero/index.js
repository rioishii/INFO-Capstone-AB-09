import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
//eslint-disable-next-line
import { css } from "styled-components/macro"

import Header from "../Header"
import { PrimaryButton as PrimaryButtonBase } from "../Button"

import DesignIllustration from "../../images/design-illustration-2.svg"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`
const Paragraph = tw.p`my-5 lg:my-8 text-xl xl:text-2xl`

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-4 md:mt-4 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
])

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>You emit what you eat.</Heading>
            <Paragraph>
              Food accounts for up to 30% of your carbon footprint. See how your
              lunch scores on emissions.
            </Paragraph>
            <PrimaryButton buttonRounded={true} as="a" href="#">
              Learn More
            </PrimaryButton>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </>
  )
}
