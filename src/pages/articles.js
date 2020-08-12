import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import slugify from "slugify"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import Footer from "../components/Footer/Footer"
import SubSideHeader from "../components/SubSideHeader/SubSideHeader"

const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.l}) {
    padding: 20px 160px;
  }
`

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data
  return (
    <>
      <SubSideHeader
        title="Blog"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua."
      />
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage, author, meta, articleContent }) => (
          <ArticlePreview
            key={title}
            title={title}
            author={author}
            publishedAt={meta.firstPublishedAt}
            articleContent={articleContent[1].paragraphContent}
            image={featuredImage.fluid}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
      <Footer isWhite />
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        author
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        meta {
          firstPublishedAt(fromNow: true)
        }
        articleContent {
          ... on DatoCmsParagraph {
            id
            paragraphContent
          }
        }
      }
    }
  }
`

export default ArticlesPage
