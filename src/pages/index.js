import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero/Hero"
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"
import OurProject from "../components/OurProject/OurProject"

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const IndexPage = () => (
  <HomeWrapper>
    <Hero />
    <WhatWeDo />
    <OurProject />
  </HomeWrapper>
)

export default IndexPage
