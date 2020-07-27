import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"
import Paragraph from "../Paragraph/Paragraph"

const HeroWrapper = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  background: linear-gradient(
    0deg,
    #98c3e8 8.84%,
    rgba(152, 195, 232, 0) 31.12%
  );
  position: relative;
`

const HeroContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px 40px 0;
  justify-content: space-around;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    width: 50%;
    text-align: left;
    align-items: flex-start;
    margin-left: 60px;
    justify-content: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.resolution.xl}) {
    width: 40%;
    text-align: left;
    align-items: flex-start;
    margin-left: 120px;
  }
`

const HeroHeading = styled(Heading)`
  margin-bottom: 40px;
`

const HeroParagraph = styled(Paragraph)`
  margin-bottom: 40px;
  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    margin-bottom: 120px;
  }
`

const StyledImage = styled(Image)`
  display: none;
  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    display: block;
    position: absolute !important;
    top: 40px;
    right: 40px;
    width: 40%;
    object-fit: cover;
  }
`

const Hero = () => (
  <HeroWrapper>
    <HeroContentWrapper>
      <HeroHeading big>New Automation Tool for Your Home</HeroHeading>
      <HeroParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
        tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
        odio tellus elit.
      </HeroParagraph>
      <Button>See Our Project</Button>
    </HeroContentWrapper>
    <StaticQuery
      query={graphql`
        query {
          file(name: { eq: "hero-image" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => <StyledImage fluid={data.file.childImageSharp.fluid} />}
    />
  </HeroWrapper>
)

export default Hero
