import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"
import Button from "../Button/Button"
import Logo from "../../assets/icons/Logo-light.png"

const FooterWrapper = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ isWhite }) => (isWhite ? "#fff" : "#5a98d0")};
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    text-align: left;
    width: 300px;
  }
`

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin-bottom: 40px;
  opacity: 0.6;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    text-align: left;
    width: 500px;
  }
`

const FooterFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 40px 0;
  background: #316099;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    padding: 50px 15vw;
    justify-content: space-between;
    width: 95%;
    border-top-right-radius: 200px;
  }
`

const FooterTitleContent = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterSecondSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 80px 20px;
  background: #316099;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    padding: 50px 15vw 80px 15vw;
    justify-content: space-between;
    width: 95%;
  }
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactChild = styled.div`
  display: flex;
  align-items: center;
`
const StyledLogo = styled.img`
  height: 40px;
  margin-right: 10px;
`

const StyledParagraphContact = styled(Paragraph)`
  font-weight: bold;
  margin-right: 25px;
  padding-left: 5px;
`

const StyledParagraphAbout = styled(Paragraph)`
  padding-left: 5px;
  cursor: pointer;
`

const LinkTo = styled.a`
  font-family: "Montserrat";
  font-size: 1.6rem;
  line-height: 26px;
  margin: 16px 0;
  color: white;
  padding-left: 5px;
  cursor: pointer;
  text-decoration: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Footer = ({ isWhite }) => (
  <FooterWrapper isWhite={isWhite}>
    <FooterFirstSection>
      <FooterTitleContent>
        <StyledHeading white small>
          Intersted to work with our team?
        </StyledHeading>
        <StyledParagraph white>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </StyledParagraph>
      </FooterTitleContent>
      <StyledLink to="/contact">
        <Button>Let's Talk</Button>
      </StyledLink>
    </FooterFirstSection>
    <FooterSecondSection>
      <ContactWrapper>
        <ContactChild>
          <StyledLogo src={Logo} alt="Logo" />
          <Heading small white>
            AAA
          </Heading>
        </ContactChild>
        <ContactChild>
          <StyledParagraphContact white>A.</StyledParagraphContact>
          <Paragraph white>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Paragraph>
        </ContactChild>
        <ContactChild>
          <StyledParagraphContact white>T.</StyledParagraphContact>
          <Paragraph white>+62-812-7313-4321</Paragraph>
        </ContactChild>
        <ContactChild>
          <StyledParagraphContact white>E.</StyledParagraphContact>
          <Paragraph white>hello.aaa@gmail.com</Paragraph>
        </ContactChild>
      </ContactWrapper>
      <ContactWrapper>
        <ContactChild>
          <Heading small white>
            About US
          </Heading>
        </ContactChild>
        <ContactChild>
          <StyledParagraphAbout white onClick={() => scrollTo("#hero")}>
            About
          </StyledParagraphAbout>
        </ContactChild>
        <ContactChild>
          <StyledParagraphAbout white onClick={() => scrollTo("#whatwedo")}>
            What We Do
          </StyledParagraphAbout>
        </ContactChild>
        <ContactChild>
          <StyledParagraphAbout white onClick={() => scrollTo("#project")}>
            Project
          </StyledParagraphAbout>
        </ContactChild>
        <ContactChild>
          <StyledParagraphAbout white onClick={() => scrollTo("#homefooter")}>
            How It Work With Us
          </StyledParagraphAbout>
        </ContactChild>
      </ContactWrapper>
      <ContactWrapper>
        <ContactChild>
          <Heading small white>
            Follow US
          </Heading>
        </ContactChild>
        <ContactChild>
          <LinkTo white href="https://www.instagram.com/" target="_blank">
            Instagram
          </LinkTo>
        </ContactChild>
        <ContactChild>
          <LinkTo white href="https://www.facebook.com/" target="_blank">
            Facebook
          </LinkTo>
        </ContactChild>
        <ContactChild>
          <LinkTo white href="https://www.linkedin.com/" target="_blank">
            Linkedin
          </LinkTo>
        </ContactChild>
        <ContactChild>
          <LinkTo white href="https://www.youtube.com/" target="_blank">
            Youtube
          </LinkTo>
        </ContactChild>
      </ContactWrapper>
    </FooterSecondSection>
  </FooterWrapper>
)

export default Footer
