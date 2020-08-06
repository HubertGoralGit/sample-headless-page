import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 510px;
  background: white;
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  padding: 0 30px 48px 30px;
  margin-bottom: 40px;
  margin-top: 0;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    width: 350px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHeading = styled(Heading)`
  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`

const Card = ({ id, title, content, slide, query, render }) => (
  <CardWrapper
    id={id}
    data-sal={slide}
    data-sal-delay="300"
    data-sal-easing="ease"
  >
    <ImageWrapper>
      <StaticQuery query={query} render={render} />
    </ImageWrapper>
    <StyledHeading small title={title}>
      {title}
    </StyledHeading>
    <Paragraph content={content}>{content}</Paragraph>
  </CardWrapper>
)

export const query = graphql`
  query {
    image1: file(name: { eq: "card-1" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(name: { eq: "card-2" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(name: { eq: "card-3" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Card
