import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import Image from "gatsby-image"
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

const StyledImage = styled(Image)`
  width: 65%;
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

const Card = ({ id, title, content, slide, query }) => (
  <CardWrapper
    id={id}
    data-sal={slide}
    data-sal-delay="300"
    data-sal-easing="ease"
  >
    <ImageWrapper>
      <StaticQuery
        query={query}
        render={data => <StyledImage fluid={data.file.childImageSharp.fluid} />}
      />
    </ImageWrapper>
    <StyledHeading small titl={title}>
      {title}
    </StyledHeading>
    <Paragraph content={content}>{content}</Paragraph>
  </CardWrapper>
)

export default Card
