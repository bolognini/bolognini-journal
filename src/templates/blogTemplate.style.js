import styled from 'styled-components'
import { backgroundColor, textColor, padding } from '../components/Layout'

export const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};

  img {
    width: 50%;
  }
`

export const Title = styled.h1`
  color: pink;
  background-color: royalblue;
  padding: ${padding};
`