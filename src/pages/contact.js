import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { StaticQuery } from "gatsby"
import Footer from "../components/Footer/Footer"
import SubSideHeader from "../components/SubSideHeader/SubSideHeader"
import Paragraph from "../components/Paragraph/Paragraph"
import Heading from "../components/Heading/Heading"
import Button from "../components/Button/Button"

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    flex-direction: row;
    padding: 40px 120px;
  }
`

const ContactContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    margin-right: 40px;
  }
`

const ContactFormWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: #ffffff;
  box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  margin-bottom: 40px;
  align-items: center;
  text-align: center;
  padding: 20px 15px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    height: 100%;
    width: 540px;
    padding: 20px 25px;
  }
`

const UppercaseHeading = styled(Heading)`
  text-transform: uppercase;
`

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #1f3f68;
  opacity: 0.6;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`

const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 25px 0;

  p {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.04em;
    color: #1f3f68;
    opacity: 0.8;
    margin-bottom: 5px;
  }
`

const ContactFormInput = styled.input`
  opacity: 0.4;
  border: 1px solid #356ead;
  box-sizing: border-box;
  border-radius: 10px;
  height: 52px;
  width: 100%;
  padding: 0 10px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    height: 62px;
  }
`

const ContactFormTextarea = styled.textarea`
  opacity: 0.4;
  border: 1px solid #356ead;
  box-sizing: border-box;
  border-radius: 10px;
  height: 120px;
  width: 100%;
  padding: 10px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    height: 180px;
    margin-bottom: 40px;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    margin-bottom: 40px;
  }
`

const StyledContactImage = styled(Image)`
  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    width: 370px;
    height: 220px;
  }
`

const ContactPage = ({ data }) => (
  <>
    <SubSideHeader
      title="Contact Us"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ContactWrapper>
      <ContactContentWrapper>
        <StaticQuery
          query={query}
          render={data => (
            <StyledContactImage fluid={data.contact.childImageSharp.fluid} />
          )}
        />
        <UppercaseHeading small>address</UppercaseHeading>
        <StyledParagraph>
          Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.
        </StyledParagraph>
        <UppercaseHeading small>phone</UppercaseHeading>
        <ContactItem>
          <StaticQuery
            query={query}
            render={data => (
              <StyledImage fluid={data.phone.childImageSharp.fluid} />
            )}
          />
          <StyledParagraph>+62-812-7313-4321</StyledParagraph>
        </ContactItem>
        <ContactItem>
          <StaticQuery
            query={query}
            render={data => (
              <StyledImage fluid={data.phone.childImageSharp.fluid} />
            )}
          />
          <StyledParagraph>+62-812-7313-4321</StyledParagraph>
        </ContactItem>
        <UppercaseHeading small>online service</UppercaseHeading>
        <ContactItem>
          <StaticQuery
            query={query}
            render={data => (
              <StyledImage fluid={data.website.childImageSharp.fluid} />
            )}
          />
          <StyledParagraph>www.aaa.com</StyledParagraph>
        </ContactItem>
        <ContactItem>
          <StaticQuery
            query={query}
            render={data => (
              <StyledImage fluid={data.mail.childImageSharp.fluid} />
            )}
          />
          <StyledParagraph>aaa.mail@mail.com</StyledParagraph>
        </ContactItem>
      </ContactContentWrapper>
      <ContactFormWrapper>
        <UppercaseHeading small>send us message</UppercaseHeading>
        <FormItemWrapper>
          <p>Full Name</p>
          <ContactFormInput placeholder="Your Name" />
        </FormItemWrapper>
        <FormItemWrapper>
          <p>Email</p>
          <ContactFormInput placeholder="Your Email" />
        </FormItemWrapper>
        <FormItemWrapper>
          <p>Message</p>
          <ContactFormTextarea placeholder="Your Message" />
        </FormItemWrapper>
        <StyledButton>Submit</StyledButton>
      </ContactFormWrapper>
    </ContactWrapper>
    <Footer isWhite />
  </>
)

export const query = graphql`
  query {
    contact: file(name: { eq: "contact" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    phone: file(name: { eq: "phone" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    website: file(name: { eq: "website" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mail: file(name: { eq: "mail" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
