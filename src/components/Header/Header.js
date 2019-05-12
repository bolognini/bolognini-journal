import React from 'react'
import { Link } from "gatsby"
import {
  HeaderWrapper,
  LogoWrapper,
  NavBar,
  NavList,
  NavItem
} from './Header.style'
import Logo from '../../../static/assets/home.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavBar>
        <NavList>
          <NavItem>
            <Link to="/">Posts</Link>
          </NavItem>
          <NavItem>
            <Link to="/">About</Link>
          </NavItem>
        </NavList>
      </NavBar>
    </HeaderWrapper>
  )
}

export default Header