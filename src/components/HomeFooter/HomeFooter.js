import React from "react"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

const HomeFooterWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #5a98d0;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    border-top-left-radius: 200px;
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    text-align: left;
    width: 200px;
  }
`

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin-bottom: 40px;
  opacity: 0.6;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    text-align: left;
    width: 500px;
    margin-right: 15%;
  }
`

const FooterFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    padding: 50px 15vw;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const FooterSecondSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    padding-bottom: 120px;
  }
`

const FooterLogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;

    &.second-row {
      div {
        border-bottom: none;
      }
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  width: 250px;
  height: 150px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  &.last {
    text-transform: none !important;
    border-bottom: none;
    background: #316099;
  }

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    border-right: 1px solid white;

    &:last-of-type {
      border-right: none;
    }
  }
`

const HomeFooter = () => (
  <HomeFooterWrapper id="homefooter">
    <FooterFirstSection>
      <StyledHeading white small>
        Our Beloved Client
      </StyledHeading>
      <StyledParagraph white>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </StyledParagraph>
    </FooterFirstSection>
    <FooterSecondSection>
      <FooterLogosWrapper>
        <LogoWrapper>
          <Paragraph white>Logo Client 1</Paragraph>
        </LogoWrapper>
        <LogoWrapper>
          <Paragraph white>Logo Client 2</Paragraph>
        </LogoWrapper>
        <LogoWrapper>
          <Paragraph white>Logo Client 3</Paragraph>
        </LogoWrapper>
        <LogoWrapper>
          <Paragraph white>Logo Client 4</Paragraph>
        </LogoWrapper>
      </FooterLogosWrapper>
      <FooterLogosWrapper className="second-row">
        <LogoWrapper>
          <Paragraph white>Logo Client 5</Paragraph>
        </LogoWrapper>
        <LogoWrapper>
          <Paragraph white>Logo Client 6</Paragraph>
        </LogoWrapper>
        <LogoWrapper>
          <Paragraph white>Logo Client 7</Paragraph>
        </LogoWrapper>
        <LogoWrapper className="last">
          <Paragraph white>More Client</Paragraph>
        </LogoWrapper>
      </FooterLogosWrapper>
    </FooterSecondSection>
    <Footer />
  </HomeFooterWrapper>
)

export default HomeFooter
