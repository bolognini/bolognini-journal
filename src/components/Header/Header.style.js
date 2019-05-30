import styled from 'styled-components'
import { design } from '../../shared/design'

export const HeaderWrapper = styled.header`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  display: flex;
  justify-content: space-between;
  background-color: ${design.elm};
  padding: 10px 20px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    fill: ${design.eden};
  }
`

export const NavBar = styled.nav`
`

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`

export const NavItem = styled.li`
  list-style: none;
  padding-right: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-size: ${design.mediumText};
  
  a {
    color: ${design.white};
  }
`