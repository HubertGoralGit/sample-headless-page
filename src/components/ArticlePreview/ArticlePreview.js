import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

const PreviewWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    flex-direction: row;
    box-shadow: none;
  }
`

const PreviewInfoLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 0 10px 10px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    margin-top: 0;
    padding: 0 0 0 20px;
    justify-content: space-between;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    width: 1050px;
  }
`

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 10px 0;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    /* max-width: 500px; */
  }
`

const Auhtor = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #1f3f68;
  margin: 0;
`

const PublishedAt = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.4);
  margin: 0;
`

const StyledHeading = styled(Heading)`
  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    margin-top: 0;
  }
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Preview = ({
  title,
  image,
  slug,
  author,
  publishedAt,
  articleContent,
}) => (
  <PreviewWrapper to={`/articles/${slug}`}>
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <FlexBox>
        <StyledHeading small>{title}</StyledHeading>
        <StyledParagraph>{articleContent.substring(0, 200)}...</StyledParagraph>
      </FlexBox>
      <FlexBox>
        <Auhtor>{author}</Auhtor>
        <PublishedAt>{publishedAt}</PublishedAt>
      </FlexBox>
    </PreviewInfoLabel>
  </PreviewWrapper>
)

export default Preview
