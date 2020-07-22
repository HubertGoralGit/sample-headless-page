import React from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`

const IndexPage = () => (
  <>
    <Navigation />
    <h1>Hi people</h1>
    <StyledDiv />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
)

export default IndexPage
