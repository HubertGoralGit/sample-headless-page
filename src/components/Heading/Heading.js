import styled, { css } from "styled-components"

const Heading = styled.h1`
  font-family: "Montserrat";
  color: #1F3F68;
  ${({ white }) =>
    white &&
    css`
      color: white;
    `}
  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: 52px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.resolution.md}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
        line-height: 74px;
      }
    `}
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};

      @media only screen and (min-width: ${({ theme }) =>
          theme.resolution.md}) {
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 32px;
      }
    `}

`

export default Heading
