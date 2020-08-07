import React from "react";
import styled from "styled-components";
import Heading from '../Heading/Heading'

const FooterWrapper = styled.section`
width: 100%;
height: 100vh;
background: #316099;
`

const Footer = () => (
  <FooterWrapper><Heading white small>Intersted to woek with our team?</Heading></FooterWrapper>
)

export default Footer
