import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import Image from "gatsby-image"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

const OurProjectWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 35px;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-wrap: wrap;
    padding: 75px 160px;
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    width: 200px;
    text-align: left;
    margin-right: 60px;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    width: 700px;
    margin-top: 25px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`

const ProjectImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 341px;
  margin-bottom: 20px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    height: 60vh;
    width: 48%;

    &:first-of-type {
      width: 100%;
      margin-bottom: 80px;
    }
  }
`

const StyledImage = styled(Image)`
  height: 100%;
  border-radius: 10px;
  img {
    object-fit: fill !important;
    object-position: 0 0 !important;
  }
`

const StyledImageContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  top: 0;
  width: 400px;

  &.first {
    left: 190px;

    @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
      left: calc(100% - 350px);
      top: 20px;
    }
  }
`

const StyledHeadingImage = styled(Heading)`
  margin-bottom: 10px;
`

const OurProject = ({ data }) => (
  <OurProjectWrapper>
    <TitleWrapper>
      <StyledHeading small>Our Finished Project</StyledHeading>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </StyledParagraph>
    </TitleWrapper>
    <ProjectImagesWrapper>
      <ProjectImage>
        <StaticQuery
          query={query}
          render={data => (
            <StyledImage fluid={data.image1.childImageSharp.fluid} />
          )}
        />
        <StyledImageContent className="first">
          <StyledHeadingImage white>Smart Home Installation</StyledHeadingImage>
          <Paragraph white>In Muarakana Housing Estate</Paragraph>
        </StyledImageContent>
      </ProjectImage>
      <ProjectImage>
        <StaticQuery
          query={query}
          render={data => (
            <StyledImage fluid={data.image2.childImageSharp.fluid} />
          )}
        />
        <StyledImageContent>
          <StyledHeadingImage white>Sparklite App</StyledHeadingImage>
          <Paragraph white>Marketplace</Paragraph>
        </StyledImageContent>
      </ProjectImage>
      <ProjectImage>
        <StaticQuery
          query={query}
          render={data => (
            <StyledImage fluid={data.image3.childImageSharp.fluid} />
          )}
        />
        <StyledImageContent>
          <StyledHeadingImage white>Sparklite App</StyledHeadingImage>
          <Paragraph white>Marketplace</Paragraph>
        </StyledImageContent>
      </ProjectImage>
    </ProjectImagesWrapper>
  </OurProjectWrapper>
)

const query = graphql`
  query {
    image1: file(name: { eq: "project-1" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(name: { eq: "project-2" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(name: { eq: "project-3" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default OurProject
