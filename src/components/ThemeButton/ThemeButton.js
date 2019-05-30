import React from 'react'
import Light from '../../../static/assets/lightbulb.svg'
import { ThemeButtonWrapper, Button } from './ThemeButton.style'

const ThemeButton = () => {
  return (
    <ThemeButtonWrapper>
      <Button>
        <Light />
      </Button>
    </ThemeButtonWrapper>
  )
}

export default ThemeButton