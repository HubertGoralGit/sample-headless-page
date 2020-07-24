import React from "react"
import styled from "styled-components"
import Card from "../Card/Card"

const WhatWeDoWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 35px;
`

const WhatWeDo = () => (
  <WhatWeDoWrapper>
    <Card />
  </WhatWeDoWrapper>
)

export default WhatWeDo
