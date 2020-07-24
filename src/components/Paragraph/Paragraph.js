import styled from "styled-components"

const Paragraph = styled.p`
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #1f3f68;
`

export default Paragraph
