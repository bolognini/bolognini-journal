import React, { Fragment, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import moment from 'moment'
import { design } from '../shared/design'
import Header from './Header'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: ${props => props.overlay === 'true' && design.luxorGold};
  transition: ${props => props.overlay === 'true' && 'all .2s linear'};
`

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Poppins:500,600,700');

  body {
    margin: 0;
    padding: 0;
    font-family: ${design.secondaryFont};
  }

  a {
    text-decoration: none;
    color: black;
  }
`

const Layout = ({ children, color, layout, position }) => {

  useEffect(() => {
    setInterval(() => {
      let currTime = moment()
      if(currTime.format('H') <= 5 || currTime.format('H') >= 20) {
        localStorage.setItem('overlay', true)
        return
      } 
      localStorage.setItem('overlay', false)
    }, 100)
  }, []);

  return (
    <ThemeProvider theme={{ mode: color, layout: layout, position: position }}>
      <Fragment>
        <GlobalStyle />
        <Header />
        {children}
        <Overlay overlay={localStorage.getItem('overlay')}/>
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout