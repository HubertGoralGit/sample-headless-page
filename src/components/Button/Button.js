import styled from "styled-components"

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  background-color: #5a98d0;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSize.xs};
  outline: none;
  box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.6);
  transition: 0.2s;

  :hover {
    box-shadow: 5px 10px 20px rgb(53, 110, 173);
  }
`

export default Button
