import React, { Component } from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: transparent;
  font-family: "Montserrat";
  padding: 0 35px;
  z-index: 100;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    padding: 0 70px;
  }
`

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  position: fixed;
  width: 100vw;
  height: calc(100vh - 80px);
  right: 0;
  bottom: 0;
  background: white;
  padding-top: 100px;
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    transform: none;
    height: auto;
    width: auto;
    flex-direction: row;
    position: static;
    padding-top: 0;
    background: transparent;
  }
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 32px;
  color: #356ead;

  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 0;
    margin-left: 32px;
    text-transform: lowercase;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledHamburgerMenu = styled(HamburgerMenu)`
  @media only screen and (min-width: ${({ theme }) => theme.resolution.md}) {
    display: none;
  }
`

const LogoImage = styled.img`
  height: 25px;
  cursor: pointer;
`

class Navigation extends Component {
  state = { isMenuVisible: false }

  handleShowMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    return (
      <NavigationWrapper>
        <StaticQuery
          query={graphql`
            query LogoImageUrl {
              file(name: { eq: "Logo" }) {
                publicURL
              }
            }
          `}
          render={data => (
            <Link to="/">
              <LogoImage src={data.file.publicURL} />
            </Link>
          )}
        />
        <StyledHamburgerMenu
          isOpen={this.state.isMenuVisible}
          menuClicked={this.handleShowMenu.bind(this)}
          width={25}
          height={15}
          strokeWidth={3}
          rotate={0}
          color="#356EAD"
          borderRadius={0}
          animationDuration={0.3}
        />
        <NavigationList isVisible={this.state.isMenuVisible}>
          <NavigationListItem onClick={this.handleShowMenu.bind(this)}>
            <Link to="/">Home</Link>
          </NavigationListItem>
          <NavigationListItem onClick={this.handleShowMenu.bind(this)}>
            <Link to="/articles">Articles</Link>
          </NavigationListItem>
          <NavigationListItem onClick={this.handleShowMenu.bind(this)}>
            <Link to="/contact">Contact</Link>
          </NavigationListItem>
        </NavigationList>
      </NavigationWrapper>
    )
  }
}

export default Navigation
