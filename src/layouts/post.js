import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import SubSideHeader from "../components/SubSideHeader/SubSideHeader"
import Paragraph from "../components/Paragraph/Paragraph"
import Heading from "../components/Heading/Heading"
import Footer from "../components/Footer/Footer"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      featuredImage {
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`

const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    padding: 20px 240px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: 300px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    height: 500px !important;
    width: 1000px !important;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    max-width: 800px;
  }
`

const StyledHeading = styled(Heading)`
  margin: 20px 0 0 0;
`

const PostLayout = ({ data }) => {
  return (
    <PostWrapper>
      <SubSideHeader title={data.datoCmsArticle.title} />
      <PostContentWrapper>
        <StyledImage fixed={data.datoCmsArticle.featuredImage.fixed} />
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1]

          switch (itemKey) {
            case "paragraphContent":
              return (
                <StyledParagraph key={item.id}>{item[itemKey]}</StyledParagraph>
              )
            case "headingContent":
              return (
                <StyledHeading key={item.id}>{item[itemKey]}</StyledHeading>
              )
            case "imageData":
              return <StyledImage key={item.id} fixed={item[itemKey].fixed} />
            default:
              return null
          }
        })}
      </PostContentWrapper>
      <Footer isWhite />
    </PostWrapper>
  )
}

export default PostLayout
