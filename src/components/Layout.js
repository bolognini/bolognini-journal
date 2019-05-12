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
  smallText: '12px'
}

export const backgroundColor = theme('mode', {
  light: design.wildSand,
  dark: design.outerSpace
})

export const textColor = theme('mode', {
  light: design.outerSpace,
  dark: design.wildSand
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

const Layout = ({ children, color, layout }) => {
  return (
    <ThemeProvider theme={{ mode: color, layout: layout }}>
      <Fragment>
        <GlobalStyle />
        <Header />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout