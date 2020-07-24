import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero/Hero"
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const IndexPage = () => (
  <HomeWrapper>
    <Hero />
    <WhatWeDo />
  </HomeWrapper>
)

export default IndexPage
