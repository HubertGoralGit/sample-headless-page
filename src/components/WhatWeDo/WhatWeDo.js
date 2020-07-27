import React from "react"
import styled from "styled-components"
import Card from "../Card/Card"
import Heading from '../Heading/Heading';

const WhatWeDoWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 35px;
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 40px;
`

const WhatWeDo = () => (
  <WhatWeDoWrapper>
    <StyledHeading>What we do to help our client grow in digital era.</StyledHeading>
    <Card id="first-card" title="Bring Technology To Your Comfrotable Home" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." slide="slide-left"/>
    <Card id="second-card" title="Make Your business To Be Better Famous In Internet" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." slide="slide-right"/>
    <Card id="third-card" title="Build Your Digital Product That Suitable For Your Need" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." slide="slide-left"/>
  </WhatWeDoWrapper>
)

export default WhatWeDo
