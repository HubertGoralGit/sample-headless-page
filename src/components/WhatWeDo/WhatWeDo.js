import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Card from "../Card/Card"
import Heading from "../Heading/Heading"

const WhatWeDoWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 35px;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    align-items: flex-start;
    padding: 75px 160px;
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    width: 300px;
    text-align: left;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    max-height: 1200px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 100px;
    right: 0px;
    padding: 0 120px;

    #second-card {
      order: -1;
      margin-top: 300px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.resolution.xl}) {
    padding: 0 240px;
  }
`

const WhatWeDo = () => (
  <WhatWeDoWrapper>
    <StyledHeading small>
      What we do to help our client grow in digital era.
    </StyledHeading>
    <CardsWrapper>
      <Card
        id="first-card"
        title="Bring Technology To Your Comfrotable Home"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        slide="slide-left"
        query={graphql`
          query {
            file(name: { eq: "card-1" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
      />
      <Card
        id="second-card"
        title="Make Your business To Be Better Famous In Internet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        slide="slide-right"
        query={graphql`
          query {
            file(name: { eq: "card-2" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
      />
      <Card
        id="third-card"
        title="Build Your Digital Product That Suitable For Your Need"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        slide="slide-left"
        query={graphql`
          query {
            file(name: { eq: "card-3" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
      />
    </CardsWrapper>
  </WhatWeDoWrapper>
)

export default WhatWeDo
