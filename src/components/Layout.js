import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './Header'
import theme from 'styled-theming'

export const design = {
  rajah: '#F6BD60',
  burntSienna: '#E9724C',
  wildSand: '#F5F4F4',
  hippieBlue: '#5C9EAD',
  outerSpace: '#313638',
  primaryFont: 'Poppins',
  secondaryFont: 'Lato',
  hugeTitle: '64px',
  largeTitle: '48px',
  mediumTitle: '40px',
  smallTitle: '32px',
  hugeText: '24px',
  largeText: '18px',
  mediumText: '16px',
  smallText: '12px',
  cardBoxShadow: '6px 8px 20px 0 rgba(0, 0, 0, 0.08)',
  buttonBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.2)',
  inputBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.07)'
}

export const backgroundColor = theme('mode', {
  light: design.wildSand,
  dark: design.outerSpace
})

export const textColor = theme('mode', {
  light: design.outerSpace,
  dark: design.wildSand
})

export const cardPosition = theme('position', {
  flex:`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  grid:`
    @supports (display: grid) {
      display: grid;
      grid-gap: 24px;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    display: flex;
    flex-wrap: wrap;
  `
})

export const padding = theme('layout', {
  compact: '0.5rem',
  cozy: '1.5rem'
})

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
  return (
    <ThemeProvider theme={{ mode: color, layout: layout, position: position }}>
      <Fragment>
        <GlobalStyle />
        <Header />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout