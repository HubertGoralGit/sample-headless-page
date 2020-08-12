import React from "react"
import styled from "styled-components"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 40px 0;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(253.6deg, #98d0fc 2.46%, #3481d7 93.24%);
  position: relative;
  margin-bottom: 40px;
  height: 300px;
  justify-content: center;
`

const StyledParagraph = styled(Paragraph)`
  font-family: Gilroy;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.4);
  max-width: 600px;
`

const SubSideHeader = ({ title, content }) => (
  <Wrapper id="hero">
    <Heading white title={title}>
      {title}
    </Heading>
    <StyledParagraph content={content}>{content}</StyledParagraph>
  </Wrapper>
)

export default SubSideHeader
