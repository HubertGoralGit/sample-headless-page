import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
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
  padding: 48px 30px;
`

const Card = () => (
  <CardWrapper>
    <StaticQuery
      query={graphql`
        query {
          file(name: { eq: "card-2" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => <Image fluid={data.file.childImageSharp.fluid} />}
    />
    <Heading small>Make your business To Be Better Famous In Internet</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Paragraph>
  </CardWrapper>
)

export default Card
