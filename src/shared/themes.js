import theme from 'styled-theming'
import { design } from './design'

export const backgroundColor = theme('mode', {
  light: design.wildSand,
  dark: design.outerSpace
})

export const backgroundCard = theme('mode', {
  light: design.white,
  dark: design.capeCod
})

export const backgroundIcon = theme('mode', {
  light: design.capeCod,
  dark: design.white
})

export const textIcon = theme('mode', {
  light: design.white,
  dark: design.capeCod
})

export const textColor = theme('mode', {
  light: design.outerSpace,
  dark: design.wildSand
})

export const titleColor = theme('mode', {
  light: design.apple,
  dark: design.deepBlush
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
  default: '250px',
  regular: '170px',
  compact: '100px'
})